export enum ChainId {
  Ethereum = 1,
  Polygon = 137,
  BSC = 56,
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
