const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
   mode: 'development',
    entry: ['./src/app.js'],
    // watch: true,
    //có cũng đc chưa hiểu
    // watchOptions: {
    //     aggregateTimeout: 300, // Process all changes which happened in this time into one rebuild
    //     poll: 1000, // Check for changes every second,
    //     ignored: /node_modules/,
    //     // ignored: [
    //     //   '**/*.scss', '/node_modules/'
    //     // ]
    //   },
    devtool: 'source-maps',
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
        hot: true,
        open: true,
        inline: true
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: ('./src/index.html'),
            filename:('index.html'),
        
        }),
        new HtmlWebpackPlugin({
         template: ('./src/post_1.html'),
         filename:('post_1.html'),
     
     }),
     new HtmlWebpackPlugin({
      template: ('./src/post_2.html'),
      filename:('post_2.html'),
  
  }),
        new MiniCssExtractPlugin({
         filename: "[name].css",
         chunkFilename:"[id].css"
     }),
        new webpack.HotModuleReplacementPlugin()
        
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
         // {
         //    test: /\.html$/,
         //    use: [
         //       {
         //          loader: 'file-loader',
         //          options: {
         //             name: '[name].[ext]',
         //          },
         //       }
         //    ],
         //    exclude : path.resolve(__dirname, 'src/index.html')
         // },
      ],
   },
};
