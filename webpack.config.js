// webpack.config.js

const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    // Tell webpack to start bundling our app at app/index.js

    entry: './app',

    // output our app to the dist/ dir

    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'dist') // This has to an absolute path
    },

    // emit source maps so we can debug in the browser
    devtool: 'source-map',

    // Tell webpack to run our source code through babel

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },

    // Since webpack only understands javascript, we need to add a plugin to tell it how to handle html

    plugins: [
        new HtmlPlugin({
            template: 'app/index.html'
        })
    ]
}