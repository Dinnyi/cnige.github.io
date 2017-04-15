/**
 * Created by ige16 on 2017.4.9 0009.
 */
//内置path
/*
var webpack = require('webpack');

module.exports = {

    entry: {
        index: './index.js'
    },

    output: {
        path: 'public',
        filename: 'bundle.js',
        publicPath: '/'
    },

    devtool: 'source-map',

    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader!babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.css', '.jsx']
    }

};*/


const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    devtool: 'source-map',

    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        })
    ] : [],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    'babel-loader'
                ]
            }
        ]
    }
};




//exclude 排除
//include 包含