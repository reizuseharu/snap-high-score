const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],

    alias: {
      "@assets": path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components/'),
      layouts: path.resolve(__dirname, 'src/layouts/'),
      models: path.resolve(__dirname, 'src/models/'),
      services: path.resolve(__dirname, 'src/services/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      "@views": path.resolve(__dirname, 'src/views')
    },
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};
