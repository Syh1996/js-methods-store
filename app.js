/*
 * @Description: file content
 * @Author: yuhongshao
 * @Date: 2022-07-14 09:29:38
 * @email: yuhongshao@tencent.com
 * @LastEditTime: 2022-07-15 09:36:49
 */
if (process.env.NODE_ENV === 'development') {
    require('./test');
    require('./css/style.less');
    
}

export * from './methods'; //数据处理类
export * from './methods/axios.js'; //请求类

