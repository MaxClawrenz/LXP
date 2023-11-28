const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[contenthash].js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx']
        },
        optimization: {
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin(),
            ],
        },
    devServer: {
        port: 3000,
        hot: true
    }
}