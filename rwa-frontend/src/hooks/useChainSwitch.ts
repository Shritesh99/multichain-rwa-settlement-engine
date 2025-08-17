import { useSwitchChain } from "wagmi";
import { CHAIN_IDS } from "../config/contracts";

export const useChainSwitch = () => {
	const { switchChain } = useSwitchChain();

	const switchToChain = async (chainId: number) => {
		try {
			await switchChain({ chainId });
			return { success: true };
		} catch (error) {
			console.error("Chain switch error:", error);
			return {
				success: false,
				error:
					error instanceof Error
						? error.message
						: "Unknown error",
			};
		}
	};

	const switchToHedera = () => switchToChain(CHAIN_IDS.HEDERA_TESTNET);
	const switchToSepolia = () => switchToChain(CHAIN_IDS.SEPOLIA);

	return {
		switchToChain,
		switchToHedera,
		switchToSepolia,
	};
};
