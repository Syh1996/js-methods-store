import axios from 'axios';
const instance = axios.create({
    timeout: 30000,

});
const createAxiosCancelToken = ()=>{
    return axios.CancelToken;
}
const axiostGet = async function(url, data, cancelKey = '',CancelToken=()=>{}) {
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

const axiosPost = async function(url, data, cancelKey = '',CancelToken=()=>{}) {
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
    createAxiosCancelToken,
    axiostGet,
    axiosPost
}