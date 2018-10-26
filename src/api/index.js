import http from './public';
const baseUrl = '/api';
// const baseUrl = '//b2b2c.bennyweb.top/api';
// -------------- USER ---------------------n
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
// 删除购物车上坪
export const deleteShopping = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/deleteShopping`, params, token);
};
// 添加用户信息
export const addUserConsignee = (params, token) => {
  return http.fetchPost(`${baseUrl}/user/addUserConsignee`, params, token);
};
// 添加购物车
export const addShopping = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/addShopping`, params, token);
};
// 删除收货信息
export const delUserConsignee = (params, token) => {
  return http.fetchPost(`${baseUrl}/user/delUserConsignee`, params, token);
};
// 修改收货信息
export const editUserConsignee = (params, token) => {
  return http.fetchPost(`${baseUrl}/user/editUserConsignee`, params, token);
};
// 修改用户信息
export const editProfile = (params, token) => {
  return http.fetchPost(`${baseUrl}/user/profile`, params, token);
};
// 用户反馈
export const addFeedback = (params, token) => {
  return http.fetchPost(`${baseUrl}/user/addFeedback`, params, token);
};
// 重置密码
export const resetpwd = (params, token) => {
  return http.fetchPost(`${baseUrl}/user/resetpwd`, params, token);
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
// 获取商品列表。根据热门，新品， 或推荐
export const getFlagGoods = (params) => {
  return http.fetchPost(`${baseUrl}/goods/getFlagGoods`, params);
};
// 获取轮播图
export const getSowing = (params) => {
  return http.fetchPost(`${baseUrl}/advertisement/getSowing`, params);
};
// 获取轮播图
export const searchGoods = (params) => {
  return http.fetchPost(`${baseUrl}/goods/searchGoods`, params);
};
// 生成订单
export const showOrder = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/showOrder`, params, token);
};
// 支付订单
export const pay = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/pay`, params, token);
};
// 获取订单
export const getOrderLists = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/getOrderLists`, params, token);
};
// 获取商品广告图
export const getAdPictures = (params, token) => {
  return http.fetchPost(`${baseUrl}/advertisement/getAdPictures`, params, token);
};
// 获取订单商品
export const getOrderInfo = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/getOrderInfo`, params, token);
};
// 获取订单商品
export const refund = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/refund`, params, token);
};
// 确认收货
export const confirmOrder = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/confirmOrder`, params, token);
};
// 评价
export const evaluate = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/evaluate`, params, token);
};
// 获取评价
export const getGoodsEvaluate = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/getGoodsEvaluate`, params, token);
};
// 店铺注册
export const registerShop = (params, token) => {
  return http.fetchPost(`${baseUrl}/shop/register`, params, token);
};
// 获取订单物流信息
export const getOrderExpress = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/getOrderExpress`, params, token);
};
// 获取商品商铺信息
export const getShopGoods = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/getShopGoods`, params, token);
};
// 获取商铺商品
export const getShopGoodsLists = (params, token) => {
  return http.fetchPost(`${baseUrl}/goods/getShopGoodsLists`, params, token);
};
