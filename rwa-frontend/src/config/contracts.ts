// Contract Addresses
export const CONTRACT_ADDRESSES = {
	RWAMINTER:
		process.env.REACT_APP_RWA_MINTER_ADDRESS ||
		"0x288dE9B46ffC4CE7672c4Dc87D48DE74DFB7e101",
	RWASETTLER:
		process.env.REACT_APP_RWA_SETTLER_ADDRESS ||
		"0x61e2FB453d1356683775d2A61a38a344e835d1fB",
	// Additional contracts for RWA Settlement Engine
	TOKEN_POOL:
		process.env.REACT_APP_TOKEN_POOL_ADDRESS || "0xYourTokenPoolAddress",
	RISK_MANAGER:
		process.env.REACT_APP_RISK_MANAGER_ADDRESS ||
		"0xYourRiskManagerAddress",
	ORACLE_AGGREGATOR:
		process.env.REACT_APP_ORACLE_AGGREGATOR_ADDRESS ||
		"0xYourOracleAggregatorAddress",
};

// Chain IDs and EIDs for LayerZero
export const CHAIN_IDS = {
	HEDERA_TESTNET: 296, // Source chain for minting (low-cost efficiency)
	SEPOLIA: 11155111, // Ethereum testnet for liquidity
	SEPOLIA_EID: 40161, // Sepolia EID for LayerZero
	FLARE: 14, // Flare mainnet
	FLARE_TESTNET: 114, // Flare testnet
	ETHEREUM: 1, // Ethereum mainnet
	POLYGON: 137, // Polygon mainnet
	ARBITRUM: 42161, // Arbitrum One
	OPTIMISM: 10, // Optimism
	BASE: 8453, // Base
};

// RPC URLs
export const RPC_URLS = {
	HEDERA_TESTNET:
		process.env.REACT_APP_HEDERA_RPC_URL ||
		"https://testnet.hashio.io/api",
	SEPOLIA:
		process.env.REACT_APP_SEPOLIA_RPC_URL ||
		"https://ethereum-sepolia.rpc.subquery.network/public",
	FLARE:
		process.env.REACT_APP_FLARE_RPC_URL ||
		"https://flare-api.flare.network/ext/C/rpc",
	FLARE_TESTNET:
		process.env.REACT_APP_FLARE_TESTNET_RPC_URL ||
		"https://coston2-api.flare.network/ext/C/rpc",
	ETHEREUM:
		process.env.REACT_APP_ETHEREUM_RPC_URL ||
		"https://mainnet.infura.io/v3/YOUR_INFURA_KEY",
	POLYGON:
		process.env.REACT_APP_POLYGON_RPC_URL || "https://polygon-rpc.com",
	ARBITRUM:
		process.env.REACT_APP_ARBITRUM_RPC_URL ||
		"https://arb1.arbitrum.io/rpc",
	OPTIMISM:
		process.env.REACT_APP_OPTIMISM_RPC_URL ||
		"https://mainnet.optimism.io",
	BASE: process.env.REACT_APP_BASE_RPC_URL || "https://mainnet.base.org",
};

// LayerZero Configuration
export const LAYERZERO_CONFIG = {
	ENDPOINT:
		process.env.REACT_APP_LAYERZERO_ENDPOINT ||
		"0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675",
};

// Chainlink Oracle Configuration
export const CHAINLINK_CONFIG = {
	PRICE_FEED_ADDRESS:
		process.env.REACT_APP_CHAINLINK_PRICE_FEED_ADDRESS ||
		"0xYourChainlinkPriceFeedAddress",
	CCIP_ROUTER_ADDRESS:
		process.env.REACT_APP_CCIP_ROUTER_ADDRESS ||
		"0xYourCCIPRouterAddress",
	// Additional Chainlink configurations
	ETH_USD_FEED:
		process.env.REACT_APP_ETH_USD_FEED ||
		"0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
	LINK_USD_FEED:
		process.env.REACT_APP_LINK_USD_FEED ||
		"0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c",
};

