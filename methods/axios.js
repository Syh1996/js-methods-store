import axios from 'axios';
const instance = axios.create({
    timeout: 30000,

});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    typeof window.axoisResponse === 'function' ?  window.axoisResponse(response) : null;
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
/**
 * 初始化配置项
 * @param {object} configObject 
 */
const axoisSetConfig = (configObject) => {
    for (const i in configObject) {
        if (i === 'headers') {
            instance.defaults.headers.common = configObject[i].common;
        } else {
            instance.defaults[i] = configObject[i];
        }

    }
}
const createAxiosCancelToken = () => {
    return axios.CancelToken;
}

/**
 * 
 * @param {string} url 
 * @param {object} data 
 * @param {string} cancelKey 
 * @param {function} CancelToken 
 */
const axiostGet = async function (url, data, cancelKey = '', CancelToken = () => { }) {
    const that = this;
    const requestArgs = {
        params: data,
    };
    if (cancelKey) {
        requestArgs.cancelToken = new CancelToken(function executor(c) {
            // executor 函数接收一个 cancel 函数作为参数
            that[cancelKey] = c;
        })
    }
    const result = await instance.get(url, requestArgs);
    return result;
}

/**
 * 
 * @param {string} url 
 * @param {object} data 
 * @param {string} cancelKey 
 * @param {function} CancelToken 
 */
const axiosPost = async function (url, data, cancelKey = '', CancelToken = () => { }) {
    const that = this;
    const requestArgs = {
        data: data,
    };
    if (cancelKey) {
        requestArgs.cancelToken = new CancelToken(function executor(c) {
            // executor 函数接收一个 cancel 函数作为参数
            that[cancelKey] = c;
        })
    }
    const result = await instance.get(url, requestArgs);
    return result;
}

export {
    axoisSetConfig,
    createAxiosCancelToken,
    axiostGet,
    axiosPost
}