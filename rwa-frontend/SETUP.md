# RWA Frontend Setup Guide

## 🚀 Quick Start

Your React Web3 application is now fully organized and ready for **LayerZero ONFT + Chainlink CCIP** hybrid cross-chain transfers! Here's what has been set up:

## 📁 Project Structure

```
rwa-frontend/
├── src/
│   ├── components/          # React components
│   │   ├── ChainSelector.tsx      # Network switching
│   │   ├── RWAForm.tsx            # Mint & Hybrid Transfer
│   │   ├── RWAStatus.tsx          # Settlement status & verification
│   │   ├── PostSettlementActions.tsx # Chainlink verification
│   │   └── index.ts               # Component exports
│   ├── config/             # Configuration files
│   │   ├── contracts.ts    # Contract ABIs & addresses
│   │   ├── wagmi.ts        # Wagmi configuration
│   │   └── constants.ts    # App constants
│   ├── hooks/              # Custom React hooks
│   │   ├── useRWA.ts       # RWA contract interactions
│   │   ├── useChainSwitch.ts # Chain switching logic
│   │   └── index.ts        # Hook exports
│   ├── types/              # TypeScript definitions
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main application
│   └── index.tsx           # Entry point with providers
├── env.example             # Environment variables template
├── README.md               # Comprehensive documentation
└── SETUP.md                # This setup guide
```

## ⚙️ Configuration Required

### 1. Environment Variables

Copy `env.example` to `.env` and update:

```bash
cp env.example .env
```

Edit `.env` with your actual values:

```env
# Contract Addresses (REQUIRED)
REACT_APP_RWA_MINTER_ADDRESS=0xYourActualRWAMinterONFTAddress
REACT_APP_RWA_SETTLER_ADDRESS=0xYourActualRWASettlerONFTAddress

# RPC URLs (REQUIRED for Sepolia)
REACT_APP_SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# LayerZero Configuration (REQUIRED)
REACT_APP_LAYERZERO_ENDPOINT=0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225cd675

# WalletConnect (Optional)
REACT_APP_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id

# Chainlink Configuration (Optional)
REACT_APP_CHAINLINK_PRICE_FEED_ADDRESS=0xYourChainlinkPriceFeedAddress
REACT_APP_CCIP_ROUTER_ADDRESS=0xYourCCIPRouterAddress
```

### 2. Contract ABIs

The contract ABIs in `src/config/contracts.ts` are already updated for:

-    **RWAMinterONFT**: Minting and hybrid transfer functions
-    **RWASettlerONFT**: Settlement and verification functions

## 🔧 Dependencies

All required dependencies are already installed:

-    ✅ React 19
-    ✅ TypeScript
-    ✅ Tailwind CSS
-    ✅ Wagmi v2
-    ✅ RainbowKit
-    ✅ React Query

## 🚀 Running the Application

### Development Mode

```bash
npm start
```

### Production Build

```bash
npm run build
```

### Testing

```bash
npm test
```

## 🌐 Supported Networks

-    **Hedera Testnet** (Chain ID: 296) - Source chain for minting
-    **Ethereum Sepolia** (Chain ID: 11155111) - Destination chain for settlement
-    **Ethereum Mainnet** (Chain ID: 1) - Available for future use

## 💼 Features Implemented

1. **Wallet Connection** - MetaMask, WalletConnect, and injected wallets
2. **Network Switching** - Seamless switching between Hedera and Ethereum
3. **RWA NFT Minting** - Create new Real World Assets as NFTs
4. **Hybrid Cross-Chain Transfers** - LayerZero ONFT + Chainlink CCIP
5. **Automatic Settlement** - RWAs settle automatically on destination
6. **Chainlink Verification** - Payment validation using price feeds
7. **RWA Metadata Management** - Store and retrieve RWA details
8. **Responsive UI** - Modern, mobile-friendly interface
9. **Error Handling** - Comprehensive error handling and user feedback

## 🔒 Security Features

-    Environment variable configuration
-    Input validation
-    Error boundaries
-    Secure contract interactions
-    No hardcoded private keys
-    LayerZero and CCIP security layers

## 📱 UI Components

-    **ChainSelector**: Network switching interface
-    **RWAForm**: Minting and hybrid transfer forms
-    **RWAStatus**: Settlement status and verification display
-    **PostSettlementActions**: Chainlink verification interface

## 🎨 Styling

-    Tailwind CSS for responsive design
-    Consistent color scheme
-    Hover effects and transitions
-    Mobile-first approach

## 🧪 Testing

The application includes:

-    TypeScript for type safety
-    Error handling for all operations
-    Loading states for better UX
-    Input validation

## 🚨 Troubleshooting

### Common Issues

1. **Contract Connection Failed**

     - Verify contract addresses in `.env`
     - Check network connection
     - Ensure wallet is connected to correct network

2. **RPC Errors**

     - Verify RPC URLs in `.env`
     - Check network connectivity
     - Ensure Infura API key is valid

3. **Build Errors**

     - Run `npm install --legacy-peer-deps` if needed
     - Check TypeScript compilation
     - Verify all imports are correct

4. **LayerZero Errors**
     - Verify LayerZero endpoint configuration
     - Check messaging fee settings
     - Ensure proper EID configuration

### Getting Help

-    Check the browser console for errors
-    Verify environment variables are set correctly
-    Ensure all dependencies are installed
-    Check network connectivity

## 🔄 Next Steps

1. **Deploy Contracts**: Deploy your RWAMinterONFT and RWASettlerONFT contracts
2. **Update Addresses**: Add contract addresses to `.env`
3. **Test Networks**: Test on Hedera testnet and Sepolia
4. **Configure LayerZero**: Set up proper endpoint and EID configuration
5. **Test CCIP**: Verify Chainlink CCIP integration
6. **Customize UI**: Modify components to match your brand
7. **Add Features**: Extend functionality as needed

## 📚 Resources

-    [Wagmi Documentation](https://wagmi.sh/)
-    [RainbowKit Documentation](https://www.rainbowkit.com/)
-    [LayerZero Documentation](https://layerzero.network/)
-    [Chainlink CCIP Documentation](https://chainlinkcommunity.com/ccip)
-    [Hedera Documentation](https://docs.hedera.com/)

## 🌟 Key Features

### Hybrid Transfer System

-    **LayerZero ONFT**: Primary NFT transfer mechanism
-    **Chainlink CCIP**: Redundant messaging for reliability
-    **Dual Verification**: Ensures data integrity across chains

### RWA Management

-    **NFT Standard**: RWAs represented as ERC-721 tokens
-    **Metadata Storage**: Rich RWA information storage
-    **Cross-Chain Portability**: Seamless transfer between networks

### Settlement Engine

-    **Automatic Processing**: No manual intervention required
-    **Chainlink Integration**: Payment verification using price feeds
-    **Status Tracking**: Real-time settlement monitoring

---

🎉 **Your RWA Frontend is ready for enterprise-grade cross-chain operations!**

Connect your wallet, configure your contracts, and start managing Real World Assets across multiple blockchains with LayerZero ONFT and Chainlink CCIP reliability!
