const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Webpack = require('webpack')

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new Webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    }
};