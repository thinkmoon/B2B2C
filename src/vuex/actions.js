import { getGoodsInfo } from '../api/index';
// 获取秒杀数据
export const loadSeckillsInfo = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        intro: '【赠小风扇】维他 柠檬茶250ml*32盒 礼品装 整箱',
        img: 'static/img/index/seckill/seckill-item1.jpg',
        price: 71.9,
        realPrice: 89.6
      },
      {
        intro: 'Kindle Paperwhite 全新升级版6英寸护眼非反光电子墨水',
        img: 'static/img/index/seckill/seckill-item2.jpg',
        price: 989.0,
        realPrice: 1299.0
      },
      {
        intro: '粮悦 大吃兄糯米锅巴 安徽特产锅巴糯米原味400g*2盒',
        img: 'static/img/index/seckill/seckill-item3.jpg',
        price: 21.8,
        realPrice: 49.0
      },
      {
        intro: '【京东超市】清风（APP）抽纸 原木纯品金装系列 3层',
        img: 'static/img/index/seckill/seckill-item4.jpg',
        price: 49.9,
        realPrice: 59.0
      },
      {
        intro: 'NIKE耐克 男子休闲鞋 AIR MAX 90 ESSENTIAL 气垫',
        img: 'static/img/index/seckill/seckill-item5.jpg',
        price: 559.9,
        realPrice: 759.9
      }
    ];
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
    commit('SET_SECKILLS_INFO', [data, deadline]);
  });
};

// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'static/img/nav/1.jpg',
        'static/img/nav/2.jpg',
        'static/img/nav/3.jpg',
        'static/img/nav/4.jpg',
        'static/img/nav/5.jpg'
      ],
      activity: [
        'static/img/nav/nav_showimg1.jpg',
        'static/img/nav/nav_showimg2.jpg'
      ]
    };
    commit('SET_CAROUSELITEMS_INFO', data);
  });
};

