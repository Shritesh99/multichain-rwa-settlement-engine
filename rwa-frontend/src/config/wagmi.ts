import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";
import { CHAIN_IDS, RPC_URLS } from "./contracts";

// Custom chain configurations
const hederaTestnet = {
	id: CHAIN_IDS.HEDERA_TESTNET,
	name: "Hedera Testnet",
	network: "hedera-testnet",
	iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/4642.png",
	iconBackground: "#fff",
	nativeCurrency: {
		decimals: 18,
		name: "HBAR",
		symbol: "HBAR",
	},
	rpcUrls: {
		default: { http: [RPC_URLS.HEDERA_TESTNET] },
		public: { http: [RPC_URLS.HEDERA_TESTNET] },
	},
	blockExplorers: {
		default: {
			name: "Hedera Explorer",
			url: "https://testnet.dragonglass.me",
		},
	},
	testnet: true,
};

const sepoliaChain = {
	...sepolia,
	rpcUrls: {
		default: { http: [RPC_URLS.SEPOLIA] },
		public: { http: [RPC_URLS.SEPOLIA] },
	},
};

export const config = getDefaultConfig({
	appName: "RWA Frontend",
	projectId:
		process.env.REACT_APP_WALLETCONNECT_PROJECT_ID || "YOUR_PROJECT_ID",
	chains: [hederaTestnet, sepoliaChain, mainnet],
	ssr: false,
});
