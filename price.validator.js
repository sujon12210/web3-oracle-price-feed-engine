export function validatePrice(feed) {
  const valid = feed.price > 0;

  return {
    symbol: feed.symbol,
    valid
  };
}
