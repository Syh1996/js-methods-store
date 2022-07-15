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
            throw(`${func}应该是一个函数`);
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
            throw(`${func}应该是一个函数`);
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

