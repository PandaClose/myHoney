// webpack.config.js
var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    bundle:['./src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: "dist/",
    filename: '[name].js'
  },
  // 新添加的module属性
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader!babel-loader' },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
      {
        test: /\.(png|jpg|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {test: /\.css$/, loader: "style-loader!css-loader"}, // 把多个css压缩到一个css中。
    ]
  },
  babel: {
    presets: ["es2015", "react", "stage-2"]
  },
  devServer: { inline: true },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin("[name].css"),
    new webpack.HotModuleReplacementPlugin()
  ]
};

// var path = require('path')
// var webpack = require('webpack')

// module.exports = { 
//   entry: './src/main.js',
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     publicPath: '/dist/',
//     filename: 'build.js'
//   },
//   module: {
//     loaders: [
//       { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader!babel-loader' },
//       { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
//       {test: /\.(jpg|png)$/, loader: "file-loader"},
//       {test: /\.css$/, loader: "style-loader!css-loader"}, // 把多个css压缩到一个css中。
//     ]
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//         options: {
//           loaders: {
//             // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
//             // the "scss" and "sass" values for the lang attribute to the right configs here.
//             // other preprocessors should work out of the box, no loader config like this necessary.
//             'scss': 'vue-style-loader!css-loader!sass-loader',
//             'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
//           }
//           // other vue-loader options go here
//         }
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       },
//         {
//             test: /\.css$/,
//             loader: 'style-loader!css-loader'
//         },{
//             test: /\.(eot|svg|ttf|woff|woff2)(\?.*)?$/,
//             loader: 'file-loader',
//             options: {
//                 name: '[name].[ext]?[hash]'
//             }
//         },
//       {
//         test: /\.(png|jpg|gif|svg)(\?.*)?$/,
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]?[hash]'
//         }
//       }
//     ]
//   },
//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js'
//     }
//   },
//   devServer: {
//     historyApiFallback: true,
//     noInfo: true
//   },
//   performance: {
//     hints: false
//   },
//   devtool: '#eval-source-map'
// }

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true
    // })
  ])
}