var path = require('path'),
    webpack = require('webpack'),
    TransferWebpackPlugin = require('transfer-webpack-plugin'),
    filename = 'smooth.js';

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    externals: {
        clappr: 'Clappr',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    compact: true,
                }
            },
            { test: /\.(png|woff|eot|ttf|swf)/, loader: 'file-loader' }
        ],
    },
    resolve: {
        extensions: ['', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: filename,
        library: 'Smooth',
        libraryTarget: 'umd',
    },
};
