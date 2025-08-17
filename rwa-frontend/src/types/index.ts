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
