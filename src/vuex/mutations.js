import { getUserConsignee } from '../api/index';
// 设置注册步骤
export const LOAD_ADDRESS = (state, step) => {
  getUserConsignee({id: state.userInfo.id, token: state.userInfo.token}).then(
    res => {
      state.address = res.data;
    }
  );
};
// 设置注册步骤
export const SET_SIGN_UP_SETP = (state, step) => {
  state.signUpStep = step;
};
// 设置电话号码
export const SET_PHONE = (state, data) => {
  state.phone = data;
};
// 设置用户登录信息
export const SET_USER_LOGIN_INFO = (state, data) => {
  state.userInfo = data;
};

// 设置加载状态
export const SET_LOAD_STATUS = (state, status) => {
  state.isLoading = status;
};

// 设置秒杀商品
export const SET_SECKILLS_INFO = (state, seckills) => {
  state.seckills.goodsList = seckills[0];
  state.seckills.deadline = seckills[1];
};

// 设置轮播(营销)图
export const SET_CAROUSELITEMS_INFO = (state, data) => {
  state.marketing.CarouselItems = data;
  state.marketing.activity = data;
};

// 设置新品
export const SET_NEW_INFO = (state, data) => {
  state.New = data;
};

// 减少秒杀时间
export const REDUCE_SECKILLS_TIME = state => {
  state.seckills.deadline.seconds--;
  if (state.seckills.deadline.seconds === -1) {
    state.seckills.deadline.seconds = 59;
    state.seckills.deadline.minute--;
    if (state.seckills.deadline.minute === -1) {
      state.seckills.deadline.minute = 59;
      state.seckills.deadline.hour--;
    }
  }
};

// 设置商品列表(搜索)
export const SET_GOODS_LIST = (state, data) => {
  state.goodsList = data.goodsList;
  state.asItems = data.asItems;
};

// 设置商品列表排序
export const SET_GOODS_ORDER_BY = (state, data) => {
  state.orderBy = data;
};

// 设置商品详细信息
export const SET_GOODS_INFO = (state, data) => {
  state.goodsInfo = data;
};

// 添加购物车
export const ADD_SHOPPING_CART = (state, data) => {
  const item = {
    goods_id: data.goods_id,
    count: data.count,
    img: data.package.img,
    package: data.package.intro,
    price: data.package.price,
    title: data.title
  };
  state.shoppingCart.push(item);
  state.newShoppingCart = data;
};

// 设置购物车信息
export const SET_SHOPPING_CART = (state, data) => {
  state.shoppingCart = data;
};

// 设置推荐信息
export const SET_RECOMMEND_INFO = (state, data) => {
  state.Recommend = data;
};

// 设置收获地址
export const SET_USER_ADDRESS = (state, data) => {
  state.address = data;
};

// 设置收获地址
export const GET_USER_ADDRESS = (state, data) => {
  return state.address;
};
// 设置待支付订单商品
export const SET_SHOPPING_CHECK = (state, data) => {
  state.ShoppingCartCheck = data;
};
export const SET_ORDERINFO = (state, data) => {
  state.orderInfo = data;
};
