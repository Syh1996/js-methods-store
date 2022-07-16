import axios from 'axios';
const instance = axios.create({
    timeout: 30000,
    
  });
const axiostGet = async (url,data)=>{
     const result = await instance.get(url,{
         params:data
     });
     return result;
}

const axiosPost = async (url,data)=>{
    const result = await instance.get(url,data);
    return result;
}

export {
    axiostGet,
    axiosPost
}