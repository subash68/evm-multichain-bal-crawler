import { chainRegistry } from "../config/chainRegistry";
import { Chain } from "../types/chain";

export const registerCustomChain = (chain: Chain) => {
  if (!chain.id || !chain.rpcUrls?.default.http.length) {
    throw new Error("Invalid chain definition - must include id and rpcUrls");
  }

  chainRegistry.addChain({ ...chain, chainType: "private" });
};

export const listChains = () => chainRegistry.getAllChains();
export const getChainById = (id: number) => chainRegistry.getChain(id);
