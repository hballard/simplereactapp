module.exports = {
    entry: './static/main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        port: 3333,
        inline: true,
        colors: true,
        //hot: true,
        progress: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
                //presets: ['es2015', 'react', 'react-hmre']
            }

        },
        {
            test: /\.json$/, loader: 'json'
        }]
    }
};
