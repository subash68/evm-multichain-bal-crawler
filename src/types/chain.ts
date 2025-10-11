export enum ChainId {
  Ethereum = 1,
  Polygon = 137,
  BSC = 56,
  Avalanche = 43114,
  Arbitrum = 42161,
  Optimism = 10,
  Base = 8453,
  // Private chains can use custom ids (e.g., >10_000)
  CorpDevnet = 10001,
  ResearchNet = 10002,
}

type ChainRpcUrls = {
  http: readonly string[];
  webSockets?: readonly string[] | undefined;
};

type ChainBlockExplorer = {
  name: string;
  url: string;
  apiUrl?: string | undefined;
};

type ChainNativeCurrency = {
  name: string;
  symbol: string;
  decimals: number;
};

type ChainType = "public" | "private" | "consortium";

export type Chain = {
  id: number;
  name: string;
  rpcUrls:
    | (Partial<Record<string, ChainRpcUrls>> & {
        default: ChainRpcUrls;
      })
    | undefined;
  nativeCurrency: ChainNativeCurrency;
  testnet?: boolean | undefined;
  blockExplorers?:
    | (Partial<Record<string, ChainBlockExplorer>> & {
        default: ChainBlockExplorer;
      })
    | undefined;
  blockTime?: number | undefined;
  chainType?: ChainType | undefined;
  network?: string | undefined;
  averageBlockTime?: number | undefined;
  finalitySeconds?: number | undefined;
};

// // Usage
// let chain: Chain = {
//   id: 1,
//   name: "Ethereum",
//   rpcUrls: {
//     default: {
//       http: ["https://default.rpc.com"],
//     },
//   },
//   nativeCurrency: {
//     name: "ETHER",
//     symbol: "ETH",
//     decimals: 18,
//   },
//   testnet: true,
//   chainType: "public",
// };
