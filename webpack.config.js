const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, ''),
    entry: [
        path.resolve(__dirname, 'component/src/index.jsx'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'index.js',
    },
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.scss$/,
            use: [{
                 loader: "style-loader" // creates style nodes from JS strings
             }, {
                 loader: "css-loader" // translates CSS into CommonJS
             }, {
                 loader: "sass-loader" // compiles Less to CSS
             }]
        }
        ]
    }

};
