import { connectRPC } from "./rpc.client.js";
import { simulateFeed } from "./oracle.feed.js";
import { validatePrice } from "./price.validator.js";
import { detectAnomaly } from "./anomaly.detector.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Oracle Price Feed Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const feed = simulateFeed("ETH");

const validation = validatePrice(feed);
const anomaly = detectAnomaly(feed);

generateReport(feed, validation, anomaly);
