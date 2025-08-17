// import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// export default buildModule("RWAMinterONFTModule", (m) => {
// 	// Use the specific account from the previous deployment to maintain consistency
// 	const contractRWAMinterONFT = m.contract("RWAMinterONFT", [
// 		"0x22549C8890892a3Aea1B19664aB7d9fFC8a1e629",
// 		"0xbD672D1562Dd32C23B563C989d8140122483631d",
// 		"0xA1Cf6afA635e8Ea6Cf3d46c6857982273Ae7D2Ef",
// 	]);

// 	return { contractRWAMinterONFT };
// });

import assert from 'assert'

import { type DeployFunction } from 'hardhat-deploy/types'

import { EndpointId } from '@layerzerolabs/lz-definitions'

const contractName = 'RWAMinterONFT'

const deploy: DeployFunction = async (hre) => {
    const { getNamedAccounts, deployments } = hre

    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    assert(deployer, 'Missing named deployer account')

    console.log(`Network: ${hre.network.name}`)
    console.log(`Deployer: ${deployer}`)

    // This is an external deployment pulled in from @layerzerolabs/lz-evm-sdk-v2
    //
    // @layerzerolabs/toolbox-hardhat takes care of plugging in the external deployments
    // from @layerzerolabs packages based on the configuration in your hardhat config
    //
    // For this to work correctly, your network config must define an eid property
    // set to `EndpointId` as defined in @layerzerolabs/lz-definitions
    //
    // For example:
    //
    // networks: {
    //   fuji: {
    //     ...
    //     eid: EndpointId.AVALANCHE_V2_TESTNET
    //   }
    // }
    const endpointV2Deployment = await hre.deployments.get('EndpointV2')

    // If the onft721Adapter configuration is defined on a network that is deploying an ONFT721,
    // the deployment will log a warning and skip the deployment
    if (hre.network.config.onft721Adapter != null) {
        console.warn(`onft721Adapter configuration found on OFT deployment, skipping ONFT721 deployment`)
        return
    }
    if (hre.network.config.eid === EndpointId.SEPOLIA_V2_TESTNET) {
        console.warn(`onft721Adapter configuration is not set to SEPOLIA_V2_TESTNET, skipping RWAMinterONFT deployment`)
        return
    }

    const { address } = await deploy(contractName, {
        from: deployer,
        args: [
            'RWA', // name
            'RWA', // symbol
            endpointV2Deployment.address, // LayerZero's EndpointV2 address
            deployer, // owner
        ],
        log: true,
        skipIfAlreadyDeployed: false,
    })

    console.log(`Deployed contract: ${contractName}, network: ${hre.network.name}, address: ${address}`)
}

deploy.tags = [contractName]

export default deploy
