import React, { useState } from "react";
import { useAccount, useChainId } from "wagmi";
import { useRWA } from "../hooks/useRWA";
import { CHAIN_IDS } from "../config/contracts";

export const RWAForm: React.FC = () => {
	const { address } = useAccount();
	const chainId = useChainId();
	const { mintRWA, crossChainTransfer, loading } = useRWA();

	// Form state for Mint RWA
	const [recipientAddress, setRecipientAddress] = useState("");
	const [invoiceMetadata, setInvoiceMetadata] = useState("");

	// Form state for Cross-Chain Transfer
	const [tokenId, setTokenId] = useState("");
	const [destinationAddress, setDestinationAddress] = useState("");
	const [destinationChain, setDestinationChain] = useState(
		CHAIN_IDS.SEPOLIA_EID
	);
	const [transferInstructions, setTransferInstructions] = useState(
		"verify payment proof"
	);
	const [rwaCurrentValue, setRwaCurrentValue] = useState("1000"); // Current value of RWA for oracle verification

	// Results state
	const [mintResult, setMintResult] = useState<any>(null);
	const [transferResult, setTransferResult] = useState<any>(null);

	// Flow 1: Mint RWA on source chain (Hedera)
	const handleMintRWA = async () => {
		if (!address || !recipientAddress || !invoiceMetadata) {
			alert("Please fill in all fields");
			return;
		}

		const result = await mintRWA(recipientAddress, invoiceMetadata);
		setMintResult(result);

		if (result.success) {
			alert(`RWA NFT minted successfully! ${result.metadata}`);
		} else {
			alert(`Mint failed: ${result.error}`);
		}
	};

	// Flow 2: Cross-Chain Transfer via LayerZero ONFT
	const handleCrossChainTransfer = async () => {
		if (!address || !tokenId || !destinationAddress) {
			alert("Please fill in all fields");
			return;
		}

		const rwaValue = parseFloat(rwaCurrentValue);
		if (isNaN(rwaValue) || rwaValue <= 0) {
			alert("Please enter a valid RWA current value");
			return;
		}

		const result = await crossChainTransfer(
			destinationChain,
			destinationAddress,
			parseInt(tokenId),
			transferInstructions,
			BigInt(Math.floor(rwaValue * 1e18)) // Convert RWA value to wei for oracle verification
		);

		setTransferResult(result);

		if (result.success) {
			alert(`Cross-chain transfer initiated! ${result.guid}`);
		} else {
			alert(`Transfer failed: ${result.error}`);
		}
	};

	const getCurrentChainName = () => {
		return chainId === CHAIN_IDS.HEDERA_TESTNET
			? "Hedera Testnet"
			: "Sepolia";
	};

	const getDestinationChainName = () => {
		return destinationChain === CHAIN_IDS.SEPOLIA_EID
			? "Sepolia"
			: "Hedera Testnet";
	};

	return (
		<div className="bg-white rounded-lg shadow-md p-6">
			<h2 className="text-xl font-semibold text-gray-800 mb-6">
				RWA Management Interface
			</h2>

			{/* Flow 1: Mint RWA on Source Chain */}
			<div className="mb-8">
				<h3 className="text-lg font-medium text-gray-700 mb-4">
					🔵 Flow 1: Mint RWA NFT (Source Chain:{" "}
					{getCurrentChainName()})
				</h3>
				<div className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Recipient Address
						</label>
						<input
							type="text"
							value={recipientAddress}
							onChange={(e) =>
								setRecipientAddress(e.target.value)
							}
							placeholder="0x..."
							className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Invoice Metadata
						</label>
						<textarea
							value={invoiceMetadata}
							onChange={(e) =>
								setInvoiceMetadata(e.target.value)
							}
							placeholder="Invoice #12345 - $10,000 - Due Date: 2024-01-31"
							rows={3}
							className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						/>
						<p className="text-sm text-gray-500 mt-1">
							Enter detailed invoice information (invoice
							number, amount, due date, etc.)
						</p>
					</div>
					<button
						onClick={handleMintRWA}
						disabled={
							loading ||
							!recipientAddress ||
							!invoiceMetadata
						}
						className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
						{loading ? "Minting..." : "Mint RWA NFT"}
					</button>
				</div>

				{/* Mint Result Display */}
				{mintResult && (
					<div
						className={`mt-4 p-4 rounded-lg ${
							mintResult.success
								? "bg-green-50 border border-green-200"
								: "bg-red-50 border border-red-200"
						}`}>
						<h4 className="font-medium mb-2">
							{mintResult.success
								? "✅ Mint Successful"
								: "❌ Mint Failed"}
						</h4>
						{mintResult.success && (
							<div className="space-y-2">
								<p className="text-sm text-green-800">
									{mintResult.metadata}
								</p>
								<p className="text-sm text-green-700">
									Transaction: {mintResult.hash}
								</p>
								<p className="text-xs text-green-600">
									Check your wallet for the
									transaction hash to view on
									explorer
								</p>
							</div>
						)}
						{mintResult.error && (
							<p className="text-sm text-red-800">
								Error: {mintResult.error}
							</p>
						)}
					</div>
				)}
			</div>

			{/* Flow 2: Cross-Chain Transfer */}
			<div className="mb-8">
				<h3 className="text-lg font-medium text-gray-700 mb-4">
					🔄 Flow 2: Cross-Chain Transfer with Oracle
					Verification
				</h3>
				<p className="text-sm text-gray-600 mb-4">
					Transfer RWA NFTs to destination chain with embedded
					value for oracle verification and automatic settlement
				</p>
				<div className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Token ID to Transfer
							</label>
							<input
								type="number"
								value={tokenId}
								onChange={(e) =>
									setTokenId(e.target.value)
								}
								placeholder="1"
								className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Destination Address
							</label>
							<input
								type="text"
								value={destinationAddress}
								onChange={(e) =>
									setDestinationAddress(
										e.target.value
									)
								}
								placeholder="0x..."
								className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Destination Chain
							</label>
							<select
								value={destinationChain}
								onChange={(e) =>
									setDestinationChain(
										Number(e.target.value)
									)
								}
								className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
								<option value={CHAIN_IDS.SEPOLIA_EID}>
									Sepolia (40161)
								</option>
								<option
									value={CHAIN_IDS.HEDERA_TESTNET}>
									Hedera Testnet (296)
								</option>
							</select>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Current Value of RWA (USD)
							</label>
							<input
								type="number"
								step="0.01"
								value={rwaCurrentValue}
								onChange={(e) =>
									setRwaCurrentValue(e.target.value)
								}
								placeholder="1000"
								className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
							<p className="text-sm text-gray-500 mt-1">
								This value will be verified by oracles
								on the destination chain to ensure the
								RWA meets settlement requirements
							</p>
						</div>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Transfer Instructions
						</label>
						<input
							type="text"
							value={transferInstructions}
							onChange={(e) =>
								setTransferInstructions(e.target.value)
							}
							placeholder="verify payment proof"
							className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						/>
						<p className="text-sm text-gray-500 mt-1">
							Instructions embedded in the cross-chain
							message
						</p>
					</div>

					<button
						onClick={handleCrossChainTransfer}
						disabled={
							loading || !tokenId || !destinationAddress
						}
						className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
						{loading
							? "Initiating Transfer..."
							: "Initiate Cross-Chain Transfer with Oracle Verification"}
					</button>
				</div>

				{/* Transfer Result Display */}
				{transferResult && (
					<div
						className={`mt-4 p-4 rounded-lg ${
							transferResult.success
								? "bg-green-50 border border-green-200"
								: "bg-red-50 border border-red-200"
						}`}>
						<h4 className="font-medium mb-2">
							{transferResult.success
								? "✅ Transfer Initiated"
								: "❌ Transfer Failed"}
						</h4>
						{transferResult.success && (
							<div className="space-y-2">
								<p className="text-sm text-green-800">
									{transferResult.guid}
								</p>
								<p className="text-sm text-green-700">
									Transaction: {transferResult.hash}
								</p>
								<p className="text-xs text-green-600">
									Transfer to{" "}
									{getDestinationChainName()}{" "}
									initiated with RWA value $
									{rwaCurrentValue} for oracle
									verification.
								</p>
								<p className="text-xs text-blue-600">
									Expected latency: 1-5 minutes on
									testnets
								</p>
								<p className="text-xs text-purple-600">
									Oracle will verify RWA value meets
									settlement requirements on
									destination chain
								</p>
							</div>
						)}
						{transferResult.error && (
							<p className="text-sm text-red-800">
								Error: {transferResult.error}
							</p>
						)}
					</div>
				)}
			</div>

			{/* Information Section */}
			<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
				<h4 className="text-lg font-medium text-blue-800 mb-3">
					How It Works
				</h4>
				<div className="text-sm text-blue-700 space-y-2">
					<p>
						<strong>Flow 1 - Mint RWA:</strong> Create
						tokenized invoice NFTs on the source chain
					</p>
					<p>
						<strong>Flow 2 - Cross-Chain Transfer:</strong>{" "}
						Use LayerZero ONFT to transfer NFTs with embedded
						RWA value for oracle verification
					</p>
					<p>
						<strong>Flow 3 - Settlement:</strong> Automatic
						settlement on destination chain with oracle
						verification of RWA value
					</p>
				</div>
				<div className="mt-3 text-xs text-blue-600">
					<p>• LayerZero handles the cross-chain NFT transfer</p>
					<p>
						• RWA current value is embedded for oracle
						verification on destination chain
					</p>
					<p>
						• Settlement occurs automatically upon oracle
						verification of RWA value
					</p>
				</div>
			</div>
		</div>
	);
};
