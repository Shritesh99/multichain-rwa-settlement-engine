import React from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
	ChainSelector,
	RWAForm,
	RWAStatus,
	PostSettlementActions,
	RWASettlementDashboard,
} from "./components";
import "./App.css";

function App() {
	const { isConnected } = useAccount();

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<header className="bg-white shadow-sm border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-4">
						<div className="flex items-center">
							<h1 className="text-2xl font-bold text-gray-900">
								🏗️ RWA Settlement Engine
							</h1>
						</div>
						<div className="flex items-center space-x-4">
							<ChainSelector />
							<ConnectButton />
						</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{!isConnected ? (
					<div className="text-center py-12">
						<div className="max-w-md mx-auto">
							<div className="text-6xl mb-4">🔐</div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								Welcome to the RWA Settlement Engine
							</h2>
							<p className="text-gray-600 mb-8">
								Connect your wallet to start tokenizing
								real-world assets with cross-chain
								settlement, oracle verification, and
								risk management.
							</p>
							<ConnectButton />
						</div>
					</div>
				) : (
					<div className="space-y-8">
						{/* Main Dashboard */}
						<RWASettlementDashboard />

						{/* Individual Flow Components */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<RWAForm />
							<RWAStatus />
						</div>

						{/* Post-Settlement Actions */}
						<PostSettlementActions />
					</div>
				)}
			</main>

			{/* Footer */}
			<footer className="bg-white border-t border-gray-200 mt-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="text-center text-gray-600">
						<p className="mb-2">
							🏗️{" "}
							<strong>
								Multichain RWA Settlement Engine
							</strong>{" "}
							- Tokenize real-world assets with cross-chain
							settlement
						</p>
						<p className="text-sm">
							Powered by LayerZero, Chainlink, Flare, and
							Hedera
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
