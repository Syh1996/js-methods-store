const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    output:{
        library:{
            type:'umd',
            name:'methods'
        }
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: false,
        http2: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './template/index.html'
        })
    ],
}