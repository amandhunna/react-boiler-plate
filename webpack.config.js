const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonModule = {
  module: {
    noParse: (content) => /.tff/.test(content),
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.(css|scss)$/,
        use:["style-loader", "css-loader"]
      },
      // https://webpack.js.org/guides/asset-management/
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
  ]
 }
}

const resolve = {
  resolve: {
    alias: {
      "react": "react-bundle",
      "react-dom": "react-bundle",
      "react-bundle": path.resolve(__dirname, "react-bundle/node_modules/react-bundle.js") 
    }
  }
}

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    ...commonModule,
    ...resolve,
      plugins: [ 
        new HtmlWebpackPlugin({
        title: "Kivi Health",
        template: './public/index.html'
    })],
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
      //  historyApiFallback: true
    },
    entry: path.resolve(__dirname, "./dist/index.js"),
    output: {
        path: path.join(__dirname, '/dist2'),
        filename: '[name].[hash].js',
    },
      optimization: {
        // https://webpack.js.org/guides/caching/#output-filenames
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'node_modules',
              chunks: 'all',
            },
          },
        },
      },
    
};