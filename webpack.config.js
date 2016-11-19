module.exports = {
    entry: './static/index.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devtool: 'source-map',
    devServer: {
        port: 3333,
        inline: true,
        colors: true,
        hot: true,
        progress: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
        }]
    }
}
