/*
 * @Description: file content
 * @Author: yuhongshao
 * @Date: 2022-07-14 17:46:58
 * @email: yuhongshao@tencent.com
 * @LastEditTime: 2022-07-14 17:53:05
 */
import axios from 'axios';
const instance = axios.create({
    timeout: 30000,
    
  });
const requestGet = async (url,data)=>{
     const result = await instance.get(url,{
         params:data
     });
     return result;
}

const requestPost = async (url,data)=>{
    const result = await instance.get(url,data);
    return result;
}

export {
    requestGet,
    requestPost
}