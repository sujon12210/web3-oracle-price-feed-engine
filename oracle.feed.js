export function simulateFeed(symbol) {
  console.log("Simulating oracle feed for:", symbol);

  return {
    symbol,
    price: (Math.random() * 3000 + 1000).toFixed(2),
    timestamp: Date.now()
  };
}
