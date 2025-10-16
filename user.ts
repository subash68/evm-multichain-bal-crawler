/**
 * ⚠️ This is a test code - for users
 *
 */
import { getChainById, listChains, registerCustomChain } from "./src/api/chain";

registerCustomChain({
  id: 80002,
  name: "Polygon testnet",
  chainType: "public",
  rpcUrls: {
    default: { http: ["https://polygon-mumbai-bor-rpc.publicnode.com"] },
  },
  nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
  network: "local-dev",
});

console.log("✅ Registered chains:");
console.table(
  listChains().map((c) => ({
    id: c.id,
    name: c.name,
    rpcUrl: c.rpcUrls?.default.http[0],
  }))
);

const chain = getChainById(80002);
console.log("🔍 Using chain:", chain?.name);
console.log("🔍 Using chain:", getChainById(1)?.name);
