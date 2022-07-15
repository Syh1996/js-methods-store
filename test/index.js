/*
 * @Description: file content
 * @Author: yuhongshao
 * @Date: 2022-07-14 17:54:55
 * @email: yuhongshao@tencent.com
 * @LastEditTime: 2022-07-15 09:49:49
 */
import { requestGet } from '../methods/axios';
document.querySelector("#requestAxiosBtn").onclick=async function(){
     const result = await requestGet('https://shaoyuhong.cn/lx104.php',{page:100});
     console.log(result);
     console.log( this,this.nextElementSibling);
     this.nextElementSibling.innerText = JSON.stringify(result.data);
}