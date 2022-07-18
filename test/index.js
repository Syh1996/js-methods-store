import { axiostGet, createAxiosCancelToken ,axoisSetConfig} from '../methods/axios';
import { formatterDate } from '../methods/date';
import { debound, throttle, imgToBase64, urlGetArgs } from '../methods';

var cancelToken = '';
var getToken = createAxiosCancelToken();
window.axoisResponse = (res)=>{
    if(res.status==200){
        console.log('请求结束，响应数据')
    }
}
document.querySelector("#initAxios").onclick= function(){
   const config = {
       baseURL:'https://shaoyuhong.cn/',
      /*  headers:{
        common:{
            Authorization:'shaoyuhong_token',
            copyRight:'2022'
        }
       }, */
       post:{
           'Content-Type':'application/x-www-form-urlencoded'
       }
   }
   axoisSetConfig(config)
}

document.querySelector("#initAxios2").onclick= function(){
    const config = {
        baseURL:'https://yuhongshao.cn/',
        headers:{
         common:{
             Authorization:'shaoyuhong_token',
             copyRight:'2023'
         }
        },
        post:{
            'Content-Type':'application/x-www-form-urlencoded'
        }
    }
    axoisSetConfig(config)
 }

document.querySelector("#requestAxiosBtn").onclick = async function () {
    if (window.cancelToken) {
        window.cancelToken();
    }
    const result = await axiostGet.call(
        window,
        'lx104.php',
        { page: 100 },
        'cancelToken',
        getToken
    );
    this.nextElementSibling.innerText = JSON.stringify(result.data);
}

document.querySelector("#formatDate").onclick = async function () {
    console.log(formatterDate(Date(), 'mm/dd'));
    this.nextElementSibling.innerText = formatterDate(Date(), 'yyyy年mm月dd hh小时ii分ss秒', false);
}


document.querySelector("#debound-btn").onclick = () => { debound(deboundClick) };
function deboundClick() {
    setTimeout(() => {
        console.log('点击了')
    }, 1000);
}

document.querySelector("#thorttle-btn").onclick = () => { throttle(throttleClick) };
function throttleClick() {
    setTimeout(() => {
        console.log('点击了')
    }, 1000);
}

document.querySelector("#base64").onclick = function () {
    const file = document.querySelector("#image").files[0];
    console.log(file);
    imgToBase64(file).then(res => {
        console.log(res);

    });
}
document.querySelector("#geturl").onclick = function () {
   console.log( urlGetArgs('www.baidu.com?name=baidu&age=22&address=北京'))
}
