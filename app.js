if (process.env.NODE_ENV === 'development') {
    require('./test');
    require('./css/style.less');
    
}

export * from './methods'; //数据处理类
export * from './methods/axios.js'; //请求类
export * from './methods/date.js'; //日期处理类
export * from './methods/regs.js'; //正则处理