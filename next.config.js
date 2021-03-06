// Example config for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/zeit/next.js/tree/canary/packages/next-mdx
module.exports = {
  target: 'serverless',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      loader: "url-loader",
    });

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config;
  },
};
