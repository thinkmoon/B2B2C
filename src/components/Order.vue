<template>
  <div>
    <Search></Search>
    <GoodsListNav></GoodsListNav>
    <div class="goods-list-container">
      <Alert show-icon class="tips-box">
        小提示
        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
        <template slot="desc">请点击商品前的选择框，选择购物车中的商品，点击付款即可。</template>
      </Alert>
      <Table border ref="selection" :columns="columns" :data="orderInfo" size="large" @on-selection-change="select" no-data-text="您的购物车没有商品，请先添加商品到购物车再点击购买"></Table>
      <div class="address-container">
        <h3>收货人信息</h3>
        <div class="address-box">
          <div class="address-check">
            <div class="address-check-name">
              <span><Icon type="ios-checkmark-outline"></Icon> {{checkAddress.name}}</span>
            </div>
            <div class="address-detail">
              <p>{{checkAddress.address}}</p>
            </div>
          </div>
          <Collapse>
            <Panel>
                选择地址
                <p slot="content">
                  <RadioGroup vertical size="large" @on-change="changeAddress">
                    <Radio :label="item.id" v-for="(item, index) in addressData" :key="index">
                      <span>{{item.receiver}} {{item.province}} {{item.city}} {{item.address}} {{item.mobile}} {{item.postalcode}}</span>
                    </Radio>
                  </RadioGroup>
                </p>
            </Panel>
          </Collapse>
        </div>
      </div>
      <div class="remarks-container">
        <h3>备注</h3>
        <i-input v-model="remarks" size="large" placeholder="在这里填写备注信息" class="remarks-input"></i-input>
      </div>
      <div class="invoices-container">
        <h3>发票信息</h3>
        <p>该商品不支持开发票</p>
      </div>
      <div class="pay-container">
        <div class="pay-box">
          <p><span>提交订单应付总额：</span> <span class="money"><Icon type="social-yen"></Icon> {{totalPrice.toFixed(2)}}</span></p>
          <div class="pay-btn">
            <Button type="error" @click="payAction" size="large">支付订单</Button>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Search from '@/components/Search';
import GoodsListNav from '@/components/nav/GoodsListNav';
import Footer from '@/components/footer/Footer';
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
import { showOrder, pay, getOrderInfo, getUserConsignee } from '../api/index';
export default {
  name: 'Order',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  created () {
    this.loadCheckShoppingCart();
  },
  mounted () {
    let orderId = this.$route.query.orderId;
    if (orderId) {
      getOrderInfo({order_no: orderId}, this.userInfo.token).then(
        res => {
          this.orderInfo = res.data.order_goods;
        }
      );
      getUserConsignee({user_id: this.userInfo.user_id}, this.userInfo.token).then(
        res => {
          this.addressData = res.data;
        }
      );
    } else {
      setTimeout(() => {
        showOrder({user_id: this.userInfo.user_id, goods: JSON.stringify(this.ShoppingCartCheck.goodsList)}, this.userInfo.token).then(
          res => {
            if (res.code === 1) {
              this.addressData = res.data.user_consignee;
              this.orderInfo = res.data.order_info;
            }
          }
        );
      }, 500);
    }
  },
  data () {
    return {
      addressData: [],
      orderInfo: [],
      columns: [
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
          width: 108,
          key: 'goods_price',
          align: 'center'
        },
        {
          title: '评价状态',
          width: 108,
          key: 'goods_price',
          align: 'center'
        }
      ],
      checkAddress: {
        id: '',
        name: '未选择',
        address: '请选择地址'
      },
      remarks: ''
    };
  },
  computed: {
    ...mapState(['userInfo', 'ShoppingCartCheck']),
    totalPrice () {
      let price = 0;
      this.orderInfo.forEach(item => {
        price += item.goods_price * item.goods_num;
      });
      return price;
    }
  },
  methods: {
    ...mapActions(['loadAddress', 'loadCheckShoppingCart']),
    select (selection, row) {
      console.log(selection);
      this.goodsCheckList = selection;
    },
    changeAddress (data) {
      const father = this;
      this.addressData.forEach(item => {
        if (item.id === data) {
          father.checkAddress.id = item.id;
          father.checkAddress.name = item.receiver;
          father.checkAddress.address = `${item.receiver} ${item.province} ${item.city} ${item.address} ${item.mobile} ${item.zip}`;
        }
      });
    },
    payAction () {
      pay(
        {
          user_id: this.userInfo.user_id,
          order_no: this.orderInfo[0].order_no,
          consignee_id: this.checkAddress.id,
          remark: this.remarks,
          shipping_method: 0,
          payment_method: 0
        },
        this.userInfo.token
      ).then(
        res => {
          if (res.code === 1) {
            this.$Message.success('支付成功');
            this.$router.push({path: '/home'});
          }
        }
      );
    }
  },
  components: {
    Search,
    GoodsListNav,
    Footer
  },
  store
};
</script>

<style scoped>
.goods-list-container {
  margin: 15px auto;
  width: 80%;
}
.tips-box {
  margin-bottom: 15px;
}
.address-container {
  margin-top: 15px;
}
.address-box {
  margin-top: 15px;
  padding: 15px;
  border: 1px #ccc dotted;
}
.address-check {
  margin: 15px 0px;
  height: 36px;
  display: flex;
  align-items: center;
}
.address-check-name {
  width: 120px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #ccc;
}
.address-check-name span {
  width: 120px;
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  background-color: #f90013;
}
.address-detail {
  padding-left: 15px;
  font-size: 14px;
  color: #999999;
}
.remarks-container {
  margin: 15px 0px;
}
.remarks-input {
  margin-top: 15px;
}
.invoices-container p{
  font-size: 12px;
  line-height: 30px;
  color: #999;
}
.pay-container {
  margin: 15px;
  display: flex;
  justify-content: flex-end;
}
.pay-box {
  font-size: 18px;
  font-weight: bolder;
  color: #495060;
}
.money {
  font-size: 26px;
  color: #f90013;
}
.pay-btn {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
}
</style>
