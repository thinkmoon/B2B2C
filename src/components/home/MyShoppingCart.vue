<template>
  <div>
    <Table border ref="selection" :columns="columns" @on-selection-change="select" :data="shoppingCart ? shoppingCart : []" size="large" no-data-text="您的购物车没有商品，请先添加商品到购物车再点击购买"></Table>
    <div class="go-to">
      <Button @click="goTo" type="primary">去付款</Button>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
import { getShopping, deleteShopping } from '../../api/index';
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
          title: '价格(￥)',
          width: 98,
          key: 'goods_amount',
          align: 'center'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index);
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index);
                  }
                }
              }, '删除')
            ]);
          }
        }
      ]
    };
  },
  mounted () {
    getShopping({user_id: this.userInfo.user_id}, this.userInfo.token).then(
      res => {
        this.addShoppingCart(res.data);
      }
    );
  },
  computed: {
    ...mapState(['shoppingCart', 'userInfo', 'shoppingCartCheck'])
  },
  methods: {
    ...mapActions(['addShoppingCart', 'addCheckShoppingCart']),
    select (selection, row) {
      let data = {};
      data.goodsList = selection;
      this.addCheckShoppingCart(data);
    },
    goTo () {
      this.$router.push('/order');
    },
    show (index) {
      this.$Modal.info({
        title: '商品细节',
        content: `<img style="display: inline-block; width: 85%; height: 85%" src="${this.shoppingCart[index].goods_image}" /><br /> <h3>商品名称：${this.shoppingCart[index].goods_name}</h3><h3>商品描述：${this.shoppingCart[index].goods_content}</h3><h3>用户价格：${this.shoppingCart[index].goods_price}</h3>`
      });
    },
    remove (index) {
      deleteShopping({shop_id: this.shoppingCart[index].id, user_id: this.userInfo.id}, this.userInfo.token).then(
        res => {
          if (res.code === 1) {
            this.$Message.success('删除成功');
            getShopping({user_id: this.userInfo.user_id}, this.userInfo.token).then(
              res => {
                this.addShoppingCart(res.data);
              }
            );
          }
        }
      );
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
