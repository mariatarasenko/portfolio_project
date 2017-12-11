const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const config = {
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],
    module:{
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                "babel-loader",
                "eslint-loader",
              ],
              options: {
               
                formatter: require("eslint-friendly-formatter")
              }
        }]
    }
};

module.exports = config;