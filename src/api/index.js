import http from './public';
const baseUrl = '/api';
// -------------- USER ---------------------
// 注册账号
export const register = (params) => {
  return http.fetchPost(`${baseUrl}/user/register`, params);
};
// 登录账号
export const login = (params) => {
  return http.fetchPost(`${baseUrl}/user/login`, params);
};
// sms
export const sendSMS = (params) => {
  return http.fetchPost(`${baseUrl}/sms/send`, params);
};
// 查询用户收获地址
export const getUserConsignee = (params, token) => {
  return http.fetchPost(`${baseUrl}/user/getUserConsignee`, params, token);
};
// 添加用户信息
export const addUserConsignee = (params, token) => {
  return http.fetchPost(`${baseUrl}/user/addUserConsignee`, params, token);
};
// 添加购物车
export const addShopping = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/addShopping`, params, token);
};
// -------------- Good ------------------
// 获取大分类
export const getType = (params) => {
  return http.fetchPost(`${baseUrl}/Category/getType`, params);
};
// 获取分类
export const getCategory = (params) => {
  return http.fetchPost(`${baseUrl}/category/getCategory`, params);
};

// 获取某一分类
export const getCateGoods = (params) => {
  return http.fetchPost(`${baseUrl}/goods/getCateGoods`, params);
};
// 获取商品
export const getGoodsInfo = (params) => {
  return http.fetchPost(`${baseUrl}/goods/getGoodsInfo`, params);
};
// 查看购物车
export const getShopping = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/getShopping`, params, token);
};
