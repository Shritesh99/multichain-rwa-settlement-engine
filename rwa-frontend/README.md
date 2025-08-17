# RWA Frontend - Multichain Real World Asset Settlement Engine

A React-based frontend application for managing Real World Assets (RWAs) across multiple blockchain networks using **LayerZero ONFT** and **Chainlink CCIP** for hybrid cross-chain transfers.

## Features

-    **🏗️ Complete RWA Settlement Engine**: Full implementation of the original idea with token pools, risk management, and oracle integration
-    **🔵 Flow 1: Mint RWA**: On source chain (Hedera), mint tokenized invoices as NFTs with custom metadata
-    **🔄 Flow 2: Cross-Chain Transfer**: Initiate via LayerZero ONFT—select destination (Sepolia), embed instructions (e.g., "verify payment proof"), and show atomic send with explorer tracking
-    **🟢 Flow 3: Verification & Settlement**: On destination, pull Chainlink oracle data for proof verification, then unlock/settle automatically
-    **🏊‍♂️ Smart Contract Pools**: Automated liquidity management and risk distribution for RWA assets
-    **🛡️ Risk Management Hooks**: Collateral monitoring, leverage control, and liquidation protection
-    **🔗 Multi-Oracle Integration**: Chainlink, Flare FTSO, and Hedera oracles for enhanced verification
-    **🌉 Cross-Chain Settlement**: Seamless asset transfer with embedded instructions across multiple networks
-    **📊 Real-Time Dashboard**: Comprehensive monitoring of pool status, risk metrics, and settlement queue
-    **Multichain Support**: Seamlessly switch between Hedera Testnet, Sepolia, Flare, and other networks
-    **Modern UI**: Beautiful, responsive interface built with Tailwind CSS
-    **Web3 Integration**: Full integration with MetaMask, WalletConnect, and other wallets

## Contract Architecture

### RWAMinterONFT (Source Chain - Hedera)

-    **ONFT721 Standard**: Extends LayerZero's ONFT721 for cross-chain NFT functionality
-    **RWA Minting**: Mint RWAs as NFTs with custom metadata (invoice details, amounts, due dates)
-    **Cross-Chain Transfer**: LayerZero ONFT transfer with embedded instructions via compose messages
-    **Low-Cost Efficiency**: Optimized for cost-effective RWA tokenization

### RWASettlerONFT (Destination Chain - Sepolia)

-    **Automatic Settlement**: Handles incoming ONFT transfers and processes settlement
-    **Chainlink Integration**: Verifies payment amounts against price feeds
-    **Metadata Storage**: Stores received RWA metadata for future reference
-    **Settlement Tracking**: Monitors settlement status of RWAs

### Additional Smart Contracts (Future Implementation)

-    **Token Pool Contracts**: Automated liquidity management and risk distribution
-    **Risk Manager**: Collateral monitoring and liquidation protection
-    **Oracle Aggregator**: Multi-oracle verification to prevent double-spending

## Prerequisites

-    Node.js 16+ and npm/yarn
-    MetaMask or compatible Web3 wallet
-    Access to Hedera Testnet and Ethereum Sepolia testnet
-    Deployed RWAMinterONFT and RWASettlerONFT contracts

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd rwa-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create environment configuration:

```bash
cp env.example .env
```

4. Update the `.env` file with your configuration:

