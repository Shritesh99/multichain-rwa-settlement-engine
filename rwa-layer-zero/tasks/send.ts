import { BigNumberish, BytesLike } from 'ethers'
import { task } from 'hardhat/config'

import { Options, addressToBytes32 } from '@layerzerolabs/lz-v2-utilities'

interface SendParam {
    dstEid: BigNumberish // Destination LayerZero EndpointV2 ID.
    to: BytesLike // Recipient address.
    tokenId: BigNumberish // Token ID of the NFT to send.
    extraOptions: BytesLike // Additional options supplied by the caller to be used in the LayerZero message.
    composeMsg: BytesLike // The composed message for the send() operation.
    onftCmd: BytesLike // The ONFT command to be executed, unused in default ONFT implementations.
}

task('transfer-nft-arbitrum-sepolia', 'Transfers an NFT from Arbitrum to Sepolia using MyONFTAdapter')
    .addParam('adapter', 'Address of RWAMinterONFT contract on Arbitrum')
    .addParam('recipient', 'Recipient address on Sepolia')
    .addParam('tokenid', 'Token ID to transfer')
    .setAction(async (taskArgs, { ethers, deployments }) => {
        const { adapter, recipient, tokenid } = taskArgs
        const [signer] = await ethers.getSigners()
        const adapterDeployment = await deployments.getDeploymentsFromAddress(adapter)
        console.log(adapter)

        // Get adapter contract instance
        const adapterContract = new ethers.Contract(adapterDeployment[0].address, adapterDeployment[0].abi, signer)

        // Get the underlying ERC721 token address
        const tokenAddress = await adapterContract.token()
        const erc721Contract = await ethers.getContractAt('IERC721', tokenAddress)

        // Check and set approval for specific token ID
        const approved = await erc721Contract.getApproved(tokenid)
        if (approved.toLowerCase() !== adapterDeployment[0].address.toLowerCase()) {
            const approveTx = await erc721Contract.approve(adapterDeployment[0].address, tokenid)
            await approveTx.wait() // Grant approval for specific token ID
        }

        // Build the parameters for send to Sepolia (dstEid: 40161)
        const sendParam: SendParam = {
            dstEid: 40161,
            to: addressToBytes32(recipient), // convert to bytes32
            tokenId: tokenid,
            extraOptions: '0x', // Default options
            composeMsg: '0x', // No additional compose msg
            onftCmd: '0x',
        }

        // Get quote for the transfer
        const quotedFee = await adapterContract.quoteSend(sendParam, false)

        // Send the NFT, using the returned quoted fee in msg.value
        const tx = await adapterContract.send(sendParam, quotedFee, signer.address, { value: quotedFee.nativeFee })

        const receipt = await tx.wait()
        console.log('🎉 NFT transferred from Arbitrum to Sepolia! Transaction hash:', receipt.transactionHash)
    })
