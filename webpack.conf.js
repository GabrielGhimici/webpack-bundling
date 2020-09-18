const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {

  entry: {
    /*react: ['react', 'react-dom', 'react-router-dom'],
    shared: ['lodash'],
    core: path.join(__dirname, "app", "core-module", "index.ts"),
    sharedComponents: path.join(__dirname, "app", "shared-module", "index.ts"),*/
    main: path.join(__dirname, "index.tsx"),
    /*app: path.join(__dirname, "app", "app.tsx"),
    cr: path.join(__dirname, "app", "cr-module", "index.ts"),
    ds: path.join(__dirname, "app", "ds-module", "index.ts")*/
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.join(__dirname, "dist")
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: 'localhost',
    port: 4200
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)(x)?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /node_modules(\/|\\).*\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets'),
          to: path.resolve(__dirname, "dist", "assets"),
          toType: 'dir'
        },
      ]
    })
  ]
}
