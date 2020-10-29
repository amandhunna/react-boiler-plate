const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const absPath = pathName => {
  const newPath = path.resolve(__dirname, pathName)
  console.log('newPath : ', newPath);
  return newPath;
};


const packModules = {
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
};

const plugins =  [ 
    new HtmlWebpackPlugin({
    title: "App title",
    template: absPath('public/index.html'),
})];

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    module: packModules,
    plugins,
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true
    },
    entry: absPath("src"),
    output: {
        path: absPath('dist'),
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