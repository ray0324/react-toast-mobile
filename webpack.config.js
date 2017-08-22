const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 读取全局配置环境
const env = String.prototype.trim.call(process.env.WEBPACK_ENV) || 'production';

const entry = {
    develop: './examples.js',
    production: './src/index.js',
    examples: './examples.js'
}

const output = {
    develop: {
        filename: 'examples.js',
        path: path.resolve(__dirname, 'examples'),
        publicPath: './'
    },
    production: {
        filename: 'react-toast-mobile.js',
        path: path.resolve(__dirname, 'lib'),
        publicPath: './',
        libraryTarget: 'umd',
        library: 'ReactToastMobile'
    },
    examples: {
        filename: 'examples.js',
        path: path.resolve(__dirname, 'examples'),
        publicPath: './'
    }
}

const externals = {
    develop: {},
    examples: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      'react-transition-group': 'ReactTransitionGroup',
      'react-toast-mobile': 'ReactToastMobile',
    },
    production: {
      'react': {
          commonjs: 'react',
          commonjs2: 'react',
          amd: 'react',
          root: 'React'
      },
      'react-dom': {
          commonjs: 'react-dom',
          commonjs2: 'react-dom',
          amd: 'react-dom',
          root: 'ReactDOM'
      },
      'prop-types': {
          commonjs: 'prop-types',
          commonjs2: 'prop-types',
          amd: 'prop-types',
          root: 'PropTypes'
      },
      'react-transition-group': {
          commonjs: 'react-transition-group',
          commonjs2: 'react-transition-group',
          amd: 'react-transition-group',
          root: 'ReactTransitionGroup'
      }
    }
}

module.exports = {
    entry: entry[env],
    output: output[env],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    publicPath: './',
                    use: ['css-loader', 'postcss-loader']
                })
            }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    publicPath: './',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            }
        ]
    },
    // deps
    externals: externals[env],
    // devserver config
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        hot: true,
        clientLogLevel: 'warning',
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: './examples',
        publicPath: '/'
    },
    plugins: [new ExtractTextPlugin('react-toast-mobile.css')]
};
