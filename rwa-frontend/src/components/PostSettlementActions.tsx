import React, { useState } from "react";
import { useRWA } from "../hooks/useRWA";

export const PostSettlementActions: React.FC = () => {
	const { verifyWithChainlink, loading } = useRWA();

	const [requiredValue, setRequiredValue] = useState(1000);

	const handleVerifyWithChainlink = async () => {
		if (!requiredValue || requiredValue <= 0) {
			alert("Please enter a valid required value");
			return;
		}

		const result = await verifyWithChainlink(requiredValue);
		if (result.success) {
			alert(
				`Chainlink Verification Success! Verified: ${
					result.verified ? "Yes" : "No"
				}`
			);
		} else {
			alert(`Verification Failed: ${result.error}`);
		}
	};

	return (
		<div className="bg-white rounded-lg shadow-md p-6">
			<h2 className="text-xl font-semibold text-gray-800 mb-6">
				🚀 Post-Settlement Actions
			</h2>

			{/* Chainlink Verification Section */}
			<div className="mb-8">
				<h3 className="text-lg font-medium text-gray-700 mb-4">
					🔗 Verify with Chainlink Oracle
				</h3>
				<div className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Required Value for Verification
						</label>
						<input
							type="number"
							value={requiredValue}
							onChange={(e) =>
								setRequiredValue(Number(e.target.value))
							}
							placeholder="e.g., 1000"
							className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
						/>
						<p className="text-sm text-gray-500 mt-1">
							This value will be verified against Chainlink
							price feeds to ensure payment meets RWA
							requirements
						</p>
					</div>

					<button
						onClick={handleVerifyWithChainlink}
						disabled={loading || requiredValue <= 0}
						className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
						{loading
							? "Verifying..."
							: "Verify with Chainlink"}
					</button>
				</div>
			</div>

			{/* Information Section */}
			<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
				<h3 className="text-lg font-medium text-yellow-800 mb-3">
					Available Actions
				</h3>
				<div className="text-sm text-yellow-700 space-y-2">
					<p>
						<strong>Currently Available:</strong>
					</p>
					<ul className="list-disc list-inside space-y-1 ml-4">
						<li>
							Chainlink verification for payment validation
						</li>
						<li>RWA settlement status checking</li>
						<li>Metadata retrieval for settled RWAs</li>
					</ul>

					<p className="mt-3">
						<strong>Coming Soon (from contracts):</strong>
					</p>
					<ul className="list-disc list-inside space-y-1 ml-4">
						<li>RWA fractionalization (ERC-1155 shares)</li>
						<li>Uniswap trading integration</li>
						<li>Automated lending protocols</li>
						<li>Advanced DeFi operations</li>
					</ul>
				</div>
			</div>

			{/* Technical Details */}
			<div className="mt-6 bg-gray-50 rounded-lg p-4">
				<h4 className="text-sm font-medium text-gray-700 mb-2">
					Technical Implementation Notes:
				</h4>
				<ul className="text-sm text-gray-600 space-y-1">
					<li>
						• Chainlink verification uses price feeds to
						validate payment amounts
					</li>
					<li>
						• Verification includes staleness checks to
						prevent old data usage
					</li>
					<li>
						• Automatic settlement occurs when verification
						passes
					</li>
					<li>
						• Future features will include ERC-1155
						fractionalization
					</li>
					<li>
						• Uniswap integration planned for trading settled
						RWAs
					</li>
				</ul>
			</div>
		</div>
	);
};
