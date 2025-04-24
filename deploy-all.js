// deploy-all.js

const { execSync } = require("child_process");

const workerPaths = [
  "browser-worker",
  "browser-worker1",
  "browser-worker2",
  "browser-worker3",
  "browser-worker4",
  "browser-worker5",
  "browser-worker6",
  "browser-worker7",
  "browser-worker8",
  "browser-worker9",
  "browser-worker10",
  "browser-worker11"
];

for (const path of workerPaths) {
  console.log(`🚀 Deploying ${path}`);
  try {
    execSync(`wrangler deploy --config ./${path}/wrangler.toml`, { stdio: "inherit" });
  } catch (err) {
    console.error(`❌ Failed to deploy ${path}:`, err.message);
    process.exit(1); // stop if any deployment fails
  }
}
