const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const IndexHTMLWebpackPluginConfig = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  chunks: ["index"],
  favicon: "./src/favicon.ico",
  inject: true,
});

module.exports = {
  entry: {
    index: path.join(__dirname, "/src/index.tsx"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      images: path.resolve(__dirname, "src/images"),
      store: path.resolve(__dirname, "src/store"),
      src: path.join(__dirname, "src"),
    },
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "/build"),
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 1111,
    hot: true,
    historyApiFallback: true,
  },
  mode: "development",
  plugins: [
    IndexHTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
  ],
};