// Flare Oracle Configuration (for additional verification)
export const FLARE_CONFIG = {
	ORACLE_ADDRESS:
		process.env.REACT_APP_FLARE_ORACLE_ADDRESS ||
		"0xYourFlareOracleAddress",
	NETWORK_ID: process.env.REACT_APP_FLARE_NETWORK_ID || "flare_mainnet",
	// Flare's FTSO (Flare Time Series Oracle) addresses
	FTSO_PROVIDER:
		process.env.REACT_APP_FTSO_PROVIDER || "0xYourFTSOProviderAddress",
	FTSO_MANAGER:
		process.env.REACT_APP_FTSO_MANAGER || "0xYourFTSOManagerAddress",
};

// RWA Token Pool Configuration
export const RWA_POOL_CONFIG = {
	LIQUIDITY_POOL:
		process.env.REACT_APP_LIQUIDITY_POOL_ADDRESS ||
		"0xYourLiquidityPoolAddress",
	STAKING_POOL:
		process.env.REACT_APP_STAKING_POOL_ADDRESS ||
		"0xYourStakingPoolAddress",
	REWARDS_POOL:
		process.env.REACT_APP_REWARDS_POOL_ADDRESS ||
		"0xYourRewardsPoolAddress",
};

// Risk Management Configuration
export const RISK_MANAGEMENT_CONFIG = {
	COLLATERAL_RATIO: process.env.REACT_APP_COLLATERAL_RATIO || "150", // 150% collateralization
	MAX_LEVERAGE: process.env.REACT_APP_MAX_LEVERAGE || "3", // 3x max leverage
	LIQUIDATION_THRESHOLD:
		process.env.REACT_APP_LIQUIDATION_THRESHOLD || "120", // 120% liquidation threshold
};

// Chain information for UI
export const CHAIN_INFO = {
	[CHAIN_IDS.HEDERA_TESTNET]: {
		name: "Hedera Testnet",
		explorer: "https://testnet.dragonglass.me",
		currency: "HBAR",
		icon: "🟡",
		description: "Low-cost RWA minting",
		features: ["Efficient minting", "Low fees", "Fast finality"],
	},
	[CHAIN_IDS.SEPOLIA]: {
		name: "Sepolia",
		explorer: "https://sepolia.etherscan.io",
		currency: "ETH",
		icon: "🔵",
		description: "High liquidity settlement",
		features: ["High liquidity", "DeFi ecosystem", "Oracle integration"],
	},
	[CHAIN_IDS.FLARE]: {
		name: "Flare",
		explorer: "https://flare-explorer.flare.network",
		currency: "FLR",
		icon: "🟠",
		description: "Oracle-enhanced verification",
		features: ["FTSO oracles", "Cross-chain data", "Enhanced security"],
	},
	[CHAIN_IDS.ETHEREUM]: {
		name: "Ethereum",
		explorer: "https://etherscan.io",
		currency: "ETH",
		icon: "🔵",
		description: "Mainnet settlement",
		features: ["Maximum security", "Highest liquidity", "Full DeFi"],
	},
	[CHAIN_IDS.POLYGON]: {
		name: "Polygon",
		explorer: "https://polygonscan.com",
		currency: "MATIC",
		icon: "🟣",
		description: "Scalable settlement",
		features: ["Low fees", "Fast transactions", "Ethereum compatible"],
	},
};

// RWA Asset Types
export const RWA_ASSET_TYPES = {
	INVOICE: "invoice",
	BOND: "bond",
	REAL_ESTATE: "real_estate",
	COMMODITY: "commodity",
	PRIVATE_EQUITY: "private_equity",
	TRADE_FINANCE: "trade_finance",
};

// Settlement Instructions
export const SETTLEMENT_INSTRUCTIONS = {
	AUTO_UNLOCK: "auto_unlock_on_payment_proof",
	ESCROW_RELEASE: "escrow_release_on_verification",
	LIQUIDATION_TRIGGER: "liquidation_on_collateral_drop",
	REWARDS_DISTRIBUTION: "rewards_distribution_on_completion",
	RISK_MANAGEMENT: "risk_management_hooks_execution",
};

// Risk Management Hooks
export const RISK_MANAGEMENT_HOOKS = {
	COLLATERAL_MONITORING: "collateral_monitoring",
	LEVERAGE_CONTROL: "leverage_control",
	LIQUIDATION_PROTECTION: "liquidation_protection",
	ORACLE_VALIDATION: "oracle_validation",
	DOUBLE_SPEND_PREVENTION: "double_spend_prevention",
};

