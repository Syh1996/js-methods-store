const path = require('path');
module.exports = {
    entry: {
        main: './app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },

}