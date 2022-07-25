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
                const that = this;
                const createImg = document.createElement('img');
                createImg.src = this.result;
                createImg.onload = function () {
                    resolve({
                        data: that.result,
                        width: this.width,
                        height: this.height
                    });
                }
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
    if (!hasHttp.test(urlString)) {
        urlString = 'http:' + urlString;
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

/**
 * @param {Element} copyObject
 * 复制文字
 */
export const copyText = ({ resourceObject, resourceText }) => {
    return new Promise((resolve) => {
        let textVal = resourceText;
        if (!resourceText) {
            const tagName = resourceObject.tagName.toLowerCase();
            if (['input', 'textarea'].includes(tagName)) {
                textVal = resourceObject.value;
            } else {
                textVal = resourceObject.innerText;
            }
        }
        const createInput = document.createElement('input');
        createInput.value = textVal;
        createInput.id = 'copyTextDom';
        document.body.appendChild(createInput);
        document.querySelector("#copyTextDom").select(); // 使用js去通过id找到并执行input实体的全部选中
        document.execCommand("Copy"); //原生copy方法执行浏览器复制命令
        document.querySelector("#copyTextDom").remove();
        resolve({
            text: textVal
        })
    });
}


/**
 * 
 * @param {object} param0 
 */
export const miniPhoto = ({ file, width, height }) => {
    return new Promise((resolve, reject) => {
        imgToBase64(file).then(res => {
            const { width: rawWidth, height: rawHeight, data } = res;
            const createCanvas = document.createElement('canvas');
            let curWidth = 0, curHeight = 0;
            if (width && !height) {
                const scaleWidth = width / rawWidth;
                curWidth = width;
                curHeight = Math.floor(rawHeight * scaleWidth);
            }
            if (height && !width) {
                const scaleHeight = height / rawHeight;
                curHeight = height;
                width = Math.floor(rawWidth * scaleHeight)
            }
            if (width && height) {
                //计算缩放比
                curWidth = width;
                curHeight = height;
            }
            createCanvas.width = curWidth;
            createCanvas.height = curHeight;
            const ctx = createCanvas.getContext("2d");
            const img = document.createElement('img');
            createCanvas.id = 's-canvas';
            img.src = data;
            img.onload = function () {
                ctx.drawImage(this, 0, 0, curWidth, curHeight);
                resolve(createCanvas.toDataURL());
            }
        })
    });
} 