export interface RWAFormData {
	metadata: string;
	tokenId: number;
	requiredValue: number;
	fractionAmount: number;
	recipients: string[];
}

export interface ContractCallResult {
	success: boolean;
	hash?: string;
	error?: string;
}

export interface ChainInfo {
	id: number;
	name: string;
	rpcUrl: string;
	eid?: number;
}

export interface RWAStatus {
	tokenId: number;
	isSettled: boolean;
	metadata?: string;
	owner?: string;
}

// LayerZero types for cross-chain transfers
export interface SendParam {
	dstEid: number;
	to: `0x${string}`;
	tokenId: bigint;
	extraOptions: `0x${string}`;
	composeMsg: `0x${string}`;
	onftCmd: `0x${string}`;
}

export interface MessagingFee {
	nativeFee: bigint;
	lzTokenFee: bigint;
}
