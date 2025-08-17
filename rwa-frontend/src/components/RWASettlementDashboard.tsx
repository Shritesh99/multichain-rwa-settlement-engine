import React, { useState, useEffect } from "react";
import { useAccount, useChainId } from "wagmi";
import { useRWA } from "../hooks/useRWA";
import {
	CHAIN_IDS,
	CHAIN_INFO,
	RWA_ASSET_TYPES,
	SETTLEMENT_INSTRUCTIONS,
	RISK_MANAGEMENT_HOOKS,
	RWA_POOL_CONFIG,
	RISK_MANAGEMENT_CONFIG,
} from "../config/contracts";

export const RWASettlementDashboard: React.FC = () => {
	const { address } = useAccount();
	const chainId = useChainId();
	const { mintRWA, crossChainTransfer, loading } = useRWA();

	// Dashboard state
	const [selectedAssetType, setSelectedAssetType] = useState(
		RWA_ASSET_TYPES.INVOICE
	);
	const [selectedSourceChain, setSelectedSourceChain] = useState(
		CHAIN_IDS.HEDERA_TESTNET
	);
	const [selectedDestinationChain, setSelectedDestinationChain] = useState(
		CHAIN_IDS.SEPOLIA
	);
	const [settlementInstruction, setSettlementInstruction] = useState(
		SETTLEMENT_INSTRUCTIONS.AUTO_UNLOCK
	);
	const [riskManagementHooks, setRiskManagementHooks] = useState<string[]>(
		[]
	);

	// RWA Pool state
	const [poolLiquidity, setPoolLiquidity] = useState(1000000); // $1M
	const [poolUtilization, setPoolUtilization] = useState(65); // 65%
	const [activePositions, setActivePositions] = useState(24);
	const [totalValueLocked, setTotalValueLocked] = useState(2500000); // $2.5M

	// Risk Management state
	const [collateralRatio, setCollateralRatio] = useState(150);
	const [currentLeverage, setCurrentLeverage] = useState(1.5);
	const [liquidationRisk, setLiquidationRisk] = useState("Low");
	const [oracleHealth, setOracleHealth] = useState("Healthy");

	// Oracle Integration state
	const [chainlinkPrice, setChainlinkPrice] = useState(1850); // ETH price
	const [flareOraclePrice, setFlareOraclePrice] = useState(1852);
	const [oracleDiscrepancy, setOracleDiscrepancy] = useState(0.1);
	const [lastUpdate, setLastUpdate] = useState(new Date());

	// Cross-chain settlement state
	const [pendingSettlements, setPendingSettlements] = useState(3);
	const [settlementQueue, setSettlementQueue] = useState([
		{
			id: 1,
			asset: "Invoice #12345",
			amount: 50000,
			status: "Pending",
			chain: "Hedera → Sepolia",
		},
		{
			id: 2,
			asset: "Bond #67890",
			amount: 100000,
			status: "In Transit",
			chain: "Hedera → Flare",
		},
		{
			id: 3,
			asset: "Real Estate #11111",
			amount: 500000,
			status: "Verifying",
			chain: "Hedera → Ethereum",
		},
	]);

	// Mock data updates
	useEffect(() => {
		const interval = setInterval(() => {
			setChainlinkPrice((prev) => prev + (Math.random() - 0.5) * 10);
			setFlareOraclePrice((prev) => prev + (Math.random() - 0.5) * 10);
			setOracleDiscrepancy(
				(Math.abs(chainlinkPrice - flareOraclePrice) /
					chainlinkPrice) *
					100
			);
			setLastUpdate(new Date());
		}, 5000);

		return () => clearInterval(interval);
	}, [chainlinkPrice, flareOraclePrice]);

	const handleRiskManagementToggle = (hook: string) => {
		setRiskManagementHooks((prev) =>
			prev.includes(hook)
				? prev.filter((h) => h !== hook)
				: [...prev, hook]
		);
	};

	const getChainIcon = (chainId: number) => {
		return CHAIN_INFO[chainId]?.icon || "🔗";
	};

	const getChainName = (chainId: number) => {
		return CHAIN_INFO[chainId]?.name || "Unknown Chain";
	};

	const getRiskLevelColor = (risk: string) => {
		switch (risk.toLowerCase()) {
			case "low":
				return "text-green-600 bg-green-100";
			case "medium":
				return "text-yellow-600 bg-yellow-100";
			case "high":
				return "text-red-600 bg-red-100";
			default:
				return "text-gray-600 bg-gray-100";
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 p-6">
			{/* Header */}
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">
					🏗️ Multichain RWA Settlement Engine
				</h1>
				<p className="text-lg text-gray-600">
					Tokenize real-world assets with cross-chain settlement,
					oracle verification, and risk management
				</p>
			</div>

			{/* Main Dashboard Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
				{/* RWA Pool Overview */}
				<div className="bg-white rounded-xl shadow-lg p-6">
					<h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
						🏊‍♂️ RWA Token Pool
					</h2>
					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<span className="text-gray-600">
								Total Liquidity
							</span>
							<span className="text-2xl font-bold text-green-600">
								${(poolLiquidity / 1000000).toFixed(1)}M
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-gray-600">
								Pool Utilization
							</span>
							<span className="text-lg font-semibold text-blue-600">
								{poolUtilization}%
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-gray-600">
								Active Positions
							</span>
							<span className="text-lg font-semibold text-purple-600">
								{activePositions}
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-gray-600">TVL</span>
							<span className="text-xl font-bold text-indigo-600">
								$
								{(totalValueLocked / 1000000).toFixed(
									1
								)}
								M
							</span>
						</div>
					</div>
				</div>

				{/* Risk Management Dashboard */}
				<div className="bg-white rounded-xl shadow-lg p-6">
					<h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
						🛡️ Risk Management
					</h2>
					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<span className="text-gray-600">
								Collateral Ratio
							</span>
							<span
								className={`px-2 py-1 rounded-full text-sm font-medium ${
									collateralRatio >= 150
										? "text-green-600 bg-green-100"
										: "text-yellow-600 bg-yellow-100"
								}`}>
								{collateralRatio}%
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-gray-600">
								Current Leverage
							</span>
							<span
								className={`px-2 py-1 rounded-full text-sm font-medium ${
									currentLeverage <= 2
										? "text-green-600 bg-green-100"
										: "text-red-600 bg-red-100"
								}`}>
								{currentLeverage}x
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-gray-600">
								Liquidation Risk
							</span>
							<span
								className={`px-2 py-1 rounded-full text-sm font-medium ${getRiskLevelColor(
									liquidationRisk
								)}`}>
								{liquidationRisk}
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-gray-600">
								Oracle Health
							</span>
							<span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm font-medium">
								{oracleHealth}
							</span>
						</div>
					</div>
				</div>

				{/* Oracle Integration Status */}
				<div className="bg-white rounded-xl shadow-lg p-6">
					<h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
						🔗 Oracle Integration
					</h2>
					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<span className="text-gray-600">
								Chainlink ETH
							</span>
							<span className="text-lg font-semibold text-blue-600">
								${chainlinkPrice.toFixed(2)}
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-gray-600">
								Flare FTSO ETH
							</span>
							<span className="text-lg font-semibold text-orange-600">
								${flareOraclePrice.toFixed(2)}
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-gray-600">
								Discrepancy
							</span>
							<span
								className={`px-2 py-1 rounded-full text-sm font-medium ${
									oracleDiscrepancy < 1
										? "text-green-600 bg-green-100"
										: "text-yellow-600 bg-yellow-100"
								}`}>
								{oracleDiscrepancy.toFixed(2)}%
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="text-gray-600">
								Last Update
							</span>
							<span className="text-sm text-gray-500">
								{lastUpdate.toLocaleTimeString()}
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Cross-Chain Settlement Queue */}
			<div className="bg-white rounded-xl shadow-lg p-6 mb-8">
				<h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
					🌉 Cross-Chain Settlement Queue
				</h2>
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="border-b border-gray-200">
								<th className="text-left py-3 px-4 font-medium text-gray-700">
									Asset
								</th>
								<th className="text-left py-3 px-4 font-medium text-gray-700">
									Amount
								</th>
								<th className="text-left py-3 px-4 font-medium text-gray-700">
									Status
								</th>
								<th className="text-left py-3 px-4 font-medium text-gray-700">
									Route
								</th>
								<th className="text-left py-3 px-4 font-medium text-gray-700">
									Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{settlementQueue.map((item) => (
								<tr
									key={item.id}
									className="border-b border-gray-100 hover:bg-gray-50">
									<td className="py-3 px-4 font-medium text-gray-900">
										{item.asset}
									</td>
									<td className="py-3 px-4 text-gray-600">
										$
										{item.amount.toLocaleString()}
									</td>
									<td className="py-3 px-4">
										<span
											className={`px-2 py-1 rounded-full text-xs font-medium ${
												item.status ===
												"Pending"
													? "bg-yellow-100 text-yellow-800"
													: item.status ===
													  "In Transit"
													? "bg-blue-100 text-blue-800"
													: "bg-green-100 text-green-800"
											}`}>
											{item.status}
										</span>
									</td>
									<td className="py-3 px-4 text-gray-600">
										{item.chain}
									</td>
									<td className="py-3 px-4">
										<button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
											View Details
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* Asset Creation & Settlement Configuration */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
				{/* Asset Creation Panel */}
				<div className="bg-white rounded-xl shadow-lg p-6">
					<h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
						🪙 Create RWA Asset
					</h2>
					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Asset Type
							</label>
							<select
								value={selectedAssetType}
								onChange={(e) =>
									setSelectedAssetType(
										e.target.value
									)
								}
								className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
								<option value={RWA_ASSET_TYPES.INVOICE}>
									Invoice
								</option>
								<option value={RWA_ASSET_TYPES.BOND}>
									Bond
								</option>
								<option
									value={
										RWA_ASSET_TYPES.REAL_ESTATE
									}>
									Real Estate
								</option>
								<option
									value={RWA_ASSET_TYPES.COMMODITY}>
									Commodity
								</option>
								<option
									value={
										RWA_ASSET_TYPES.PRIVATE_EQUITY
									}>
									Private Equity
								</option>
								<option
									value={
										RWA_ASSET_TYPES.TRADE_FINANCE
									}>
									Trade Finance
								</option>
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Source Chain (Minting)
							</label>
							<select
								value={selectedSourceChain}
								onChange={(e) =>
									setSelectedSourceChain(
										Number(e.target.value)
									)
								}
								className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
								<option
									value={CHAIN_IDS.HEDERA_TESTNET}>
									{getChainIcon(
										CHAIN_IDS.HEDERA_TESTNET
									)}{" "}
									Hedera Testnet (Low-cost
									efficiency)
								</option>
								<option value={CHAIN_IDS.FLARE_TESTNET}>
									{getChainIcon(
										CHAIN_IDS.FLARE_TESTNET
									)}{" "}
									Flare Testnet (Oracle-enhanced)
								</option>
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Destination Chain (Settlement)
							</label>
							<select
								value={selectedDestinationChain}
								onChange={(e) =>
									setSelectedDestinationChain(
										Number(e.target.value)
									)
								}
								className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
								<option value={CHAIN_IDS.SEPOLIA}>
									{getChainIcon(CHAIN_IDS.SEPOLIA)}{" "}
									Sepolia (High liquidity)
								</option>
								<option value={CHAIN_IDS.FLARE}>
									{getChainIcon(CHAIN_IDS.FLARE)}{" "}
									Flare (Oracle verification)
								</option>
								<option value={CHAIN_IDS.ETHEREUM}>
									{getChainIcon(CHAIN_IDS.ETHEREUM)}{" "}
									Ethereum (Maximum security)
								</option>
								<option value={CHAIN_IDS.POLYGON}>
									{getChainIcon(CHAIN_IDS.POLYGON)}{" "}
									Polygon (Scalable settlement)
								</option>
							</select>
						</div>

						<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
							Create RWA Asset
						</button>
					</div>
				</div>

				{/* Settlement Configuration Panel */}
				<div className="bg-white rounded-xl shadow-lg p-6">
					<h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
						⚙️ Settlement Configuration
					</h2>
					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Settlement Instructions
							</label>
							<select
								value={settlementInstruction}
								onChange={(e) =>
									setSettlementInstruction(
										e.target.value
									)
								}
								className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
								<option
									value={
										SETTLEMENT_INSTRUCTIONS.AUTO_UNLOCK
									}>
									Auto-unlock on proof-of-payment
								</option>
								<option
									value={
										SETTLEMENT_INSTRUCTIONS.ESCROW_RELEASE
									}>
									Escrow release on verification
								</option>
								<option
									value={
										SETTLEMENT_INSTRUCTIONS.LIQUIDATION_TRIGGER
									}>
									Liquidation on collateral drop
								</option>
								<option
									value={
										SETTLEMENT_INSTRUCTIONS.REWARDS_DISTRIBUTION
									}>
									Rewards distribution on completion
								</option>
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Risk Management Hooks
							</label>
							<div className="space-y-2">
								{Object.values(
									RISK_MANAGEMENT_HOOKS
								).map((hook) => (
									<label
										key={hook}
										className="flex items-center">
										<input
											type="checkbox"
											checked={riskManagementHooks.includes(
												hook
											)}
											onChange={() =>
												handleRiskManagementToggle(
													hook
												)
											}
											className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
										/>
										<span className="text-sm text-gray-700 capitalize">
											{hook.replace(/_/g, " ")}
										</span>
									</label>
								))}
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Oracle Integration
							</label>
							<div className="space-y-2">
								<label className="flex items-center">
									<input
										type="checkbox"
										defaultChecked
										className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
									/>
									<span className="text-sm text-gray-700">
										Chainlink Price Feeds
									</span>
								</label>
								<label className="flex items-center">
									<input
										type="checkbox"
										defaultChecked
										className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
									/>
									<span className="text-sm text-gray-700">
										Flare FTSO Oracles
									</span>
								</label>
								<label className="flex items-center">
									<input
										type="checkbox"
										defaultChecked
										className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
									/>
									<span className="text-sm text-gray-700">
										Hedera Oracles
									</span>
								</label>
							</div>
						</div>

						<button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
							Configure Settlement
						</button>
					</div>
				</div>
			</div>

			{/* Protocol Features Showcase */}
			<div className="bg-white rounded-xl shadow-lg p-6">
				<h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
					🚀 Protocol Features
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					<div className="text-center p-4 bg-blue-50 rounded-lg">
						<div className="text-2xl mb-2">🔒</div>
						<h3 className="font-medium text-gray-800 mb-2">
							Smart Contract Pools
						</h3>
						<p className="text-sm text-gray-600">
							Automated liquidity management and risk
							distribution
						</p>
					</div>
					<div className="text-center p-4 bg-green-50 rounded-lg">
						<div className="text-2xl mb-2">🛡️</div>
						<h3 className="font-medium text-gray-800 mb-2">
							Risk Management Hooks
						</h3>
						<p className="text-sm text-gray-600">
							Collateral monitoring and liquidation
							protection
						</p>
					</div>
					<div className="text-center p-4 bg-purple-50 rounded-lg">
						<div className="text-2xl mb-2">🔗</div>
						<h3 className="font-medium text-gray-800 mb-2">
							Oracle Integration
						</h3>
						<p className="text-sm text-gray-600">
							Multi-oracle verification to prevent
							double-spending
						</p>
					</div>
					<div className="text-center p-4 bg-orange-50 rounded-lg">
						<div className="text-2xl mb-2">🌉</div>
						<h3 className="font-medium text-gray-800 mb-2">
							Cross-Chain Settlement
						</h3>
						<p className="text-sm text-gray-600">
							Seamless asset transfer with embedded
							instructions
						</p>
					</div>
				</div>
			</div>

			{/* Current Network Status */}
			<div className="mt-8 bg-white rounded-xl shadow-lg p-6">
				<h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
					🌐 Network Status
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{Object.entries(CHAIN_INFO)
						.slice(0, 6)
						.map(([chainId, info]) => (
							<div
								key={chainId}
								className="border border-gray-200 rounded-lg p-4">
								<div className="flex items-center justify-between mb-2">
									<span className="text-lg">
										{info.icon}
									</span>
									<span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
										Connected
									</span>
								</div>
								<h3 className="font-medium text-gray-800">
									{info.name}
								</h3>
								<p className="text-sm text-gray-600 mb-2">
									{info.description}
								</p>
								<div className="space-y-1">
									{info.features.map(
										(feature, index) => (
											<div
												key={index}
												className="text-xs text-gray-500 flex items-center">
												<span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
												{feature}
											</div>
										)
									)}
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};
