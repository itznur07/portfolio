const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  // ... other configuration
  plugins: [
    // ... other plugins
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ],
};
