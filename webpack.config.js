module.exports = {
    entry: './static/index.js',
    output: {
        path: './',
        filename: 'index.js'
    },
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
            query: {
                presets: ['es2015', 'react', 'react-hmre']
            }
        }]
    }
}
