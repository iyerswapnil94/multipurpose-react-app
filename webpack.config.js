const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
});

module.exports = {
  entry: "./src/index.tsx",
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
      src: path.join(__dirname, "src"),
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "/build"),
    publicPath: "/",
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 1111,
    hot: true,
    historyApiFallback: true,
  },
  mode: "development",
  plugins: [htmlPlugin],
};
