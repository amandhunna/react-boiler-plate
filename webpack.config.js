const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    plugins: [ new HtmlWebpackPlugin({
        title: "Application name",
        template: './public/index.html'
    })],
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true
    },
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js"
    },
    module: {
      rules: [ {
        test: /\.(jpe?g|png|svg|gif)$/,
        // use:["url-loader"] or
        use: [{
          loader: "url-loader",
          options: {
            limit: 5000
          }
        }]
      },
        {
          test: /\.html$/i,
          loader: 'html-loader',
          options: {
            // Disables attributes processing
            attributes: false,
          },
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
      ],
    },
  };