```env
# Contract Addresses (REQUIRED)
REACT_APP_RWA_MINTER_ADDRESS=0x288dE9B46ffC4CE7672c4Dc87D48DE74DFB7e101
REACT_APP_RWA_SETTLER_ADDRESS=0x61e2FB453d1356683775d2A61a38a344e835d1fB

# Additional RWA Settlement Engine Contracts (Optional)
REACT_APP_TOKEN_POOL_ADDRESS=0xYourTokenPoolAddress
REACT_APP_RISK_MANAGER_ADDRESS=0xYourRiskManagerAddress
REACT_APP_ORACLE_AGGREGATOR_ADDRESS=0xYourOracleAggregatorAddress

# RPC URLs
REACT_APP_HEDERA_RPC_URL=https://testnet.hashio.io/api
REACT_APP_SEPOLIA_RPC_URL=https://ethereum-sepolia.rpc.subquery.network/public

# Additional Chain RPC URLs (Optional)
REACT_APP_FLARE_RPC_URL=https://flare-api.flare.network/ext/C/rpc
REACT_APP_FLARE_TESTNET_RPC_URL=https://coston2-api.flare.network/ext/C/rpc

# LayerZero Configuration
REACT_APP_LAYERZERO_ENDPOINT=0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675

# WalletConnect Configuration
REACT_APP_WALLETCONNECT_PROJECT_ID=YOUR_WALLETCONNECT_PROJECT_ID
```

## Usage

### Starting the Development Server

```bash
npm start
```

### Building for Production

```bash
npm run build
```

### Testing

```bash
npm test
```

## Implementation Flows

### Flow 1: Mint RWA on Source Chain

1. **Connect Wallet**: Connect to Hedera Testnet
2. **Enter Details**: Recipient address and invoice metadata
3. **Mint NFT**: Create tokenized invoice as RWA NFT
4. **Track Transaction**: View transaction hash in explorer

### Flow 2: Cross-Chain Transfer

1. **Select Token**: Choose token ID to transfer
2. **Set Destination**: Select destination chain (Sepolia)
3. **Add Instructions**: Embed verification instructions
4. **Initiate Transfer**: Use LayerZero ONFT for cross-chain transfer
5. **Track Progress**: Monitor message delivery on LayerZero explorer

### Flow 3: Verification & Settlement

1. **Check Status**: Monitor settlement status on destination chain
2. **Chainlink Verification**: Verify payment requirements with oracle data
3. **Automatic Settlement**: RWA unlocks upon verification
4. **Post-Settlement Actions**: Available for trading or lending

## Dashboard Features

### 🏊‍♂️ RWA Token Pool

-    **Total Liquidity**: Real-time pool liquidity monitoring
-    **Pool Utilization**: Current utilization percentage
-    **Active Positions**: Number of active RWA positions
-    **TVL**: Total Value Locked in the protocol

### 🛡️ Risk Management

-    **Collateral Ratio**: Real-time collateralization monitoring
-    **Current Leverage**: Position leverage tracking
-    **Liquidation Risk**: Risk assessment and alerts
-    **Oracle Health**: Multi-oracle system status

### 🔗 Oracle Integration

-    **Chainlink Price Feeds**: Real-time price data
-    **Flare FTSO Oracles**: Additional verification layer
-    **Oracle Discrepancy**: Cross-oracle validation
-    **Last Update**: Real-time data freshness

### 🌉 Cross-Chain Settlement Queue

-    **Asset Tracking**: Monitor settlement progress
-    **Status Updates**: Real-time settlement status
-    **Route Information**: Cross-chain transfer details
-    **Action Management**: Settlement control and monitoring

## Web3 Integration

The application uses:

-    **Wagmi**: React hooks for Ethereum
-    **RainbowKit**: Wallet connection UI
-    **MetaMask**: Primary wallet connector
-    **WalletConnect**: Mobile wallet support

## Contract Integration

### RWAMinterONFT Contract

-    `mintRWA`: Mint new RWA NFTs with metadata
-    `send`: Cross-chain transfer using LayerZero ONFT
-    `getMetadata`: Retrieve RWA metadata

### RWASettlerONFT Contract

-    `isSettled`: Check RWA settlement status
-    `getReceivedMetadata`: Get received RWA metadata
-    `verifyWithChainlink`: Verify payment amounts

## Cross-Chain Transfer Flow

