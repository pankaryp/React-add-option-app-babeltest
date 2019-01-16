const path = require('path');

module.exports = {
    entry: './src/App.js',
    mode: 'production',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    }, 
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    // Add source map
    devtool: 'cheap-module-eval-source-map',
    // Add dev server
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
