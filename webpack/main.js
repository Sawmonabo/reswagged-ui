const path = require("path");

module.exports = {
  entry: {
    "reswagged-ui": "./src/browser.ts",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.webpack.json",
              logLevel: "debug",
              logInfoToStdOut: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "reswagged-ui.min.js",
    path: path.resolve(__dirname, "../dist"),
  },
};
