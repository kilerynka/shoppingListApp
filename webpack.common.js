const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    fruits: "./src/js/fruits.js",
    list: "./src/js/list.js",
    vegetables: "./src/js/vegetables.js",
    dairy: "./src/js/dairy.js",
    meat: "./src/js/meat.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/*.DS_Store"],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index", "fruits"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/fruits.html",
      inject: true,
      chunks: ["index", "fruits"],
      filename: "fruits.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/list.html",
      inject: true,
      chunks: ["index", "list"],
      filename: "list.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/vegetables.html",
      inject: true,
      chunks: ["index", "vegetables"],
      filename: "vegetables.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/dairy.html",
      inject: true,
      chunks: ["index", "dairy"],
      filename: "dairy.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/meat.html",
      inject: true,
      chunks: ["index", "meat"],
      filename: "meat.html",
    }),
  ],
};
