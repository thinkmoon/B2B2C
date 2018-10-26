<template>
  <div>
    <ShopHeader></ShopHeader>
    <div class="goods-container">
      <div class="goods-list">
        <div class="goods-show-info" v-for="(item, index) in Data.shop_goods.data" :key="index">
          <div class="goods-show-img">
            <router-link to="/goodsDetail"><img class="img-box" :src="item.goods_image"/></router-link>
          </div>
          <div class="goods-show-price">
            <span>
              <Icon type="social-yen text-danger"></Icon>
              <span class="seckill-price text-danger">{{item.price}}</span>
            </span>
          </div>
          <div class="goods-show-detail">
            <span>{{item.goods_name}}</span>
          </div>
        </div>
      </div>
      <div class="goods-page">
        <Page :current="Data.shop_goods.current_page" :total="Data.shop_goods.total" show-sizer></Page>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ShopHeader from '@/components/header/ShopHeader';
import Footer from '@/components/footer/Footer';
import store from '@/vuex/store';
import { mapGetters, mapActions } from 'vuex';
import { getShopGoodsLists } from '../api/index';
export default {
  name: 'Merchant',
  created () {
    getShopGoodsLists({admin_id: this.$route.query.adminId}).then(
      res => {
        this.Data = res.data;
      }
    );
  },
  computed: {
    ...mapGetters(['orderGoodsList'])
  },
  methods: {
    ...mapActions(['loadGoodsList'])
  },
  data () {
    return {
      Data: {
        shop_goods: {
          current_page: 1,
          data: [],
          last_page: 1,
          per_page: 10,
          total: 5
        },
        shop_info: {
          admin_id: 1,
          avatar: 'http://img.bennyweb.top/uploads/20181025/FmPe_aNr2Xzn4RwlCfE80j55u_w2.jpg',
          create_time: 1199404800,
          id: 1,
          nickname: '妈咪的花胶',
          shop_content: '妈咪的花胶商铺描述',
          shop_image: 'http://img.bennyweb.top/uploads/20181025/FhZZgn8gBbzY1dF7WOdW5YrSvmFD.jpg',
          shop_intro: '妈咪的花胶商铺简介',
          shop_mobile: 1366666778,
          shop_no: '001',
          status: '1'
        }
      }
    };
  },
  components: {
    ShopHeader,
    Footer
  },
  store
};
</script>

<style scoped>
.img-box{
  width: 200px;
  height: 200px;
}
.text-danger {
  color: #A94442;
}
.seckill-price{
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}
.goods-container {
  margin: 15px auto;
  width: 80%;
}
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods-show-info{
  width: 240px;
  padding: 10px;
  margin: 15px 0px;
  border: 1px solid #fff;
  cursor: pointer;
}
.goods-show-info:hover{
  border: 1px solid #ccc;
  box-shadow: 0px 0px 15px #ccc;
}
.goods-show-price{
  margin-top: 6px;
}
.goods-show-detail{
  font-size: 12px;
  margin: 6px 0px;
}
.goods-show-num{
  font-size: 12px;
  margin-bottom: 6px;
  color: #009688;
}
.goods-show-num span{
  color: #005AA0;
  font-weight: bold;
}
.goods-show-seller{
  font-size: 12px;
  color:#E4393C;
}
.goods-page {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
