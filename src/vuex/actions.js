import { getFlagGoods, getSowing, getShopping } from '../api/index';
// 获取秒杀数据
export const loadSeckillsInfo = ({ commit }) => {
  return new Promise((resolve, reject) => {
    getFlagGoods({flag: 'recommend'}).then(
      res => {
        if (res.code === 1) {
          const date = new Date();
          const hours = date.getHours();
          const minute = date.getMinutes();
          const seconds = date.getSeconds();
          console.log([hours, minute, seconds]);
          // 距离开始秒杀时间
          const deadline = {
            hours: 1,
            minute: 38,
            seconds: 36
          };
          commit('SET_SECKILLS_INFO', [res.data, deadline]);
          resolve(true);
        }
      }
    );
  });
};

// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    getSowing().then(
      res => {
        if (res.code === 1) {
          commit('SET_CAROUSELITEMS_INFO', res.data);
          resolve(true);
        }
      }
    );
  });
};

// 加载电脑专栏数据
export const loadNew = ({ commit }) => {
  return new Promise((resolve, reject) => {
    getFlagGoods({flag: 'new'}).then(
      res => {
        if (res.code === 1) {
          commit('SET_NEW_INFO', res.data);
          resolve(true);
        }
      }
    );
  });
};

export const loadRecommend = ({ commit }) => {
  return new Promise((resolve, reject) => {
    getFlagGoods({flag: 'recommend'}).then(
      res => {
        if (res.code === 1) {
          commit('SET_RECOMMEND_INFO', res.data);
          resolve(true);
        }
      }
    );
  });
};

export const loadAddress = ({ commit }, data) => {
  commit('SET_USER_ADDRESS', data);
};
// 添加购物车
export const loadShoppingCart = ({ commit }, data, token) => {
  return new Promise((resolve, reject) => {
    getShopping(data, token).then(
      res => {
        if (res.code === 1) {
          commit('SET_SHOPPING_CART', res.data);
          resolve(true);
        }
      }
    );
  });
};

// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    localStorage.setItem('loginInfo', JSON.stringify(data));
    commit('SET_USER_LOGIN_INFO', data);
    resolve(true);
    return true;
  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  localStorage.removeItem('shoppingCart');
  localStorage.removeItem('CheckShoppingCart');
  commit('SET_USER_LOGIN_INFO', {});
  commit('SET_SHOPPING_CART', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    let userArr = JSON.parse(user);
    console.log(userArr);
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
};

export const addCheckShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    if (data) {
      localStorage.setItem('CheckShoppingCart', JSON.stringify(data));
      commit('SET_SHOPPING_CHECK', data);
    }
    resolve(true);
    return true;
  });
};
export const loadCheckShoppingCart = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const CheckShoppingCart = localStorage.getItem('CheckShoppingCart');
    if (CheckShoppingCart) {
      commit('SET_SHOPPING_CHECK', JSON.parse(CheckShoppingCart));
      resolve(true);
    }
  });
};
export const removeCheckShoppingCart = ({ commit }) => {
  return new Promise((resolve, reject) => {
    localStorage.removeItem('shoppingCart');
    localStorage.removeItem('CheckShoppingCart');
    commit('SET_SHOPPING_CART', {});
  });
};
