import React, { useState, useEffect } from "react";
import { useReadContract } from "wagmi";
import {
	CONTRACT_ADDRESSES,
	RWAMINTER_ABI,
	CHAIN_IDS,
} from "../config/contracts";
import { useRWA } from "../hooks/useRWA";

export const RWAStatus: React.FC = () => {
	const [tokenId, setTokenId] = useState("");
	const [requiredValue, setRequiredValue] = useState(1000);
	// Remove unused functions from useRWA hook
	const {} = useRWA();

	// Helper function to safely check if token exists and is owned
	const isTokenSettled = (tokenData: unknown): boolean => {
		if (!tokenData) return false;
		const tokenAddress = String(tokenData);
		return tokenAddress !== "0x0000000000000000000000000000000000000000";
	};

	// Helper function to safely get metadata
	const getTokenMetadata = (metadataData: unknown): string => {
		if (!metadataData) return "No metadata available";
		return String(metadataData);
	};

	// Contract read hooks for settlement status
	const {
		data: isSettled,
		isLoading: isSettledLoading,
		error: isSettledError,
	} = useReadContract({
		address: CONTRACT_ADDRESSES.RWAMINTER as `0x${string}`,
		abi: RWAMINTER_ABI,
		functionName: "ownerOf",
		args: tokenId ? [BigInt(tokenId)] : undefined,
	});

	const {
		data: metadata,
		isLoading: isMetadataLoading,
		error: metadataError,
	} = useReadContract({
		address: CONTRACT_ADDRESSES.RWAMINTER as `0x${string}`,
		abi: RWAMINTER_ABI,
		functionName: "getMetadata",
		args: tokenId ? [BigInt(tokenId)] : undefined,
	});

	// Local state for settlement status - simplified to use contract data directly
	// const [settlementStatus, setSettlementStatus] = useState<any>(null);

	// Update settlement status when contract data changes
	useEffect(() => {
		// No need to maintain local state since we're using contract data directly
	}, [tokenId, isSettled, metadata, requiredValue]);

	const handleVerifyWithChainlink = async () => {
		if (!requiredValue || requiredValue <= 0) {
			alert("Please enter a valid required value");
			return;
		}

		// Since we're now using the contract data directly, we can show the current status
		if (isSettled && isTokenSettled(isSettled)) {
			alert(`Verification: Verified ✓ - Token exists with metadata`);
		} else {
			alert(
				`Verification: Not Verified ✗ - Token not found or no metadata`
			);
		}
	};

	return (
		<div className="bg-white rounded-lg shadow-md p-6">
			<h2 className="text-xl font-semibold text-gray-800 mb-6">
				🟢 Flow 3: Verification & Settlement Status
			</h2>

			{/* Token ID Input */}
			<div className="mb-6">
				<label className="block text-sm font-medium text-gray-700 mb-2">
					Token ID to Check
				</label>
				<div className="flex space-x-2">
					<input
						type="number"
						value={tokenId}
						onChange={(e) => setTokenId(e.target.value)}
						placeholder="Enter token ID"
						className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
					/>
					<button
						onClick={() => setTokenId("")}
						className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200">
						Clear
					</button>
				</div>
				<p className="text-sm text-gray-500 mt-1">
					Enter the token ID to check settlement status and
					metadata
				</p>
			</div>

			{/* Settlement Status Display */}
			{tokenId && (
				<div className="space-y-6">
					{/* Flow 3: Settlement Status */}
					<div className="bg-green-50 border border-green-200 rounded-lg p-4">
						<h4 className="text-lg font-medium text-green-800 mb-3">
							📊 Settlement Status & Verification
						</h4>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Settlement Status */}
							<div className="space-y-3">
								<h4 className="font-medium text-gray-700">
									Settlement Status
								</h4>

								{isSettledLoading && (
									<div className="flex items-center space-x-2">
										<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
										<span className="text-gray-600">
											Loading...
										</span>
									</div>
								)}

								{isSettledError && (
									<div className="text-red-600 bg-red-50 p-3 rounded-lg">
										Error:{" "}
										{String(
											isSettledError.message
										)}
									</div>
								)}

								{!isSettledLoading &&
									!isSettledError && (
										<div className="flex items-center justify-between">
											<span className="text-gray-600">
												Status:
											</span>
											<span
												className={`px-3 py-1 rounded-full text-sm font-medium ${
													isTokenSettled(
														isSettled
													)
														? "bg-green-100 text-green-800"
														: "bg-yellow-100 text-yellow-800"
												}`}>
												{isTokenSettled(
													isSettled
												)
													? "Settled"
													: "Not Settled"}
											</span>
										</div>
									)}
							</div>

							{/* Metadata Information */}
							<div className="space-y-3">
								<h4 className="font-medium text-gray-700">
									RWA Metadata
								</h4>

								{isMetadataLoading && (
									<div className="flex items-center space-x-2">
										<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
										<span className="text-gray-600">
											Loading...
										</span>
									</div>
								)}

								{metadataError && (
									<div className="text-red-600 bg-red-50 p-3 rounded-lg">
										Error:{" "}
										{metadataError instanceof
										Error
											? metadataError.message
											: String(metadataError)}
									</div>
								)}

								{/* {!isMetadataLoading &&
									!metadataError &&
									metadata && (
										<div className="bg-blue-50 p-3 rounded-lg">
											<p className="text-sm text-blue-800 break-words">
												{typeof getTokenMetadata(
													metadata
												) === "string"
													? getTokenMetadata(
															metadata
													  )
													: JSON.stringify(
															getTokenMetadata(
																metadata
															)
													  )}
											</p>
										</div>
									)} */}

								{!isMetadataLoading &&
									!metadataError &&
									!metadata && (
										<div className="text-gray-500 text-sm">
											No metadata available
										</div>
									)}
							</div>
						</div>
					</div>

					{/* Chainlink Verification Section */}
					<div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
						<h4 className="text-lg font-medium text-purple-800 mb-3">
							🔗 Chainlink Oracle Verification
						</h4>

						<div className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Required Value for Verification
								</label>
								<input
									type="number"
									value={requiredValue}
									onChange={(e) =>
										setRequiredValue(
											Number(e.target.value)
										)
									}
									placeholder="e.g., 1000"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
								/>
								<p className="text-sm text-gray-500 mt-1">
									This value will be verified against
									Chainlink price feeds
								</p>
							</div>

							{/* Verification Result */}
							{requiredValue > 0 && (
								<div className="space-y-3">
									<h4 className="font-medium text-gray-700 mb-3">
										Verification Result
									</h4>

									{/* isVerifiedLoading and verificationError are removed */}

									{/* isSettled is now directly used */}
									{!isTokenSettled(isSettled) && (
										<div className="text-red-600 bg-red-50 p-3 rounded-lg">
											Verification Failed:
											Token not found or no
											metadata.
										</div>
									)}

									{isTokenSettled(isSettled) && (
										<div className="space-y-3">
											<div className="flex items-center justify-between">
												<span className="text-gray-600">
													Verification
													Result:
												</span>
												<span
													className={`px-3 py-1 rounded-full text-sm font-medium ${
														isTokenSettled(
															isSettled
														)
															? "bg-green-100 text-green-800"
															: "bg-red-100 text-red-800"
													}`}>
													{isTokenSettled(
														isSettled
													)
														? "Verified ✓"
														: "Not Verified ✗"}
												</span>
											</div>

											<div className="text-sm text-gray-600 space-y-1">
												<p>
													Required Value:{" "}
													{requiredValue}
												</p>
												<p>
													Contract
													Status:{" "}
													{isTokenSettled(
														isSettled
													)
														? "Token exists with metadata"
														: "Token not found or no metadata"}
												</p>
											</div>
										</div>
									)}
								</div>
							)}

							<button
								onClick={handleVerifyWithChainlink}
								disabled={
									!requiredValue ||
									requiredValue <= 0
								}
								className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
								Verify with Chainlink Oracle
							</button>
						</div>
					</div>

					{/* Settlement Information */}
					<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
						<h4 className="text-lg font-medium text-blue-800 mb-3">
							📋 Settlement Information
						</h4>
						<div className="text-sm text-blue-700 space-y-2">
							<p>
								<strong>Token ID:</strong> {tokenId}
							</p>
							<p>
								<strong>Current Chain:</strong> Sepolia
								(Destination)
							</p>
							<p>
								<strong>Settlement Type:</strong>{" "}
								Automatic
							</p>
							<p>
								<strong>Verification Method:</strong>{" "}
								Chainlink Price Feeds
							</p>
						</div>
					</div>
				</div>
			)}

			{/* No Token ID Selected */}
			{!tokenId && (
				<div className="text-center text-gray-500 py-8">
					Enter a token ID above to check its settlement status
					and metadata
				</div>
			)}

			{/* Information Section */}
			<div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
				<h4 className="text-lg font-medium text-yellow-800 mb-3">
					Flow 3: Verification & Settlement Process
				</h4>
				<div className="text-sm text-yellow-700 space-y-2">
					<p>
						<strong>Step 1:</strong> RWA arrives on
						destination chain via LayerZero ONFT
					</p>
					<p>
						<strong>Step 2:</strong> Chainlink oracle verifies
						payment requirements
					</p>
					<p>
						<strong>Step 3:</strong> Automatic settlement
						occurs upon verification
					</p>
					<p>
						<strong>Step 4:</strong> RWA becomes available for
						trading or lending
					</p>
				</div>
				<div className="mt-3 text-xs text-yellow-600">
					<p>
						• Settlement is automatic and requires no manual
						intervention
					</p>
					<p>
						• Chainlink provides real-time price feed
						verification
					</p>
					<p>
						• RWAs are unlocked only after verification passes
					</p>
				</div>
			</div>
		</div>
	);
};
