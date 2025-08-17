// Destination Chain Contract (e.g., on Sepolia): RWASettlerONFT.sol
// This extends ONFT721 for receiving cross-chain RWAs, integrates with Chainlink for verification, and handles settlement.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ONFT721 } from "@layerzerolabs/onft-evm/contracts/onft721/ONFT721.sol";
import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import { Origin } from "@layerzerolabs/oapp-evm/contracts/oapp/OApp.sol";

contract RWASettlerONFT is ONFT721 {
    mapping(uint256 => bool) private _settledTokens; // Track settled RWAs
    mapping(uint256 => string) private _receivedMetadata;

    AggregatorV3Interface public priceFeed; // Chainlink Data Feed (e.g., ETH/USD)

    constructor(
        string memory _name,
        string memory _symbol,
        address _lzEndpoint,
        address _delegate,
        address _priceFeedAddress
    ) ONFT721(_name, _symbol, _lzEndpoint, _delegate) {
        priceFeed = AggregatorV3Interface(_priceFeedAddress); // e.g., Sepolia ETH/USD: 0x694AA1769357215DE4FAC081bf1f309aDC325306
    }

    // Override _lzReceive to handle incoming cross-chain message and settle
    function _lzReceive(
        Origin calldata _origin,
        bytes32 _guid,
        bytes calldata _message,
        address /*_executor*/,
        bytes calldata /*_extraData*/
    ) internal virtual override {
        (uint256 tokenId, string memory metadata, uint256 requiredValue) = abi.decode(
            _message,
            (uint256, string, uint256)
        ); // Decode embedded data
        _credit(msg.sender, tokenId, _origin.srcEid); // Mint/receive the NFT
        settleRWA(tokenId, metadata, requiredValue); // Auto-settle after receive
        emit ONFTReceived(_guid, _origin.srcEid, msg.sender, tokenId);
    }

    // Settlement function: Verifies with Chainlink and settles
    function settleRWA(uint256 tokenId, string memory metadata, uint256 requiredValue) internal {
        require(verifyWithChainlink(requiredValue), "Verification failed: Value below threshold");
        _settledTokens[tokenId] = true;
        _receivedMetadata[tokenId] = metadata;
        // Emit event or integrate with DeFi
    }

    // Verify using Chainlink Data Feed
    function verifyWithChainlink(uint256 requiredValue) public view returns (bool) {
        uint256 MAX_STALENESS = 1 hours; // Ensure proof is recent (e.g., bank API timestamp)
        (uint80 roundId, int256 price, , uint256 timestamp, ) = priceFeed.latestRoundData(); // Get latest "payment" data (price as proxy)
        require(roundId != 0, "Invalid round ID"); // Valid data
        require(price > 0, "Invalid payment data");
        require(block.timestamp - timestamp <= MAX_STALENESS, "Payment proof is stale"); // Prevent old data (anti-double-spend)
        return uint256(price) >= requiredValue; // Confirm payment meets RWA value (e.g., invoice amount)
    }

    function isSettled(uint256 tokenId) public view returns (bool) {
        return _settledTokens[tokenId];
    }

    function getReceivedMetadata(uint256 tokenId) public view returns (string memory) {
        return _receivedMetadata[tokenId];
    }

    // Override for cross-chain debit (burn on source)
    function _debit(address _from, uint256 _tokenId, uint32 /*_dstEid*/) internal virtual override {
        if (_from != ownerOf(_tokenId)) revert("Not owner");
        _burn(_tokenId);
    }

    // Override for cross-chain credit (mint on destination)
    function _credit(address _to, uint256 _tokenId, uint32 /*_srcEid*/) internal virtual override {
        _mint(_to, _tokenId);
    }
}
