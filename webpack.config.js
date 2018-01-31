// http://dev-city.me/2017/08/31/webpack-config-example

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isDevelopment = !process.env.production;

const myPath = {
    dist: 'web/assets/build',
    scripts: {
        target: 'app.js',
        src: './assets/scripts/index.js'
    },
    images: {
        outputPath: '../images/[name].[ext]'  // костыль
    }
}

module.exports = {
    entry: myPath.scripts.src,
    output: {
        filename: myPath.scripts.target,
        path: path.resolve(__dirname, myPath.dist)
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: "eslint-loader"
                    },{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }]
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        { loader: "css-loader", options: { sourceMap: true }},
                        { loader: "postcss-loader", options: { sourceMap: 'inline' } },
                        { loader: "sass-loader", options: { sourceMap: true }}
                    ]
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: myPath.images.outputPath
                        }
                    }, {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 80
                            }
                        }
                    },
                ],
            }
        ],
    },

    plugins: [
        new ExtractTextPlugin("app.css"),
    ]
};