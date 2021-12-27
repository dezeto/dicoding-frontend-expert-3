const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/scripts/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        include: [path.resolve(__dirname, "src/scripts/views")],
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/templates/index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
          globOptions: {
            ignore: ["**/images/heros/**"],
          },
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, "src/scripts/sw.js"),
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    // new WebpackPwaManifest({
    //   filename: "manifest.json",
    //   name: "Hociak - Restaurant App",
    //   short_name: "Hociak",
    //   description: "Free Catalogue Restaurant for you",
    //   background_color: "#ffffff",
    //   theme_color: "#ff0022",
    //   crossorigin: "use-credentials",
    //   start_url: "/",
    //   display: "standalone",
    //   ios: true,
    //   fingerprints: false,
    //   inject: true,
    //   icons: [
    //     {
    //       src: path.resolve("src/public/icons/icon-512x512.png"),
    //       sizes: [96, 128, 192, 256, 384, 512],
    //       destination: "icons",
    //     },
    //   ],
    // }),
    // new InjectManifest({
    //   swSrc: "./src/scripts/src-sw.js",
    //   swDest: "sw.js",
    // }),
  ],
};
