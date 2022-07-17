## 说明 
### 重要提示

方法集成仍在开发中，已有功能不受影响，后续将持续扩展其它功能

### 安装

``````
npm i js-methods-store -S
``````

### 使用

``````js
import * as jsStore from 'js-methods-store'; //推荐
``````


### 用途
用于工作中常用的组件和方法集成

### 详细api

#### 数据处理类

| 方法名              | 用途                          | 用法                                                         |
| ------------------- | ----------------------------- | ------------------------------------------------------------ |
| deleteFullJsonArray | 对数组去重，主要针对jsonArray | deleteFullJsonArray([{},{},{}]),返回去重后的数据             |
| debound             | 防抖函数                      | debound(事件方法，**[防抖时长默认300ms，可选]**)，`参考示例代码防抖` |
| throttle            | 节流函数                      | throttle(事件方法，**[节流时长默认1000ms，可选]**)           |
| imgToBase64         | 图片转base64                  | imgToBase64(**File**).then(res=>{    //res为base64图   })    |
| checkFileIsPhoto    | 验证是否为图片                | checkFileIsPhoto(**File**)  // true=>是图片；false=>不是图片       `参考示例代码  验证是否为图片` |



#### axios请求类

| 方法名                 | 用途                                            | 用法                                                         |
| ---------------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| createAxiosCancelToken | 生成`CancelToken` 的构造函数来创建 cancel token | createAxiosCancelToken（）直接调用，无需任何参数             |
| axiostGet              | axios get请求                                   | axiostGet(**url,data,[可选存放取消请求函数],[可选CancelToken]**)详见示例代码  axios请求 |
| axiosPost              | axios  post请求                                 | axiosPost(**url,data,[可选存放取消请求函数],[可选CancelToken]**)详见示例代码  axios请求 |

#### 动画类

* 暂无

#### 日期格式化类

| 方法名        | 用途                                                         | 用法                                                         |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| formatterDate | （时间戳、日期）转化; yyyy年；mm月；dd日; hh小时;ii分；ss秒。 | formatterDate(时间/字符串日期格式/时间戳/日期，'yyyy/mm/dd hh:ii:ss'，是否需要补0默认true)  参考`示例代码日期格式化类` |



### 示例代码

#### 日期格式化类

```````js 
/**
  传入时间戳
**/
formatterDate(15050884880,'yyyy年mm月dd hh小时ii分ss秒',true); //2022年07月15 17小时02分06秒

/**
  传入字符串日期
**/
formatterDate('2022/02/22 10:00:00','yyyy年mm月dd hh小时ii分ss秒',true); //2022年07月15 17小时02分06秒

/**
  标准日期
**/
formatterDate(Date(),'yyyy年mm月dd hh小时ii分ss秒',true); //2022年07月15 17小时02分06秒
formatterDate(Date(),'yyyy-mm-dd hh:ii:ss')   //2022-07-15 17:02:33

/**
  只需要月/日
**/
formatterDate(Date(),'mm-dd')   //07-15

/**
  只需要时分秒
**/
formatterDate(Date(),'hh:ii:ss')   //17:02:33

/**
  支持各种奇怪拼接，需要保证yyyy、mm、dd、hh、ii、ss不变
  其它怪异格式
**/
formatterDate(Date(),'yyyy%mm%dd hh+ii+ss')   //2022%07%15 17+03+40
formatterDate(Date(),'yyyy年ss秒') //2022年20秒 
```````

#### 防抖

``````js
document.querySelector("#debound-btn").onclick = ()=>{debound(deboundClick)};
function deboundClick(){
    setTimeout(()=>{
        console.log('点击了')
    },1000);
}
``````

#### 验证是否为图片

``````js
import {checkFileIsPhoto} from 'js-methods-store';
const file = document.querySelector("#file").files[0];
checkFileIsPhoto(file) //返回true 或者  false
``````

#### axios请求封装

``````js
/**
  原生js写法
**/
var cancelToken = '';
var getToken = createAxiosCancelToken();
document.querySelector("#requestAxiosBtn").onclick = async function () {
    if (window.cancelToken) {
        window.cancelToken();
    }
    const result = await axiostGet.call(
        window,
        'https://shaoyuhong.cn/lx104.php',
        { page: 100 },
        'cancelToken',
        getToken
    );
    this.nextElementSibling.innerText = JSON.stringify(result.data);
}
/**
  vue写法
**/
import { createAxiosCancelToken,axiosGet,axiosPost } from 'js-methods-store';
new Vue({
     data(){
         cancelToken:null,
         getToken:''
     },
    created(){
      this.getToken = createAxiosCancelToken();
      this.getData();  
    },
    methods:{
        async getData(){
            if (this.cancelToken) {
       			 this.cancelToken();
   				 }
   			 const result = await axiostGet.call(
    		    this, 								//修改this指针
      		   'https://shaoyuhong.cn/lx104.php',   //url
      		   { page: 100 },						// 请求参数  get与post都为一个对象
        	   'cancelToken',						// 取消token的存放函数
       		    getToken							// 创建取消token的函数
   			 );
    		
        }
    }
})
``````



### 其它

工作原因，刚刚开始总结封装，后续会慢慢增长功能中

如果你有好的建议可以与我email->1045749725@qq.com

