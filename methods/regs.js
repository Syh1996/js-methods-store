/**
 * 常用正则验证
 */

 export const zhReg = /^[u4e00-u9fa5]{1,}$/; //汉字1到多个
 export const engAndNumberReg = /^[A-Za-z0-9]+$/; //英文或者数字1到多个
 export const emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; //email邮箱
 export const telReg = /^[1][3,4,5,7,8][0-9]{9}$/; //手机号
 export const idReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证
 export const blankReg = /^([1-9]{1})(\d{15}|\d{18})$/;//银行号
 export const creditCode= /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/; //统一社会信用代码
 export const money = /^\-?\d+(\.\d+)?$/; //金额 允许负数