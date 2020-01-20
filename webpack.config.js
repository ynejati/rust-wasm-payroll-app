const path = require("path");
const webpack = require("webpack");
// const TerserPlugin = require("terser-webpack-plugin");
// const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  devtool: "eval",
  mode: "development",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "./typescript/index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/dist/'
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
    // extensions: [".js", ".ts", ".tsx", ".wasm"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader"
          }
        ],
        include: path.join(__dirname, "typescript")
      },
      // {
      //   test: /\.wasm$/,
      //   type: "webassembly/experimental"
      // },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        include: path.join(__dirname, "css")
      }
    ]
  },
  // plugins: [
  //   new WasmPackPlugin({
  //     crateDirectory: path.resolve(__dirname, "./")
  //   })
  // ]
};
