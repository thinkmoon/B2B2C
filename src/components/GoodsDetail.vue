<template>
  <div>
    <Sreach></Sreach>
    <ShopHeader></ShopHeader>
    <GoodsDetailNav></GoodsDetailNav>
    <div class="shop-item-path">
      <div class="shop-nav-container">
        <Breadcrumb>
          <BreadcrumbItem to="/">首页</BreadcrumbItem>
          <BreadcrumbItem to="/goodsList">手机壳</BreadcrumbItem>
          <BreadcrumbItem>手机保护套</BreadcrumbItem>
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
import Sreach from '@/components/Sreach';
import GoodsDetailNav from '@/components/nav/GoodsDetailNav';
import ShopHeader from '@/components/header/ShopHeader';
import Footer from '@/components/footer/Footer';
import ShowGoods from '@/components/goodsDetail/ShowGoods';
import ShowGoodsDetail from '@/components/goodsDetail/ShowGoodsDetail';
import store from '@/vuex/store';
import { mapState, mapActions, mapMutations } from 'vuex';
import { getGoodsInfo } from '../api/index';
export default {
  name: 'GoodsDetail',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  created () {
    this.id = this.$route.query.id;
    // this.loadGoodsInfo(this.id);
    getGoodsInfo({goods_id: this.id}).then(
      res => {
        const data = res.data;
        console.log(data);
        this.SET_GOODS_INFO(data);
      }
    );
  },
  data () {
    return {
      id: 0,
      tagsColor: [ 'blue', 'green', 'red', 'yellow' ]
    };
  },
  methods: {
    ...mapActions(['loadGoodsInfo']),
    ...mapMutations(['SET_GOODS_INFO'])
  },
  computed: {
    ...mapState(['goodsInfo', 'isLoading'])
  },
  components: {
    Sreach,
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
