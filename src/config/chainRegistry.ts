import { Chain } from "../types/chain";
import { CHAINS as DEFAULT_CHAINS } from "./chain";

class ChainRegistry {
  private chains: Map<number, Chain>;

  constructor(defaultChains: Record<number, Chain> = DEFAULT_CHAINS) {
    this.chains = new Map(
      Object.entries(defaultChains).map(([id, c]) => [Number(id), c])
    );
  }

  getChain(id: number): Chain | undefined {
    return this.chains.get(id);
  }

  getAllChains(): Chain[] {
    return Array.from(this.chains.values());
  }

  addChain(chain: Chain) {
    if (this.chains.has(chain.id)) {
      console.warn(`⚠️ Chain with id ${chain.id} already exists — overriding.`);
    }
    this.chains.set(chain.id, chain);
  }

  removeChain(id: number): void {
    this.chains.delete(id);
  }
}

export const chainRegistry = new ChainRegistry();
