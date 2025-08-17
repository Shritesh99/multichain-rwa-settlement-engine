// Source Chain Contract (e.g., on Hedera Testnet): RWAMinterONFT.sol
// This extends ONFT721 for LayerZero cross-chain NFT functionality, including minting for RWAs.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ONFT721 } from "@layerzerolabs/onft-evm/contracts/onft721/ONFT721.sol";
import { MessagingFee } from "@layerzerolabs/lz-evm-protocol-v2/contracts/interfaces/ILayerZeroEndpointV2.sol";

contract RWAMinterONFT is ONFT721 {
    uint256 private _tokenIdCounter;
    mapping(uint256 => string) private _tokenMetadata; // Store RWA details (e.g., invoice value, desc)

    constructor(
        string memory _name,
        string memory _symbol,
        address _lzEndpoint,
        address _delegate
    ) ONFT721(_name, _symbol, _lzEndpoint, _delegate) {}

    // Mint RWA as NFT
    function mintRWA(address to, string memory metadata) public onlyOwner returns (uint256) {
        _tokenIdCounter++;
        uint256 tokenId = _tokenIdCounter;
        _safeMint(to, tokenId);
        _tokenMetadata[tokenId] = metadata; // e.g., "Invoice: $10000, Desc: Payment due"
        return tokenId;
    }

    // Override for cross-chain debit (burn on source for transfer)
    function _debit(address _from, uint256 _tokenId, uint32 /*_dstEid*/) internal virtual override {
        if (_from != ownerOf(_tokenId)) revert("Not owner");
        _burn(_tokenId);
    }

    // Override for cross-chain credit (mint on destination)
    function _credit(address _to, uint256 _tokenId, uint32 /*_srcEid*/) internal virtual override {
        _mint(_to, _tokenId);
    }
    function getMetadata(uint256 tokenId) public view returns (string memory) {
        return _tokenMetadata[tokenId];
    }

    // LayerZero Send: ONFT for token transfer (CCIP removed)
    function sendRWA(
        uint32 dstEid, // LayerZero destination EID (e.g., Sepolia: 40161)
        address to, // Receiver on destination
        uint256 tokenId, // RWA token ID
        uint256 requiredValue, // Value for oracle verification
        bytes calldata options // LayerZero options
    ) external payable onlyOwner {
        // LayerZero ONFT Transfer
        _lzSend(
            dstEid,
            abi.encode(to, tokenId, getMetadata(tokenId), requiredValue), // Embed data in LZ message
            options,
            MessagingFee(msg.value, 0),
            payable(msg.sender)
        );
    }
}
