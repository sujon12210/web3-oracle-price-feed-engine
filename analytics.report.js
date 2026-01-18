export function generateReport(feed, validation, anomaly) {
  console.log("----- Oracle Feed Report -----");
  console.log("Symbol:", feed.symbol);
  console.log("Price:", feed.price);
  console.log("Timestamp:", new Date(feed.timestamp).toLocaleString());
  console.log("Valid:", validation.valid);
  console.log("Anomaly Detected:", anomaly.anomaly);
  console.log("-------------------------------");
}
