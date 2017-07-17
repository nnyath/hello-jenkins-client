var path = require('path');

const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html'
})

const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin()

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        HotModuleReplacementPlugin]
};