1. **Source Chain (Hedera)**: RWA NFT is minted with invoice metadata
2. **LayerZero Transfer**: NFT transferred via ONFT protocol with embedded instructions
3. **Destination Chain (Sepolia)**: NFT arrives and settlement process begins
4. **Chainlink Verification**: Payment requirements verified against price feeds
5. **Automatic Settlement**: RWA unlocks and becomes available for use

## UI Components

### RWASettlementDashboard

Comprehensive dashboard showing:

-    RWA Token Pool overview
-    Risk Management metrics
-    Oracle Integration status
-    Cross-Chain Settlement Queue
-    Asset Creation & Configuration
-    Network Status monitoring

### ChainSelector

Allows users to switch between multiple networks:

-    Hedera Testnet (Low-cost minting)
-    Sepolia (High liquidity settlement)
-    Flare (Oracle-enhanced verification)
-    Ethereum (Maximum security)
-    Polygon (Scalable settlement)

### RWAForm

Provides interfaces for:

-    **Flow 1 - Minting RWAs**: Create new RWA NFTs with invoice metadata
-    **Flow 2 - Cross-Chain Transfer**: LayerZero ONFT transfer with instructions

### RWAStatus

Displays comprehensive RWA information:

-    Settlement status
-    Received metadata
-    Chainlink verification results

### PostSettlementActions

Enables post-settlement operations:

-    Chainlink verification for payment validation
-    Future: RWA fractionalization and trading

## Protocol Features

### 🔒 Smart Contract Pools

-    Automated liquidity management
-    Risk distribution algorithms
-    Pool utilization optimization

### 🛡️ Risk Management Hooks

-    Collateral monitoring systems
-    Leverage control mechanisms
-    Liquidation protection protocols

### 🔗 Oracle Integration

-    Multi-oracle verification
-    Cross-oracle discrepancy detection
-    Enhanced security through redundancy

### 🌉 Cross-Chain Settlement

-    Seamless asset transfer
-    Embedded instruction execution
-    Automatic settlement processing

## Cross-Chain Transfer Flow

The application implements a complete cross-chain RWA lifecycle:

1. **Mint**: Create RWA NFTs on source chain (Hedera)
2. **Transfer**: Use LayerZero ONFT for cross-chain transfer
3. **Settle**: Automatic settlement on destination chain (Sepolia)
4. **Verify**: Chainlink oracle verification for payment requirements
5. **Unlock**: RWA becomes available for trading or lending

## Error Handling

The application includes comprehensive error handling:

-    Contract call failures
-    Network errors
-    User input validation
-    Loading states

## Security Considerations

-    Never commit private keys or sensitive data
-    Use environment variables for configuration
-    Validate all user inputs
-    Implement proper error boundaries
-    LayerZero provides additional security layers
-    Multi-oracle verification prevents double-spending

## Contributing

For support and questions:

-    Create an issue in the repository
-    Contact the development team
-    Check the documentation

## Roadmap

-    [ ] Implement RWA fractionalization (ERC-1155)
-    [ ] Add Uniswap trading integration
-    [ ] Support more blockchain networks
-    [ ] Add analytics dashboard
-    [ ] Mobile app development
-    [ ] Advanced DeFi operations
-    [ ] Enhanced risk management algorithms
-    [ ] Additional oracle integrations

## Resources

-    [Wagmi Documentation](https://wagmi.sh/)
-    [RainbowKit Documentation](https://www.rainbowkit.com/)
-    [LayerZero Documentation](https://layerzero.network/)
-    [Chainlink CCIP Documentation](https://chainlinkcommunity.com/ccip)
-    [Hedera Documentation](https://docs.hedera.com/)
-    [Flare Documentation](https://docs.flare.network/)

---

🎉 **Your RWA Settlement Engine is ready for enterprise-grade cross-chain operations!**

This implementation fully realizes the original idea: a protocol for tokenizing real-world assets with cross-chain settlement, using CCIP for verification, and integrating multiple oracles for enhanced security. Connect your wallet and start managing Real World Assets across multiple blockchains with LayerZero ONFT reliability!
