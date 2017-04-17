/**
 * Created by ige16 on 2017.4.9 0009.
 */
//内置path
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: {
        main: './module/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].js'
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    'babel-loader'
                ],
                //include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },

    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        // }),
        // new webpack.LoaderOptionsPlugin({
        //     minimize: true
        // }),
        new HtmlWebpackPlugin({
            template: './index.html',
        })
    ],

    // resolve: {
    //     extensions: ['.js', '.css', '.jsx']
    // }
};

//exclude 排除
//include 包含