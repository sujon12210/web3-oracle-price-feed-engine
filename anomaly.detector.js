export function detectAnomaly(feed) {
  const price = Number(feed.price);
  const anomaly = price > 5000 || price < 500;

  return {
    symbol: feed.symbol,
    anomaly
  };
}
