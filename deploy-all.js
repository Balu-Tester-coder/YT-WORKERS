// deploy-all.js
const { execSync } = require('child_process');

for (let i = 0; i <= 11; i++) {
  const folder = i === 0 ? 'browser-worker' : `browser-worker${i}`;
  console.log(`🚀 Deploying ${folder}`);
  execSync(`npx wrangler deploy --config ./${folder}/wrangler.toml`, { stdio: 'inherit' });
}
