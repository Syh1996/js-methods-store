/*
 * @Description: file content
 * @Author: yuhongshao
 * @Date: 2022-07-14 09:30:41
 * @email: yuhongshao@tencent.com
 * @LastEditTime: 2022-07-15 09:56:08
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = env => {
    const library = {
        type: env.production ? 'module' : 'umd'
    };
    if (env.development) {
        library.name = 'methods'
    }
    const plugins = [];
    if (env.development) {
        plugins.push(new HtmlWebpackPlugin({
            template: './template/index.html'
        }))
    }
    return {
        entry: {
            main: './app.js',
        },
        experiments: {
            outputModule: env.production ? true : false,
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            clean: true,
            library
        },
        mode: env.production ? 'production' : 'development',
        plugins,
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
        optimization: env.production ? {
            minimize: true,
            minimizer: [new TerserPlugin()],
        } : {},
    }
}