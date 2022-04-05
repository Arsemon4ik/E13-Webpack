// const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');




module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        contentBase: "../dist",
        // open:true,
        stats: {
            children: false,
            maxModules: 0
           }
   },
    plugins: [
           new MiniCssExtractPlugin(),
        //    new StylelintPlugin(),
           new HtmlWebPackPlugin(),
    ],
    output: {
      filename: 'main.js',
    },
    module: {
        rules:
    [
        {
            test: /\.css$/,
            use: [{
                loader : MiniCssExtractPlugin.loader,
                options : {
                    esModule : true
                }
            }, 'css-loader','stylint-loader']
        },
        {
            test: /\.js$/,
            exclude:'/node_modules/',
            use: 'eslint-loader',
        },

    ]
  },
};
