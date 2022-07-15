/**
 * 补0
 * @param {number} val 
 */
const full0 = val => {
    if (val < 10) {
        return '0' + val;
    }
    return val;
}

const getFormatDateResult = (format,replaceValue)=>{
  const formatList = ['yyyy','mm','dd','hh','ii','ss'];
  for(let i=0,length = formatList.length;i<length;i++){
    if(format.indexOf(formatList[i]) !==-1){
        format = format.replace(formatList[i],replaceValue[formatList[i]]);
        return getFormatDateResult(format,replaceValue);
    }
  }
  return format;
}

/**
 * 
 * @param {string | number} time  // 时间、日期
 * @param {string} format  //格式
 * @param {boolean} isFull  //是否自动补0
 */
export const formatterDate = (time, format = 'yyyy-mm-dd hh:ii:ss', isFull = true) => {
    if (!time) {
        return '';
    }
    let toDate = null;
    if (Object.prototype.toString.call(time) === "[object Date]") {
        toDate = time;
    }
    if (Object.prototype.toString.call(time) === "[object Number]") {
        toDate = new Date(time);
    }
    if (Object.prototype.toString.call(time) === "[object String]") {
        toDate = new Date(time);
    }
    //是否自动补0
    let year = '', month = '', day = '', hour = '', minutes = '', seconds = '';
    if (isFull) {
        year = toDate.getFullYear();
        month = full0(toDate.getMonth() + 1);
        day = full0(toDate.getDate());
        hour = full0(toDate.getHours());
        minutes = full0(toDate.getMinutes());
        seconds = full0(toDate.getSeconds());
    } else {
        year = toDate.getFullYear();
        month = toDate.getMonth() + 1;
        day = toDate.getDate();
        hour = toDate.getHours();
        minutes = toDate.getMinutes();
        seconds = toDate.getSeconds();
    }
    const dateObject = {
        yyyy:year,
        mm:month,
        dd:day,
        hh:hour,
        ii:minutes,
        ss:seconds
    };
    return getFormatDateResult(format,dateObject);
}