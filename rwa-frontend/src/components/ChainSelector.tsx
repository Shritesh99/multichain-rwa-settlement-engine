import React from "react";
import { useChainSwitch } from "../hooks/useChainSwitch";
import { CHAIN_IDS } from "../config/contracts";

export const ChainSelector: React.FC = () => {
	const { switchToHedera, switchToSepolia } = useChainSwitch();

	return (
		<div className="bg-white rounded-lg shadow-md p-6">
			<h2 className="text-xl font-semibold text-gray-800 mb-4">
				Network Selection
			</h2>
			<div className="flex gap-4">
				<button
					onClick={switchToHedera}
					className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
					Switch to Hedera Testnet
				</button>
				<button
					onClick={switchToSepolia}
					className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
					Switch to Sepolia
				</button>
			</div>
			<div className="mt-4 text-sm text-gray-600">
				<p>Hedera Testnet ID: {CHAIN_IDS.HEDERA_TESTNET}</p>
				<p>Sepolia ID: {CHAIN_IDS.SEPOLIA}</p>
				<p>Sepolia EID: {CHAIN_IDS.SEPOLIA_EID}</p>
			</div>
		</div>
	);
};
