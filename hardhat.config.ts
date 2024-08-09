import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "./scripts/deploy";
import "./scripts/generate";
import "./scripts/push";
import "./scripts/peers";
import "hardhat-contract-sizer";

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [];

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.24" }],
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
/*  bnb_mainnet: {
      url: "https://bsc-dataseed.binance.org",
      accounts,
    }, */
    sepolia: {
      url:
        process.env.SEPOLIA_RPC_URL ||
        "https://rpc.ankr.com/eth_sepolia/dd0feaa3cc84a1903196ed3f2295ed733ae28757e839857c9324dd55e070cab4",
      accounts,
    },
    bnb_testnet: {
      url: process.env.BNB_TESTNET_RPC_URL || "https://bsc-testnet.nodereal.io/v1/5bd9178c15b747b0a8ab186e17137a50",
      accounts,
    },
    opbnb_testnet: {
      url: process.env.OPBNB_TESTNET_RPC_URL || "https://opbnb-testnet.nodereal.io/v1/3cf6f3856e6f4921a7999947c6af03d7",
      accounts,
    },
  },
  etherscan: {
    apiKey: "C5MN3DAP4RHM66QV9S8QB1RAXZZI3P8FWS",
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
  },
  mocha: {
    timeout: 999999,
  },
  sourcify: {
    enabled: true,
  },
};

export default config;