// Contract ABIs - Replace with your actual ABIs
export const RWAMINTER_ABI = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_name",
				type: "string",
			},
			{
				internalType: "string",
				name: "_symbol",
				type: "string",
			},
			{
				internalType: "address",
				name: "_lzEndpoint",
				type: "address",
			},
			{
				internalType: "address",
				name: "_delegate",
				type: "address",
			},
			{
				internalType: "address",
				name: "_ccipRouter",
				type: "address",
			},
			{
				internalType: "address",
				name: "_linkToken",
				type: "address",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "ERC721IncorrectOwner",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ERC721InsufficientApproval",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "approver",
				type: "address",
			},
		],
		name: "ERC721InvalidApprover",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
		],
		name: "ERC721InvalidOperator",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "ERC721InvalidOwner",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "receiver",
				type: "address",
			},
		],
		name: "ERC721InvalidReceiver",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address",
			},
		],
		name: "ERC721InvalidSender",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ERC721NonexistentToken",
		type: "error",
	},
	{
		inputs: [],
		name: "InvalidDelegate",
		type: "error",
	},
	{
		inputs: [],
		name: "InvalidEndpointCall",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "bytes",
				name: "options",
				type: "bytes",
			},
		],
		name: "InvalidOptions",
		type: "error",
	},
	{
		inputs: [],
		name: "InvalidReceiver",
		type: "error",
	},
	{
		inputs: [],
		name: "LzTokenUnavailable",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "eid",
				type: "uint32",
			},
		],
		name: "NoPeer",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "msgValue",
				type: "uint256",
			},
		],
		name: "NotEnoughNative",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address",
			},
		],
		name: "OnlyEndpoint",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "caller",
				type: "address",
			},
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "OnlyNFTOwner",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "eid",
				type: "uint32",
			},
			{
				internalType: "bytes32",
				name: "sender",
				type: "bytes32",
			},
		],
		name: "OnlyPeer",
		type: "error",
	},
	{
		inputs: [],
		name: "OnlySelf",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "OwnableInvalidOwner",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "OwnableUnauthorizedAccount",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address",
			},
		],
		name: "SafeERC20FailedOperation",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "bytes",
				name: "result",
				type: "bytes",
			},
		],
		name: "SimulationResult",
		type: "error",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "baseURI",
				type: "string",
			},
		],
		name: "BaseURISet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "eid",
						type: "uint32",
					},
					{
						internalType: "uint16",
						name: "msgType",
						type: "uint16",
					},
					{
						internalType: "bytes",
						name: "options",
						type: "bytes",
					},
				],
				indexed: false,
				internalType: "struct EnforcedOptionParam[]",
				name: "_enforcedOptions",
				type: "tuple[]",
			},
		],
		name: "EnforcedOptionSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "inspector",
				type: "address",
			},
		],
		name: "MsgInspectorSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "guid",
				type: "bytes32",
			},
			{
				indexed: false,
				internalType: "uint32",
				name: "srcEid",
				type: "uint32",
			},
			{
				indexed: true,
				internalType: "address",
				name: "toAddress",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ONFTReceived",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "guid",
				type: "bytes32",
			},
			{
				indexed: false,
				internalType: "uint32",
				name: "dstEid",
				type: "uint32",
			},
			{
				indexed: true,
				internalType: "address",
				name: "fromAddress",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ONFTSent",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint32",
				name: "eid",
				type: "uint32",
			},
			{
				indexed: false,
				internalType: "bytes32",
				name: "peer",
				type: "bytes32",
			},
		],
		name: "PeerSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "preCrimeAddress",
				type: "address",
			},
		],
		name: "PreCrimeSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		inputs: [],
		name: "SEND",
		outputs: [
			{
				internalType: "uint16",
				name: "",
				type: "uint16",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "SEND_AND_COMPOSE",
		outputs: [
			{
				internalType: "uint16",
				name: "",
				type: "uint16",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "srcEid",
						type: "uint32",
					},
					{
						internalType: "bytes32",
						name: "sender",
						type: "bytes32",
					},
					{
						internalType: "uint64",
						name: "nonce",
						type: "uint64",
					},
				],
				internalType: "struct Origin",
				name: "origin",
				type: "tuple",
			},
		],
		name: "allowInitializePath",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "approvalRequired",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "ccipRouter",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "_eid",
				type: "uint32",
			},
			{
				internalType: "uint16",
				name: "_msgType",
				type: "uint16",
			},
			{
				internalType: "bytes",
				name: "_extraOptions",
				type: "bytes",
			},
		],
		name: "combineOptions",
		outputs: [
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "endpoint",
		outputs: [
			{
				internalType: "contract ILayerZeroEndpointV2",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "eid",
				type: "uint32",
			},
			{
				internalType: "uint16",
				name: "msgType",
				type: "uint16",
			},
		],
		name: "enforcedOptions",
		outputs: [
			{
				internalType: "bytes",
				name: "enforcedOption",
				type: "bytes",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "getApproved",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "getMetadata",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "dstEid",
				type: "uint32",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "requiredValue",
				type: "uint256",
			},
			{
				internalType: "bytes",
				name: "options",
				type: "bytes",
			},
		],
		name: "hybridSendRWA",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "srcEid",
						type: "uint32",
					},
					{
						internalType: "bytes32",
						name: "sender",
						type: "bytes32",
					},
					{
						internalType: "uint64",
						name: "nonce",
						type: "uint64",
					},
				],
				internalType: "struct Origin",
				name: "",
				type: "tuple",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
			{
				internalType: "address",
				name: "_sender",
				type: "address",
			},
		],
		name: "isComposeMsgSender",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "_eid",
				type: "uint32",
			},
			{
				internalType: "bytes32",
				name: "_peer",
				type: "bytes32",
			},
		],
		name: "isPeer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "linkToken",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "srcEid",
						type: "uint32",
					},
					{
						internalType: "bytes32",
						name: "sender",
						type: "bytes32",
					},
					{
						internalType: "uint64",
						name: "nonce",
						type: "uint64",
					},
				],
				internalType: "struct Origin",
				name: "_origin",
				type: "tuple",
			},
			{
				internalType: "bytes32",
				name: "_guid",
				type: "bytes32",
			},
			{
				internalType: "bytes",
				name: "_message",
				type: "bytes",
			},
			{
				internalType: "address",
				name: "_executor",
				type: "address",
			},
			{
				internalType: "bytes",
				name: "_extraData",
				type: "bytes",
			},
		],
		name: "lzReceive",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						components: [
							{
								internalType: "uint32",
								name: "srcEid",
								type: "uint32",
							},
							{
								internalType: "bytes32",
								name: "sender",
								type: "bytes32",
							},
							{
								internalType: "uint64",
								name: "nonce",
								type: "uint64",
							},
						],
						internalType: "struct Origin",
						name: "origin",
						type: "tuple",
					},
					{
						internalType: "uint32",
						name: "dstEid",
						type: "uint32",
					},
					{
						internalType: "address",
						name: "receiver",
						type: "address",
					},
					{
						internalType: "bytes32",
						name: "guid",
						type: "bytes32",
					},
					{
						internalType: "uint256",
						name: "value",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "executor",
						type: "address",
					},
					{
						internalType: "bytes",
						name: "message",
						type: "bytes",
					},
					{
						internalType: "bytes",
						name: "extraData",
						type: "bytes",
					},
				],
				internalType: "struct InboundPacket[]",
				name: "_packets",
				type: "tuple[]",
			},
		],
		name: "lzReceiveAndRevert",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "srcEid",
						type: "uint32",
					},
					{
						internalType: "bytes32",
						name: "sender",
						type: "bytes32",
					},
					{
						internalType: "uint64",
						name: "nonce",
						type: "uint64",
					},
				],
				internalType: "struct Origin",
				name: "_origin",
				type: "tuple",
			},
			{
				internalType: "bytes32",
				name: "_guid",
				type: "bytes32",
			},
			{
				internalType: "bytes",
				name: "_message",
				type: "bytes",
			},
			{
				internalType: "address",
				name: "_executor",
				type: "address",
			},
			{
				internalType: "bytes",
				name: "_extraData",
				type: "bytes",
			},
		],
		name: "lzReceiveSimulate",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "string",
				name: "metadata",
				type: "string",
			},
		],
		name: "mintRWA",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "msgInspector",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "",
				type: "uint32",
			},
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		name: "nextNonce",
		outputs: [
			{
				internalType: "uint64",
				name: "nonce",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "oApp",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "oAppVersion",
		outputs: [
			{
				internalType: "uint64",
				name: "senderVersion",
				type: "uint64",
			},
			{
				internalType: "uint64",
				name: "receiverVersion",
				type: "uint64",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [],
		name: "onftVersion",
		outputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4",
			},
			{
				internalType: "uint64",
				name: "version",
				type: "uint64",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ownerOf",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "eid",
				type: "uint32",
			},
		],
		name: "peers",
		outputs: [
			{
				internalType: "bytes32",
				name: "peer",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "preCrime",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "dstEid",
						type: "uint32",
					},
					{
						internalType: "bytes32",
						name: "to",
						type: "bytes32",
					},
					{
						internalType: "uint256",
						name: "tokenId",
						type: "uint256",
					},
					{
						internalType: "bytes",
						name: "extraOptions",
						type: "bytes",
					},
					{
						internalType: "bytes",
						name: "composeMsg",
						type: "bytes",
					},
					{
						internalType: "bytes",
						name: "onftCmd",
						type: "bytes",
					},
				],
				internalType: "struct SendParam",
				name: "_sendParam",
				type: "tuple",
			},
			{
				internalType: "bool",
				name: "_payInLzToken",
				type: "bool",
			},
		],
		name: "quoteSend",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "nativeFee",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "lzTokenFee",
						type: "uint256",
					},
				],
				internalType: "struct MessagingFee",
				name: "msgFee",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "dstEid",
						type: "uint32",
					},
					{
						internalType: "bytes32",
						name: "to",
						type: "bytes32",
					},
					{
						internalType: "uint256",
						name: "tokenId",
						type: "uint256",
					},
					{
						internalType: "bytes",
						name: "extraOptions",
						type: "bytes",
					},
					{
						internalType: "bytes",
						name: "composeMsg",
						type: "bytes",
					},
					{
						internalType: "bytes",
						name: "onftCmd",
						type: "bytes",
					},
				],
				internalType: "struct SendParam",
				name: "_sendParam",
				type: "tuple",
			},
			{
				components: [
					{
						internalType: "uint256",
						name: "nativeFee",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "lzTokenFee",
						type: "uint256",
					},
				],
				internalType: "struct MessagingFee",
				name: "_fee",
				type: "tuple",
			},
			{
				internalType: "address",
				name: "_refundAddress",
				type: "address",
			},
		],
		name: "send",
		outputs: [
			{
				components: [
					{
						internalType: "bytes32",
						name: "guid",
						type: "bytes32",
					},
					{
						internalType: "uint64",
						name: "nonce",
						type: "uint64",
					},
					{
						components: [
							{
								internalType: "uint256",
								name: "nativeFee",
								type: "uint256",
							},
							{
								internalType: "uint256",
								name: "lzTokenFee",
								type: "uint256",
							},
						],
						internalType: "struct MessagingFee",
						name: "fee",
						type: "tuple",
					},
				],
				internalType: "struct MessagingReceipt",
				name: "msgReceipt",
				type: "tuple",
			},
		],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_baseTokenURI",
				type: "string",
			},
		],
		name: "setBaseURI",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_delegate",
				type: "address",
			},
		],
		name: "setDelegate",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "eid",
						type: "uint32",
					},
					{
						internalType: "uint16",
						name: "msgType",
						type: "uint16",
					},
					{
						internalType: "bytes",
						name: "options",
						type: "bytes",
					},
				],
				internalType: "struct EnforcedOptionParam[]",
				name: "_enforcedOptions",
				type: "tuple[]",
			},
		],
		name: "setEnforcedOptions",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_msgInspector",
				type: "address",
			},
		],
		name: "setMsgInspector",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "_eid",
				type: "uint32",
			},
			{
				internalType: "bytes32",
				name: "_peer",
				type: "bytes32",
			},
		],
		name: "setPeer",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_preCrime",
				type: "address",
			},
		],
		name: "setPreCrime",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4",
			},
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "token",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "tokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

