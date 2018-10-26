import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adminId: 1,
    isLoading: false, // 是否展示loading动画
    orderBy: 'sale', // 根据什么字段排序
    orderInfo: [],
    goodsInfo: { },
    userInfo: { // 用户信息
      username: ''
    },
    signUpStep: 0, // 登陆步骤
    marketing: { // 营销
      CarouselItems: [], // 轮播图
      activity: [] // 活动
    },
    seckills: { // 秒杀
      deadline: {
        hours: 0,
        minute: 0,
        seconds: 0
      },
      goodsList: []
    },
    New: {
      data: []
    }, // 新品专栏
    Recommend: {
      data: []
    },
    asItems: [], // 广告
    goodsList: [], // 商品列表
    shoppingCart: [], // 购物车
    ShoppingCartCheck: []
  },
  getters,
  actions,
  mutations
});
