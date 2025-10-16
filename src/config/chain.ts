// Include default chains here

import { Chain, ChainId } from "../types/chain";

export const CHAINS: Record<ChainId, Chain> = {
  [ChainId.Ethereum]: {
    id: ChainId.Ethereum,
    name: "Ethereum",
    rpcUrls: {
      default: {
        http: ["https://eth.llamarpc.com", "https://eth.merkle.io"],
      },
    },
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    testnet: false,
    chainType: "public",
    blockExplorers: {
      default: {
        name: "etherScan",
        url: "https://etherscan.io",
        apiUrl: "https://api.etherscan.io",
      },
    },
    blockTime: 12,
    network: undefined,
    averageBlockTime: undefined,
    finalitySeconds: undefined,
  },
  [ChainId.Polygon]: {
    id: 137,
    name: "Polygon",
    rpcUrls: {
      default: {
        http: [
          "https://1rpc.io/matic",
          "https://endpoints.omniatech.io/v1/matic/mainnet/public",
        ],
      },
    },
    nativeCurrency: {
      name: "POL",
      symbol: "POL",
      decimals: 18,
    },
    testnet: false,
    chainType: "public",
    blockExplorers: {
      default: {
        name: "polygonScan",
        url: "https://polygonscan.io",
        apiUrl: "https://api.polygonscan.io",
      },
    },
    blockTime: 2,
    network: undefined,
    averageBlockTime: undefined,
    finalitySeconds: undefined,
  },
  [ChainId.BSC]: {
    id: 56,
    name: "BNB Smart Chain",
    rpcUrls: {
      default: {
        http: ["https://bsc.blockrazor.xyz", "https://bsc-rpc.publicnode.com"],
      },
    },
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    testnet: false,
    blockExplorers: {
      default: {
        name: "bscscan",
        url: "https://bscscan.com",
        apiUrl: "https://api.bscscan.com",
      },
    },
    blockTime: 2,
    chainType: "public",
    network: undefined,
    averageBlockTime: undefined,
    finalitySeconds: undefined,
  },
};
