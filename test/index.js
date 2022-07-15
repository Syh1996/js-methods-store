import { requestGet } from '../methods/axios';
import { formatterDate } from '../methods/date';
import { debound, throttle} from '../methods';
document.querySelector("#requestAxiosBtn").onclick=async function(){
     const result = await requestGet('https://shaoyuhong.cn/lx104.php',{page:100});
     this.nextElementSibling.innerText = JSON.stringify(result.data);
}

document.querySelector("#formatDate").onclick=async function(){
    console.log(formatterDate(Date(),'mm/dd'));
    this.nextElementSibling.innerText = formatterDate(Date(),'yyyy年mm月dd hh小时ii分ss秒',false);
}


document.querySelector("#debound-btn").onclick = ()=>{debound(deboundClick)};
function deboundClick(){
    setTimeout(()=>{
        console.log('点击了')
    },1000);
}

document.querySelector("#thorttle-btn").onclick = ()=>{throttle(throttleClick)};
function throttleClick(){
    setTimeout(()=>{
        console.log('点击了')
    },1000);
}