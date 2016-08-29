var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: './bigscreen/bigscreen.jsx',
  output: {
      path:__dirname +'/bigscreen/',
      publicPath:'/bigscreen/',
      filename: 'index.js',
  },
  devServer: {
      inline: true,
      port: 8080
  },
  module: {
    loaders:[{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react',
    }, { 
      test: /\.css$/, 
      loader: 'style-loader!css-loader' 
    }, { 
      test: /\.(png|jpg)$/, 
      loader: 'url-loader?limit=512'
    }]
  },
  plugins: [
    new uglifyJsPlugin({compress: {warnings: false}})
  ]
};