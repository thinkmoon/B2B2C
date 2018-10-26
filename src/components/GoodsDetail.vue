<template>
  <div>
    <Search></Search>
    <ShopHeader></ShopHeader>
    <div style="height:100px" :style="backImage"></div>
    <div class="shop-item-path">
      <div class="shop-nav-container">
        <Breadcrumb>
          <BreadcrumbItem to="/">首页</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
    <!-- 商品信息展示 -->
    <ShowGoods></ShowGoods>
    <!-- 商品详细展示 -->
    <ShowGoodsDetail></ShowGoodsDetail>
    <Footer></Footer>
    <Spin size="large" fix v-if="isLoading"></Spin>
  </div>
</template>

<script>
import Search from '@/components/Search';
import GoodsDetailNav from '@/components/nav/GoodsDetailNav';
import ShopHeader from '@/components/header/ShopHeader';
import Footer from '@/components/footer/Footer';
import ShowGoods from '@/components/goodsDetail/ShowGoods';
import ShowGoodsDetail from '@/components/goodsDetail/ShowGoodsDetail';
import store from '@/vuex/store';
import { mapState, mapMutations } from 'vuex';
import { getGoodsInfo, getShopGoods } from '../api/index';
export default {
  name: 'GoodsDetail',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  created () {
    this.id = this.$route.query.id;
    getGoodsInfo({goods_id: this.id}).then(
      res => {
        const data = res.data;
        console.log(data);
        this.SET_GOODS_INFO(data);
        this.SET_ADMINID(this.goodsInfo.admin_id);
        getShopGoods({admin_id: this.goodsInfo.admin_id}).then(
          res => {
            if (res.code !== 1) {
              this.$Message.error(res.msg);
            } else {
              this.shopIntro = res.data;
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
          nickname: '',
          avatar: '',
          admin_id: 1,
          create_time: 0,
          id: 1,
          shop_content: '商铺描述',
          shop_image: 'http://img.bennyweb.top/shop_image.jpg',
          shop_intro: '商铺简介',
          shop_mobile: 1366666778,
          shop_no: '001',
          update_time: 0
        }
      },
      id: 0,
      tagsColor: [ 'blue', 'green', 'red', 'yellow' ]
    };
  },
  methods: {
    ...mapMutations(['SET_GOODS_INFO', 'SET_ADMINID'])
  },
  computed: {
    ...mapState(['goodsInfo', 'isLoading', 'adminId']),
    backImage () {
      let b = `background-image: url("${this.shopIntro.shop_info.shop_image}")`;
      return b;
    }
  },
  components: {
    Search,
    ShopHeader,
    GoodsDetailNav,
    ShowGoods,
    ShowGoodsDetail,
    Footer
  },
  store
};
</script>

<style scoped>
.shop-item-path {
  height: 38px;
  background-color: rgb(236, 235, 235);
  line-height: 38px;
  color: #2c2c2c;
}
.shop-nav-container {
  margin: 0px auto;
  width: 80%;
}
</style>
