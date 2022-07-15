/*
 * @Description: file content
 * @Author: yuhongshao
 * @Date: 2022-07-14 09:30:28
 * @email: yuhongshao@tencent.com
 * @LastEditTime: 2022-07-14 17:29:15
 */
/**
 * 去重数组类
 * @param {array} jsonArray 
 */
export const deleteFullJsonArray = jsonArray => {
  const result = (jsonArray || []).reduce((record,cur,index)=>{
      const curToString = (cur && typeof cur === 'object') ? JSON.stringify(cur) : cur;
      if(!record.includes(curToString)){
          record = [...record,curToString];
      }
      return record;
  },[]).map(item=>{
      return JSON.parse(item);
  });
  return result;
}



export const fileName = 'index.js';
