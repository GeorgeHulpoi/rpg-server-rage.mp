const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = 
{
    entry: './dist/index.js',
    mode: 'production',
    output: 
    {
        path: path.resolve(__dirname + '/packages/main'),
        filename: 'index.js',
    },
    optimization: 
    {
        minimizer: 
        [
            new UglifyJsPlugin()
        ],
    }
};