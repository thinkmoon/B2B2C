<template>
  <div class="shop-box" >
    <div class="shop-container">
      <div class="shop-title">
        <div class="shop-title-icon">
          <Icon type="fireball"></Icon>
          <i class="fa fa-fire"></i>
        </div>
        <div class="shop-title-content" >
          <img class="avatar" :src="shopIntro.shop_info.avatar" />
          <router-link :to="{path:'/merchant',query:{adminId:shopIntro.shop_info.admin_id}}"><font size="69px" color="#2b85e4">{{ shopIntro.shop_info.nickname }}</font></router-link><span style="font-size:24px;">---------{{ shopIntro.shop_info.shop_content }}</span>
        </div>
      </div>
      <!-- <div class="shop-another-item">
        <div class="shop-another-item-detail" v-for="(item, index) in shopIntro.shop_goods" :key="index">
          <div class="shop-another-item-img">
            <img :src="item.goods_image" alt="">
          </div>
          <div class="shop-anoter-item-intro">
            <p>{{ item.goods_name.substring(0, 10) }}</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState } from 'vuex';
import { getGoodsInfo, getShopGoods, getShopGoodsLists } from '../../api/index';
export default {
  name: 'ShopHeader',
  computed: {
    ...mapState(['userInfo', 'adminId']),
    backImage () {
      let b = `background-image: url("${this.shopIntro.shop_info.shop_image}")`;
      return b;
    }
  },
  mounted () {
    if (this.$route.query.adminId) {
      getShopGoodsLists({admin_id: this.$route.query.adminId}).then(
        res => {
          this.shopIntro = res.data;
        }
      );
    }
    this.id = this.$route.query.id;
    getGoodsInfo({goods_id: this.id}).then(
      res => {
        const data = res.data;
        console.log('test', data);
        getShopGoods({admin_id: data.admin_id}).then(
          res => {
            if (res.code !== 1) {
              this.$Message.error(res.msg);
            } else {
              this.shopIntro = res.data;
              console.log(this.shopIntro);
            }
          }
        );
      }
    );
  },
  data () {
    return {
      shopIntro: {
        shop_goods: [
          {
            admin_id: 1,
            goods_image: 'http://img.bennyweb.top/uploads/20181023/Fhci4P204XRb_fSof9AJK4W6PRmP.jpg',
            goods_name: '商品1',
            id: 3
          }
        ],
        shop_info: {
          nickname: '商品出差',
          avatar: '',
          admin_id: 1,
          create_time: 0,
          id: 1,
          shop_content: '商铺描述',
          shop_image: 'http://img.bennyweb.top/uploads/20181025/FsSLE1M8mY4SFQNLlgluoEeCEKoW.png',
          shop_intro: '商铺简介',
          shop_mobile: 1366666778,
          shop_no: '001',
          update_time: 0
        }
      }
    };
  },
  store
};
</script>

<style scoped>
/* 店铺介绍 */
.shop-box {
  width: 100%;
  height: 120px;
  background-color: #484848;
}
.avatar{
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.shop-container {
  width: 80%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.shop-title {
  display: flex;
  flex-direction: row;
}

.shop-title-icon {
  font-size: 46px;
}

.shop-title-content {
  padding-top: 8px;
  margin-left: 15px;
}

.shop-title-content p {
  line-height: 26px;
  font-size: 20px;
}

.shop-title-content a {
  color: #fff;
}

.shop-another-item {
  display: flex;
  flex-direction: row;
}

.shop-another-item-detail {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
}

.shop-another-item-img {
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
}

.shop-another-item-img img {
  width: 80px;
}

.shop-anoter-item-intro {
  margin-left: 15px;
}
</style>
