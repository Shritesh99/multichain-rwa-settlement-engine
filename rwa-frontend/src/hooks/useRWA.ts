import { useState } from "react";
import { useWriteContract, useReadContract } from "wagmi";
import {
	CONTRACT_ADDRESSES,
	RWAMINTER_ABI,
	RWASETTLER_ABI,
	CHAIN_IDS,
} from "../config/contracts";

export interface ContractCallResult {
	success: boolean;
	hash?: string;
	error?: string;
	metadata?: string;
	verified?: boolean;
}

export interface TransferResult {
	success: boolean;
	hash?: string;
	guid?: string;
	error?: string;
}

export interface SettlementStatus {
	isSettled: boolean;
	metadata: string;
	verified: boolean;
	requiredValue: number;
}

export const useRWA = () => {
	const [loading, setLoading] = useState(false);
	const { writeContract, isPending, data: writeData } = useWriteContract();

	// Flow 1: Mint RWA on source chain (Hedera)
	const mintRWA = async (
		to: string,
		metadata: string
	): Promise<ContractCallResult> => {
		setLoading(true);
		try {
			// Call the smart contract to mint RWA
			writeContract({
				address: CONTRACT_ADDRESSES.RWAMINTER as `0x${string}`,
				abi: RWAMINTER_ABI,
				functionName: "mintRWA",
				args: [to, metadata],
			});

			// In wagmi v2, the transaction hash is not immediately available
			// We'll return a success message and the user can check their wallet
			return {
				success: true,
				hash: "Transaction submitted - check your wallet",
				metadata: `RWA NFT minting initiated! Recipient: ${to}`,
			};
		} catch (error) {
			console.error("Mint error:", error);
			return {
				success: false,
				error:
					error instanceof Error
						? error.message
						: "Unknown error",
			};
		} finally {
			setLoading(false);
		}
	};

	// Flow 2: Cross-Chain Transfer via LayerZero ONFT
	const crossChainTransfer = async (
		destinationEid: number,
		to: string,
		tokenId: number,
		instructions: string = "verify payment proof",
		rwaCurrentValue: bigint = BigInt(1000) // RWA current value for oracle verification
	): Promise<TransferResult> => {
		setLoading(true);
		try {
			// Call the smart contract to initiate cross-chain transfer
			writeContract({
				address: CONTRACT_ADDRESSES.RWAMINTER as `0x${string}`,
				abi: RWAMINTER_ABI,
				functionName: "hybridSendRWA",
				args: [
					destinationEid,
					to as `0x${string}`,
					BigInt(tokenId),
					rwaCurrentValue, // Pass the RWA current value for oracle verification
					"0x", // options - LayerZero options
				],
				value: BigInt(0), // No ETH value needed for hybridSendRWA
			});

			return {
				success: true,
				hash: "Cross-chain transfer initiated - check your wallet",
				guid: `Transfer initiated for token ${tokenId} to ${
					destinationEid === CHAIN_IDS.SEPOLIA_EID
						? "Sepolia"
						: "Unknown chain"
				} with RWA value ${rwaCurrentValue} for oracle verification`,
			};
		} catch (error) {
			console.error("Cross-chain transfer error:", error);
			return {
				success: false,
				error:
					error instanceof Error
						? error.message
						: "Unknown error",
			};
		} finally {
			setLoading(false);
		}
	};

	// Flow 3: Get Settlement Status and Verification
	const getSettlementStatus = async (
		tokenId: number
	): Promise<SettlementStatus | null> => {
		try {
			// For now, return mock data since we need to implement read contract calls
			// In a real implementation, we would call the contract's view functions
			return {
				isSettled: tokenId > 0,
				metadata: `Invoice #${tokenId} - Payment verification pending`,
				verified: false,
				requiredValue: 1000,
			};
		} catch (error) {
			console.error("Settlement status error:", error);
			return null;
		}
	};

	// Verify with Chainlink Oracle
	const verifyWithChainlink = async (
		requiredValue: number
	): Promise<ContractCallResult> => {
		try {
			// For now, return mock data since we need to implement read contract calls
			// In a real implementation, we would call the contract's view functions
			return {
				success: true,
				verified: requiredValue > 500,
			};
		} catch (error) {
			console.error("Chainlink verification error:", error);
			return {
				success: false,
				error:
					error instanceof Error
						? error.message
						: "Unknown error",
			};
		}
	};

	// Get transaction explorer link
	const getExplorerLink = (hash: string, chainId: number): string => {
		const baseUrl =
			chainId === CHAIN_IDS.HEDERA_TESTNET
				? "https://testnet.dragonglass.me"
				: "https://sepolia.etherscan.io";

		return `${baseUrl}/tx/${hash}`;
	};

	// Get LayerZero message explorer link
	const getLayerZeroExplorerLink = (guid: string): string => {
		return `https://layerzeroscan.com/tx/${guid}`;
	};

	return {
		loading,
		mintRWA,
		crossChainTransfer,
		getSettlementStatus,
		verifyWithChainlink,
		getExplorerLink,
		getLayerZeroExplorerLink,
		// Expose wagmi state for UI updates
		isPending,
		writeData,
	};
};
