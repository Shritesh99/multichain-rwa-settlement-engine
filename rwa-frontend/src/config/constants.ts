// Application Constants
export const APP_CONFIG = {
	NAME: "RWA Settlement Engine",
	VERSION: "1.0.0",
	DESCRIPTION: "Multichain Real World Asset Settlement Engine",
};

// UI Constants
export const UI_CONSTANTS = {
	MAX_METADATA_LENGTH: 1000,
	MIN_TOKEN_ID: 1,
	MAX_TOKEN_ID: 999999999,
	DEFAULT_FRACTION_AMOUNT: 1000,
	DEFAULT_REQUIRED_VALUE: 1000,
};

// Error Messages
export const ERROR_MESSAGES = {
	INVALID_ADDRESS: "Invalid address format",
	INVALID_TOKEN_ID: "Invalid token ID",
	INVALID_AMOUNT: "Invalid amount",
	WALLET_NOT_CONNECTED: "Please connect your wallet",
	TRANSACTION_FAILED: "Transaction failed",
	NETWORK_ERROR: "Network error occurred",
};

// Success Messages
export const SUCCESS_MESSAGES = {
	MINT_SUCCESS: "RWA minted successfully",
	TRANSFER_SUCCESS: "RWA transferred successfully",
	FRACTIONALIZE_SUCCESS: "RWA fractionalized successfully",
	TRADE_SUCCESS: "Trade executed successfully",
};
