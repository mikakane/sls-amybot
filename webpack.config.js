"use strict"

const webpack = require("webpack")

module.exports = {
    entry: './handler.js',
    externals: [
        "aws-sdk","superagent"
    ],
    resolve:{
        extensions: ["", ".webpack.js", ".js" ]
    },
    target: 'node',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: __dirname,
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loaders: ['json'],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            env: JSON.stringify(require("./setting.js"))
        })
    ]
};

