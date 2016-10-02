var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SOURCE_DIR = path.resolve(__dirname, 'src');
var JAVASCRIPT_DIR = SOURCE_DIR + '/javascript';
var BUILD_DIR = path.resolve(__dirname, 'build/public');

var config = {
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                // Skip any files outside of your project's `src` directory
                include: [JAVASCRIPT_DIR],
                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,
                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react'],
                }
            },
            {
                test: /(\.scss|\.css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!toolbox')
            }
        ]
    },
    entry: JAVASCRIPT_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: SOURCE_DIR + '/index.html'
        }),
        new ExtractTextPlugin('bundle.css', {
            allChunks: true
        })
    ]
};

module.exports = config;