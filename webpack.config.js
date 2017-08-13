const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SOURCE_DIR = path.resolve(__dirname, 'src');
const JAVASCRIPT_DIR = SOURCE_DIR + '/javascript';
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
    context: SOURCE_DIR,
    resolve: {
        modules: [
            path.resolve(JAVASCRIPT_DIR),
            path.resolve('./node_modules')
        ]
    },
    entry: {
        app: './javascript/entry.jsx'
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                // Skip any files outside of your project's `src` directory
                include: [JAVASCRIPT_DIR],
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'version': JSON.stringify(process.env.npm_package_version),
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        new CopyWebpackPlugin([
            {
                from: 'favicons',
                to: 'favicons'
            },
        ]),
        new CopyWebpackPlugin([
            {
                from: 'provided.js',
            },
        ]),
        new CopyWebpackPlugin([
            {
                from: 'settings.js',
            },
        ]),
    ]
};
