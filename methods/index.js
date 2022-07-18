/**
 * 去重数组类
 * @param {array} jsonArray 
 */
export const deleteFullJsonArray = jsonArray => {
    const result = (jsonArray || []).reduce((record, cur, index) => {
        const curToString = (cur && typeof cur === 'object') ? JSON.stringify(cur) : cur;
        if (!record.includes(curToString)) {
            record = [...record, curToString];
        }
        return record;
    }, []).map(item => {
        return JSON.parse(item);
    });
    return result;
}


/**
 * 防抖
 * @param {function} func 
 * @param {number} timeout 
 */
export const debound = (() => {
    let timer = null;
    return (func, timeout = 300) => {
        if (typeof func !== "function") {
            throw (`${func}应该是一个函数`);
        };
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        timer = setTimeout(func, timeout);
    }
})();

/**
 * 节流
 * @param {function} func 
 * @param {number} timeout 
 */
export const throttle = (() => {
    let isLoad = false;
    return (func, timeout = 1000) => {
        if (typeof func !== "function") {
            throw (`${func}应该是一个函数`);
        };
        if (isLoad) {
            return;
        }
        isLoad = true;
        func();
        setTimeout(() => {
            isLoad = false;
        }, timeout);
    }
})();


/**
 * 图片转base64
 */
export const imgToBase64 = file => {
    if (!file) {
        throw ('请选择图片')
    }
    const { name } = file;
    const extIndex = name.lastIndexOf('.');
    const extName = name.substring(extIndex + 1);
    const exts = ['jpg', 'png', 'gif', 'jpeg', 'bmp'];
    if (exts.includes(extName.toLowerCase())) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(this.result);
            }
        });
    } else {
        throw ('file不是图片')
    }
}


/**
 *  验证图片类型
 */
export const checkFileIsPhoto = file => {
    if (!file) {
        throw ('请选择图片')
    }
    const { name } = file;
    const extIndex = name.lastIndexOf('.');
    const extName = name.substring(extIndex + 1);
    const exts = ['jpg', 'png', 'gif', 'jpeg', 'bmp'];
    return exts.includes(extName.toLowerCase());
}

/**
 * url获取参数
 * ?name=baidu&age=22&address=北京
 */
export const urlGetArgs = (urlString = window.location.href) => {
    const hasHttp = /^http(s?)/;
    if(!hasHttp.test(urlString)){
        urlString = 'http:'+urlString;
    }
    const url = new URL(urlString);
    const search = url.search ? url.search.substring(1,) : '';
    if (search) {
        const vars = search.split('&');
        const result = vars.reduce((opt, cur) => {
            const arr = cur.split('=');
            const key = arr[0];
            const value = decodeURIComponent(arr[1]);
            opt[key] = value;
            return opt;
        }, {});
        return result;
    } else {
        return {}
    }
}