export const RWASETTLER_ABI = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_name",
				type: "string",
			},
			{
				internalType: "string",
				name: "_symbol",
				type: "string",
			},
			{
				internalType: "address",
				name: "_lzEndpoint",
				type: "address",
			},
			{
				internalType: "address",
				name: "_delegate",
				type: "address",
			},
			{
				internalType: "address",
				name: "_priceFeedAddress",
				type: "address",
			},
			{
				internalType: "address",
				name: "_ccipRouter",
				type: "address",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "ERC721IncorrectOwner",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ERC721InsufficientApproval",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "approver",
				type: "address",
			},
		],
		name: "ERC721InvalidApprover",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
		],
		name: "ERC721InvalidOperator",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "ERC721InvalidOwner",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "receiver",
				type: "address",
			},
		],
		name: "ERC721InvalidReceiver",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address",
			},
		],
		name: "ERC721InvalidSender",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ERC721NonexistentToken",
		type: "error",
	},
	{
		inputs: [],
		name: "InvalidDelegate",
		type: "error",
	},
	{
		inputs: [],
		name: "InvalidEndpointCall",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "bytes",
				name: "options",
				type: "bytes",
			},
		],
		name: "InvalidOptions",
		type: "error",
	},
	{
		inputs: [],
		name: "InvalidReceiver",
		type: "error",
	},
	{
		inputs: [],
		name: "LzTokenUnavailable",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "eid",
				type: "uint32",
			},
		],
		name: "NoPeer",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "msgValue",
				type: "uint256",
			},
		],
		name: "NotEnoughNative",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address",
			},
		],
		name: "OnlyEndpoint",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "caller",
				type: "address",
			},
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "OnlyNFTOwner",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "eid",
				type: "uint32",
			},
			{
				internalType: "bytes32",
				name: "sender",
				type: "bytes32",
			},
		],
		name: "OnlyPeer",
		type: "error",
	},
	{
		inputs: [],
		name: "OnlySelf",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "OwnableInvalidOwner",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "OwnableUnauthorizedAccount",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address",
			},
		],
		name: "SafeERC20FailedOperation",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "bytes",
				name: "result",
				type: "bytes",
			},
		],
		name: "SimulationResult",
		type: "error",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "address",
				name: "receiver",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "AssetSettled",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "baseURI",
				type: "string",
			},
		],
		name: "BaseURISet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "eid",
						type: "uint32",
					},
					{
						internalType: "uint16",
						name: "msgType",
						type: "uint16",
					},
					{
						internalType: "bytes",
						name: "options",
						type: "bytes",
					},
				],
				indexed: false,
				internalType: "struct EnforcedOptionParam[]",
				name: "_enforcedOptions",
				type: "tuple[]",
			},
		],
		name: "EnforcedOptionSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "inspector",
				type: "address",
			},
		],
		name: "MsgInspectorSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "guid",
				type: "bytes32",
			},
			{
				indexed: false,
				internalType: "uint32",
				name: "srcEid",
				type: "uint32",
			},
			{
				indexed: true,
				internalType: "address",
				name: "toAddress",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ONFTReceived",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "guid",
				type: "bytes32",
			},
			{
				indexed: false,
				internalType: "uint32",
				name: "dstEid",
				type: "uint32",
			},
			{
				indexed: true,
				internalType: "address",
				name: "fromAddress",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ONFTSent",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint32",
				name: "eid",
				type: "uint32",
			},
			{
				indexed: false,
				internalType: "bytes32",
				name: "peer",
				type: "bytes32",
			},
		],
		name: "PeerSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "preCrimeAddress",
				type: "address",
			},
		],
		name: "PreCrimeSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "fractionAmount",
				type: "uint256",
			},
		],
		name: "RWAFractionalized",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "RWATradedOnUniswap",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		inputs: [],
		name: "SEND",
		outputs: [
			{
				internalType: "uint16",
				name: "",
				type: "uint16",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "SEND_AND_COMPOSE",
		outputs: [
			{
				internalType: "uint16",
				name: "",
				type: "uint16",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "srcEid",
						type: "uint32",
					},
					{
						internalType: "bytes32",
						name: "sender",
						type: "bytes32",
					},
					{
						internalType: "uint64",
						name: "nonce",
						type: "uint64",
					},
				],
				internalType: "struct Origin",
				name: "origin",
				type: "tuple",
			},
		],
		name: "allowInitializePath",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "approvalRequired",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "bytes32",
						name: "messageId",
						type: "bytes32",
					},
					{
						internalType: "uint64",
						name: "sourceChainSelector",
						type: "uint64",
					},
					{
						internalType: "bytes",
						name: "sender",
						type: "bytes",
					},
					{
						internalType: "bytes",
						name: "data",
						type: "bytes",
					},
					{
						components: [
							{
								internalType: "address",
								name: "token",
								type: "address",
							},
							{
								internalType: "uint256",
								name: "amount",
								type: "uint256",
							},
						],
						internalType: "struct Client.EVMTokenAmount[]",
						name: "destTokenAmounts",
						type: "tuple[]",
					},
				],
				internalType: "struct Client.Any2EVMMessage",
				name: "message",
				type: "tuple",
			},
		],
		name: "ccipReceive",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "ccipRouter",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "_eid",
				type: "uint32",
			},
			{
				internalType: "uint16",
				name: "_msgType",
				type: "uint16",
			},
			{
				internalType: "bytes",
				name: "_extraOptions",
				type: "bytes",
			},
		],
		name: "combineOptions",
		outputs: [
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "endpoint",
		outputs: [
			{
				internalType: "contract ILayerZeroEndpointV2",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "eid",
				type: "uint32",
			},
			{
				internalType: "uint16",
				name: "msgType",
				type: "uint16",
			},
		],
		name: "enforcedOptions",
		outputs: [
			{
				internalType: "bytes",
				name: "enforcedOption",
				type: "bytes",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "getApproved",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "getReceivedMetadata",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "srcEid",
						type: "uint32",
					},
					{
						internalType: "bytes32",
						name: "sender",
						type: "bytes32",
					},
					{
						internalType: "uint64",
						name: "nonce",
						type: "uint64",
					},
				],
				internalType: "struct Origin",
				name: "",
				type: "tuple",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
			{
				internalType: "address",
				name: "_sender",
				type: "address",
			},
		],
		name: "isComposeMsgSender",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "_eid",
				type: "uint32",
			},
			{
				internalType: "bytes32",
				name: "_peer",
				type: "bytes32",
			},
		],
		name: "isPeer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "isSettled",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "srcEid",
						type: "uint32",
					},
					{
						internalType: "bytes32",
						name: "sender",
						type: "bytes32",
					},
					{
						internalType: "uint64",
						name: "nonce",
						type: "uint64",
					},
				],
				internalType: "struct Origin",
				name: "_origin",
				type: "tuple",
			},
			{
				internalType: "bytes32",
				name: "_guid",
				type: "bytes32",
			},
			{
				internalType: "bytes",
				name: "_message",
				type: "bytes",
			},
			{
				internalType: "address",
				name: "_executor",
				type: "address",
			},
			{
				internalType: "bytes",
				name: "_extraData",
				type: "bytes",
			},
		],
		name: "lzReceive",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						components: [
							{
								internalType: "uint32",
								name: "srcEid",
								type: "uint32",
							},
							{
								internalType: "bytes32",
								name: "sender",
								type: "bytes32",
							},
							{
								internalType: "uint64",
								name: "nonce",
								type: "uint64",
							},
						],
						internalType: "struct Origin",
						name: "origin",
						type: "tuple",
					},
					{
						internalType: "uint32",
						name: "dstEid",
						type: "uint32",
					},
					{
						internalType: "address",
						name: "receiver",
						type: "address",
					},
					{
						internalType: "bytes32",
						name: "guid",
						type: "bytes32",
					},
					{
						internalType: "uint256",
						name: "value",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "executor",
						type: "address",
					},
					{
						internalType: "bytes",
						name: "message",
						type: "bytes",
					},
					{
						internalType: "bytes",
						name: "extraData",
						type: "bytes",
					},
				],
				internalType: "struct InboundPacket[]",
				name: "_packets",
				type: "tuple[]",
			},
		],
		name: "lzReceiveAndRevert",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "srcEid",
						type: "uint32",
					},
					{
						internalType: "bytes32",
						name: "sender",
						type: "bytes32",
					},
					{
						internalType: "uint64",
						name: "nonce",
						type: "uint64",
					},
				],
				internalType: "struct Origin",
				name: "_origin",
				type: "tuple",
			},
			{
				internalType: "bytes32",
				name: "_guid",
				type: "bytes32",
			},
			{
				internalType: "bytes",
				name: "_message",
				type: "bytes",
			},
			{
				internalType: "address",
				name: "_executor",
				type: "address",
			},
			{
				internalType: "bytes",
				name: "_extraData",
				type: "bytes",
			},
		],
		name: "lzReceiveSimulate",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		name: "msgInspector",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "",
				type: "uint32",
			},
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		name: "nextNonce",
		outputs: [
			{
				internalType: "uint64",
				name: "nonce",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "oApp",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "oAppVersion",
		outputs: [
			{
				internalType: "uint64",
				name: "senderVersion",
				type: "uint64",
			},
			{
				internalType: "uint64",
				name: "receiverVersion",
				type: "uint64",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [],
		name: "onftVersion",
		outputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4",
			},
			{
				internalType: "uint64",
				name: "version",
				type: "uint64",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ownerOf",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "eid",
				type: "uint32",
			},
		],
		name: "peers",
		outputs: [
			{
				internalType: "bytes32",
				name: "peer",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "preCrime",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "priceFeed",
		outputs: [
			{
				internalType: "contract AggregatorV3Interface",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "dstEid",
						type: "uint32",
					},
					{
						internalType: "bytes32",
						name: "to",
						type: "bytes32",
					},
					{
						internalType: "uint256",
						name: "tokenId",
						type: "uint256",
					},
					{
						internalType: "bytes",
						name: "extraOptions",
						type: "bytes",
					},
					{
						internalType: "bytes",
						name: "composeMsg",
						type: "bytes",
					},
					{
						internalType: "bytes",
						name: "onftCmd",
						type: "bytes",
					},
				],
				internalType: "struct SendParam",
				name: "_sendParam",
				type: "tuple",
			},
			{
				internalType: "bool",
				name: "_payInLzToken",
				type: "bool",
			},
		],
		name: "quoteSend",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "nativeFee",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "lzTokenFee",
						type: "uint256",
					},
				],
				internalType: "struct MessagingFee",
				name: "msgFee",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "dstEid",
						type: "uint32",
					},
					{
						internalType: "bytes32",
						name: "to",
						type: "bytes32",
					},
					{
						internalType: "uint256",
						name: "tokenId",
						type: "uint256",
					},
					{
						internalType: "bytes",
						name: "extraOptions",
						type: "bytes",
					},
					{
						internalType: "bytes",
						name: "composeMsg",
						type: "bytes",
					},
					{
						internalType: "bytes",
						name: "onftCmd",
						type: "bytes",
					},
				],
				internalType: "struct SendParam",
				name: "_sendParam",
				type: "tuple",
			},
			{
				components: [
					{
						internalType: "uint256",
						name: "nativeFee",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "lzTokenFee",
						type: "uint256",
					},
				],
				internalType: "struct MessagingFee",
				name: "_fee",
				type: "tuple",
			},
			{
				internalType: "address",
				name: "_refundAddress",
				type: "address",
			},
		],
		name: "send",
		outputs: [
			{
				components: [
					{
						internalType: "bytes32",
						name: "guid",
						type: "bytes32",
					},
					{
						internalType: "uint64",
						name: "nonce",
						type: "uint64",
					},
					{
						components: [
							{
								internalType: "uint256",
								name: "nativeFee",
								type: "uint256",
							},
							{
								internalType: "uint256",
								name: "lzTokenFee",
								type: "uint256",
							},
						],
						internalType: "struct MessagingFee",
						name: "fee",
						type: "tuple",
					},
				],
				internalType: "struct MessagingReceipt",
				name: "msgReceipt",
				type: "tuple",
			},
		],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_baseTokenURI",
				type: "string",
			},
		],
		name: "setBaseURI",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_delegate",
				type: "address",
			},
		],
		name: "setDelegate",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint32",
						name: "eid",
						type: "uint32",
					},
					{
						internalType: "uint16",
						name: "msgType",
						type: "uint16",
					},
					{
						internalType: "bytes",
						name: "options",
						type: "bytes",
					},
				],
				internalType: "struct EnforcedOptionParam[]",
				name: "_enforcedOptions",
				type: "tuple[]",
			},
		],
		name: "setEnforcedOptions",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_msgInspector",
				type: "address",
			},
		],
		name: "setMsgInspector",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "_eid",
				type: "uint32",
			},
			{
				internalType: "bytes32",
				name: "_peer",
				type: "bytes32",
			},
		],
		name: "setPeer",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_preCrime",
				type: "address",
			},
		],
		name: "setPreCrime",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4",
			},
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "token",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "tokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "requiredValue",
				type: "uint256",
			},
		],
		name: "verifyWithChainlink",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];
