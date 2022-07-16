/*
 * @Description: webpack.config.js
 * @Author: yuhongshao
 * @Date: 2022-07-14 09:30:41
 * @email: yuhongshao@tencent.com
 * @LastEditTime: 2022-07-15 09:56:08
 */

const {merge} = require('webpack-merge');
const webpackConfigComm = require("./webpack.comm");
const webpackConfigDev = require("./webpack.dev");
const webpackConfigProd = require('./webpack.prod');
module.exports = env => {
    const curEnv = {
        mode: env.production ? 'production' : 'development'
    }
    if(env.production){
        return merge(webpackConfigComm,webpackConfigProd,curEnv);
    }else{
        return merge(webpackConfigComm,webpackConfigDev,curEnv);
    }
}