<template>
  <div>
    <Table border ref="selection" :columns="columns" :data="shoppingCart" size="large" no-data-text="您的购物车没有商品，请先添加商品到购物车再点击购买"></Table>
    <div class="go-to">
      <Button @click="goTo" type="primary">去付款</Button>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
import { getShopping } from '../../api/index';
export default {
  name: 'MyShoppingCart',
  data () {
    return {
      columns: [
        {
          type: 'selection',
          width: 58,
          align: 'center'
        },
        {
          title: '图片',
          key: 'img',
          width: 86,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.goods_image,
                  class: 'img',
                  style: 'display: inline-block;width: 70%;height: 70%;'
                }
              })
            ]);
          },
          align: 'center'
        },
        {
          title: '标题',
          key: 'goods_name',
          align: 'center'
        },
        {
          title: '数量',
          key: 'goods_num',
          width: 68,
          align: 'center'
        },
        {
          title: '价格',
          width: 68,
          key: 'goods_amount',
          align: 'center'
        }
      ]
    };
  },
  created () {
    getShopping({user_id: this.userInfo.user_id}, {token: this.userInfo.token}).then(
      res => {
        this.loadShoppingCart(res.data);
      }
    );
  },
  computed: {
    ...mapState(['shoppingCart', 'userInfo'])
  },
  methods: {
    ...mapActions(['loadShoppingCart']),
    goTo () {
      this.$router.push('/order');
    }
  },
  store
};
</script>

<style scoped>
.go-to {
  margin: 15px;
  display: flex;
  justify-content: flex-end;
}
</style>