// 加载电脑专栏数据
export const loadComputer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const computer = {
      title: '电脑数码',
      link: [ '电脑馆', '游戏极品', '装机大师', '职场焕新', '女神频道', '虚拟现实', '二合一平板', '电子教育', '万物周刊' ],
      detail: [
        {
          bigImg: 'static/img/index/computer/item-computer-1.jpg',
          itemFour: [
            {
              title: '电脑馆',
              intro: '笔记本999元限量秒！',
              img: 'static/img/index/computer/item-computer-2.jpg'
            },
            {
              title: '外设装备',
              intro: '1000减618',
              img: 'static/img/index/computer/item-computer-1-3.jpg'
            },
            {
              title: '电脑配件',
              intro: '联合满减最高省618',
              img: 'static/img/index/computer/item-computer-1-4.jpg'
            },
            {
              title: '办公生活',
              intro: '5折神券 精品文具',
              img: 'static/img/index/computer/item-computer-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-1-6.jpg',
            'static/img/index/computer/item-computer-1-7.jpg',
            'static/img/index/computer/item-computer-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/computer/item-computer-2-1.jpg',
          itemFour: [
            {
              title: '平板电脑',
              intro: '爆款平板12期免息',
              img: 'static/img/index/computer/item-computer-2-2.jpg'
            },
            {
              title: '智能酷玩',
              intro: '抢999减666神券',
              img: 'static/img/index/computer/item-computer-2-3.jpg'
            },
            {
              title: '娱乐影音',
              intro: '大牌耳机低至5折',
              img: 'static/img/index/computer/item-computer-2-4.jpg'
            },
            {
              title: '摄影摄像',
              intro: '大牌相机5折抢',
              img: 'static/img/index/computer/item-computer-2-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-2-6.jpg',
            'static/img/index/computer/item-computer-2-7.jpg',
            'static/img/index/computer/item-computer-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', computer);
  });
};

// 加载爱吃专栏数据
export const loadEat = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const eat = {
      title: '爱吃',
      link: [ '休闲零食', '坚果', '牛奶', '饮料冲调', '食用油', '大米', '白酒', '红酒', '烧烤食材', '牛排', '樱桃' ],
      detail: [
        {
          bigImg: 'static/img/index/eat/item-eat-1-1.jpg',
          itemFour: [
            {
              title: '粮油调味',
              intro: '买2免1',
              img: 'static/img/index/eat/item-eat-1-2.jpg'
            },
            {
              title: '饮料冲调',
              intro: '第二件半价',
              img: 'static/img/index/eat/item-eat-1-3.jpg'
            },
            {
              title: '休闲零食',
              intro: '满99减40',
              img: 'static/img/index/eat/item-eat-1-4.jpg'
            },
            {
              title: '中外名酒',
              intro: '满199减100',
              img: 'static/img/index/eat/item-eat-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-1-6.jpg',
            'static/img/index/eat/item-eat-1-7.jpg',
            'static/img/index/eat/item-eat-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/eat/item-eat-2-1.jpg',
          itemFour: [
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-2-6.jpg',
            'static/img/index/eat/item-eat-2-7.jpg',
            'static/img/index/eat/item-eat-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_EAT_INFO', eat);
  });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({ commit }, data) => {
  commit('SET_LOAD_STATUS', true);
  getGoodsInfo(data).then(
    res => {
      const data = res.data;
      console.log(data);
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }
  );
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        asItems: [
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 39.9,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
            num: 3140,
            sale: 9000
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 36.6,
            intro: '狮普 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
            num: 6160,
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 38.6,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
            num: 9160,
            sale: 8800
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 35.6,
            intro: '狮普 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
            num: 6160,
            sale: 7990
          },
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 38.6,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
            num: 9160,
            sale: 7600
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 35.6,
            intro: '狮普 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
            num: 6160,
            sale: 6900
          }
        ],
        goodsList: [
          {
            img: 'static/img/goodsList/item-show-1.jpg',
            price: 36.60,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬壳男女磨砂防摔 火影红(苹',
            remarks: 6160,
            shopName: '元亨利配件专营店',
            sale: 9900
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 28.00,
            intro: '蒙奇奇 苹果6s手机壳磨砂防摔保护套 适用于iphone6/6s/6sPlus/6plus 6/6s 4.7英',
            remarks: 3000,
            shopName: 'monqiqi旗舰店',
            sale: 9600
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 2800,
            shopName: 'BIAZE官方旗舰店',
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 29.90,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9000,
            shopName: '歌乐力手配专营店',
            sale: 8600
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 6160,
            shopName: 'BIAZE官方旗舰店',
            sale: 8560
          },
          {
            img: 'static/img/goodsList/item-show-6.jpg',
            price: 28.00,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9006,
            shopName: '歌乐力手配专营店',
            sale: 8530
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 8666,
            shopName: 'BIAZE官方旗舰店',
            sale: 8360
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 29.90,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 6080,
            shopName: '歌乐力手配专营店',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/item-show-1.jpg',
            price: 36.60,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬壳男女磨砂防摔 火影红(苹',
            remarks: 6160,
            shopName: '元亨利配件专营店',
            sale: 7360
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 28.00,
            intro: '蒙奇奇 苹果6s手机壳磨砂防摔保护套 适用于iphone6/6s/6sPlus/6plus 6/6s 4.7英',
            remarks: 3000,
            shopName: 'monqiqi旗舰店',
            sale: 6960
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 2800,
            shopName: 'BIAZE官方旗舰店',
            sale: 6560
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 29.90,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9000,
            shopName: '歌乐力手配专营店',
            sale: 6360
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 6160,
            shopName: 'BIAZE官方旗舰店',
            sale: 5530
          },
          {
            img: 'static/img/goodsList/item-show-6.jpg',
            price: 28.00,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9006,
            shopName: '歌乐力手配专营店',
            sale: 5560
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 8666,
            shopName: 'BIAZE官方旗舰店',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 29.90,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 6080,
            shopName: '歌乐力手配专营店',
            sale: 3560
          }
        ]
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};

// 获取用户推荐
export const loadRecommend = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      [
        {
          img: 'static/img/otherBuy/1.jpg',
          intro: 'iPhone7/6s/8钢化膜苹果7Plus全屏全覆盖3D抗蓝',
          price: 29.00
        },
        {
          img: 'static/img/otherBuy/2.jpg',
          intro: '苹果数据线 苹果iPhoneX/6s/7plus/8充电线',
          price: 36.00
        },
        {
          img: 'static/img/otherBuy/3.jpg',
          intro: '苹果8/7/6/6s钢化膜 iphone8/7/6s/6钢化玻璃',
          price: 19.00
        },
        {
          img: 'static/img/otherBuy/4.jpg',
          intro: 'iPhone6s/7钢化膜苹果8 Plus手机膜抗蓝光非全屏',
          price: 28.00
        }
      ],
      [
        {
          img: 'static/img/otherBuy/5.jpg',
          intro: '苹果6s手机壳iPhone6s Plus保护壳防摔全',
          price: 28.00
        },
        {
          img: 'static/img/otherBuy/6.jpg',
          intro: 'iPhone7/8手机壳手机套防摔磨砂保护壳星空黑☆全包保护',
          price: 30.00
        },
        {
          img: 'static/img/otherBuy/7.jpg',
          intro: '数据线 适用于苹果iPhone 6s/6plus/7plus/8/X',
          price: 18.00
        },
        {
          img: 'static/img/otherBuy/8.jpg',
          intro: 'iPhone8/7/6S/6钢化膜 苹果8/7/6s/6玻璃膜 手机高',
          price: 15.00
        }
      ]
    ];
    commit('SET_RECOMMEND_INFO', data);
  });
};

export const loadAddress = ({ commit }, data) => {
  commit('SET_USER_ADDRESS', data);
};

export const loadShoppingCart = ({ commit }, data) => {
  localStorage.setItem('shoppingCart', JSON.stringify(data));
  commit('SET_SHOPPING_CART', data);
};

export const loadShoppingCartSync = ({ commit }) => {
  let shoppingCart = localStorage.getItem('shoppingCart');
  if (shoppingCart) {
    commit('SET_SHOPPING_CART', JSON.parse(shoppingCart));
  }
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
  // return new Promise((resolve, reject) => {
  //   if (data.username === 'Gavin' && data.password === '123456') {
  //     localStorage.setItem('loginInfo', JSON.stringify(data));
  //     commit('SET_USER_LOGIN_INFO', data);
  //     resolve(true);
  //     return true;
  //   }
  //   const userArr = localStorage.getItem('users');
  //   console.log(userArr);
  //   if (userArr) {
  //     const users = JSON.parse(userArr);
  //     for (const item of users) {
  //       if (item.username === data.username) {
  //         localStorage.setItem('loginInfo', JSON.stringify(item));
  //         commit('SET_USER_LOGIN_INFO', item);
  //         resolve(true);
  //         break;
  //       }
  //     }
  //   } else {
  //     resolve(false);
  //   }
  // });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
};
