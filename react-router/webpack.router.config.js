/**
 * Created by ige16 on 2017.4.9 0009.
 */
//内置path
const path = require('path');

module.exports = {

    entry: {
        bundle: './index.js'
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: 'build',
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    'babel-loader'
                ],
                //include: path.resolve(__dirname, '.')
            },
            // {
            //     test: /\.css$/,
            //     loader: 'style-loader!css-loader'
            // },
            // {
            //     test: /\.less$/,
            //     loader: 'style-loader!css-loader!less-loader'
            // }
        ]
    }


};

//exclude 排除
//include 包含