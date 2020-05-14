const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   mode: 'development',
    entry: ['./src/app.js'],
    plugins: [
        
        new HtmlWebpackPlugin({
            title: 'Webpack starter project',
            template: path.resolve('./src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename:"[id].css"
        })

        
   ],
   module: {
      rules: [
         {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
         },
         {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env'],
               },
            },
         },
         {
            test: /\.html$/,
            use: {
               loader: 'html-loader',
            },
         },
         {
            test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     outputPath: './images',
                     name: '[name].[ext]',
                  },
               },
            ],
         },
      ],
   },
};
