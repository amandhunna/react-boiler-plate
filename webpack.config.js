const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true
    },
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
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
            use: ['babel-loader'],
          },
      ],
    },
  };