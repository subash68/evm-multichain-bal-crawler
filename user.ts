import { getChainById, listChains, registerCustomChain } from "./src/api/chain";

registerCustomChain({
  id: 7777,
  name: "Local DevChain",
  chainType: "private",
  rpcUrls: { default: { http: ["http://127.0.0.1:8545"] } },
  nativeCurrency: { name: "LocalETH", symbol: "LETH", decimals: 18 },
  network: "local-dev",
});

console.log("✅ Registered chains:");
console.table(
  listChains().map((c) => ({ id: c.id, name: c.name, type: c.chainType }))
);

const chain = getChainById(7777);
console.log("🔍 Using chain:", chain?.name);

console.log("🔍 Using chain:", getChainById(1)?.name);
