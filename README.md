# RWA Nexus Bridge

A hybrid cross-chain protocol for tokenizing real-world assets on Hedera, transferring them securely via LayerZero ONFT and Chainlink CCIP, verifying settlements with oracles, and unlocking liquidity on Ethereum through fractionalization, trading on Uniswap, and lending on Aave.

## Project Description

RWA Nexus Bridge is a blockchain protocol that enables the seamless tokenization and cross-chain management of real-world assets (RWAs) such as invoices, bonds, real estate, commodities, private equity, and carbon credits. It addresses key challenges in the RWA space, including liquidity silos, verification gaps, and security risks in bridges (which have lost $2.8 billion historically). The project uses a hybrid model combining LayerZero's ONFT for fast omnichain NFT transfers with Chainlink's CCIP for secure programmable messaging, integrated with Hedera's Smart Contract Service (HSCS) and Token Service (HTS) for low-cost minting on the source chain (Hedera Testnet). On the destination chain (Ethereum Sepolia), it verifies settlements using Chainlink oracles (e.g., payment proofs relayed as price data proxies), unlocks the asset, supports fractionalization into ERC-1155 shares for micro-ownership, and integrates with DeFi protocols like Uniswap (for trading liquidity via NonfungiblePositionManager) and Aave (for lending as collateral).

This solo hackathon project, built for ETHGlobal New York 2025, demonstrates an end-to-end RWA lifecycle: Mint on Hedera → Hybrid transfer → Verify and settle on Ethereum → Fractionalize and tap liquidity. It targets bounties from Chainlink, LayerZero, and Flare, showcasing innovation in interoperability and RWA trends projected to reach $13-25 trillion by 2030.

## How It's Made

-    **Smart Contracts**: Solidity 0.8.20 with OpenZeppelin (ERC-721/1155, Ownable), LayerZero V2 ONFT for omnichain transfers, Chainlink CCIP for messaging/oracles, and Hedera HSCS/HTS for cheap minting. Inheritance overrides resolved conflicts (e.g., onlyOwner from multiple bases). Hacky hybrid: LayerZero for token moves, CCIP for data redundancy—embedded requiredValue in messages for oracle checks (price >= threshold, freshness <1 hour).
-    **Frontend**: Create React App with wagmi/RainbowKit for wallet/chain switching, useWriteContract for calls (mint/send/fractionalize/trade), useContractRead for status (isSettled/metadata). Tailwind for styling, react-spinners for loading. Pieced with contract ABIs/addresses for direct interactions.
-    **Testing**: Manual in Remix (load at address, call mint/send/receive), monitored with HashScan/Etherscan/LayerZero Scan. Hacky oracle: Price feed as payment proxy; fractionalization burns NFT and mints ERC-1155 shares in one call.
-    **Partner Tech Benefits**: LayerZero for low-latency transfers, Chainlink for secure verification (prevent double-spending), Hedera HSCS for low fees—stacked for best-of-breed RWA flows. Uniswap V3 NFT manager for trading positions, Aave for lending hooks post-settlement.
-    **Hacky Notables**: Adapted EID to CCIP selector manually for hybrid; used HTS serial as ONFT tokenId for Hedera-native wrapping; simulated bank API proofs with Chainlink feed thresholds/staleness checks.

## Setup and Installation

### Prerequisites

-    Node.js v16+ and npm.
-    MetaMask with test accounts funded (HBAR on Hedera Testnet, ETH on Sepolia).
-    LayerZero/Chainlink test tokens for fees.

### Backend (rwa-layer-zero)

1. Install dependencies: `npm install`.
2. Configure Hardhat: Add private key and RPCs in `.env` (copy from env.example).
3. Deploy contracts: `npx hardhat deploy --network hederaTestnet` for RWAMinter; `npx hardhat deploy --network sepolia` for RWASettler.
4. Test: Use Hardhat tasks (e.g., `npx hardhat send-nft --adapter <adapter-address> --recipient <recipient> --tokenId <id>` for transfer).

### Frontend (rwa-frontend)

1. Install dependencies: `npm install`.
2. Configure: Update contract addresses/ABIs in App.tsx.
3. Run locally: `npm start` (localhost:3000).
4. Deploy: `npm run build`, then host on Vercel/Netlify.

## Usage

1. **Mint RWA**: Connect wallet to Hedera Testnet, call `mintRWAWithHTS` with metadata (e.g., "Invoice $10000").
2. **Transfer**: Approve contract, call `hybridSendRWA` with dstEid (40161), to (your Sepolia address), tokenId, requiredValue.
3. **Verify/Settled**: On Sepolia, check `isSettled(tokenId)` after receive (auto-triggers oracle check: payment >= threshold, fresh data).
4. **Fractionalize**: Call `fractionalizeRWA` to burn NFT and mint ERC-1155 shares.
5. **Trade on Uniswap**: Call `tradeOnUniswap` to approve/transfer to manager for liquidity positions.
6. **Frontend Demo**: Connect wallet, select chains, mint/transfer/fractionalize/trade—watch status updates.

## Technologies

-    **Contracts**: Solidity, LayerZero V2, Chainlink CCIP/Oracles, Hedera HSCS/HTS, OpenZeppelin.
-    **Frontend**: React.js, wagmi, RainbowKit, Tailwind CSS.
-    **Tools**: Remix IDE for deployment/testing, Hardhat for scripts, LayerZero Scan/CCIP Explorer for monitoring.

## License

MIT License.
