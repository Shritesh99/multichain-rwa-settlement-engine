import { CHAIN_IDS } from "../config/contracts";

export const formatAddress = (address: string): string => {
	if (!address) return "";
	return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const validateAddress = (address: string): boolean => {
	return /^0x[a-fA-F0-9]{40}$/.test(address);
};

export const getChainName = (chainId: number): string => {
	switch (chainId) {
		case CHAIN_IDS.HEDERA_TESTNET:
			return "Hedera Testnet";
		case CHAIN_IDS.SEPOLIA:
			return "Sepolia";
		default:
			return "Unknown Chain";
	}
};

export const formatTokenAmount = (amount: number): string => {
	return new Intl.NumberFormat("en-US", {
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format(amount);
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch (err) {
		console.error("Failed to copy text: ", err);
		return false;
	}
};
