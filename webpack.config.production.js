var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
  ],
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      }, {
        test: /\.less$/,
        loader: 'style!css!less',
      }, {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      }, {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
    ],
  },
};
