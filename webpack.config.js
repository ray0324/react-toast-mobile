const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ip = require('ip');
module.exports = {
    entry: './demo/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:  './',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    publicPath: '../',
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    publicPath: '../',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            }
        ]
    },
    // devserver 配置
    devServer: {
        host: ip.address(),
        // port: 8080,
        hot: true,
        clientLogLevel: 'warning',
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: './dist',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            hash: true
        }),
        new ExtractTextPlugin('css/[name].css'),
    ]
};
