<template>
  <div>
    <Table border :columns="columns" :data="orderInfo.data" size="large" no-data-text="你还有订单，快点去购物吧"></Table>
    <div class="page-size">
      <Page :current="orderInfo.current_page" :total="orderInfo.total"></Page>
    </div>
    <Modal v-model="modal" width="630">
      <p slot="header">
          <span>商品详情</span>
      </p>
      <Table border ref="selection" :columns="Datacolumns" :data="orderData.order_goods" size="large"  no-data-text="暂无"></Table>
      <p class="express" v-if="orderData.order_consignee">
        <h2>快递信息</h2>
        <ul style="margin-left: 20px;">
           <li>
             收货地址:
             {{orderData.order_consignee.province}}
             {{orderData.order_consignee.city}}
             {{orderData.order_consignee.area}}
             {{orderData.order_consignee.address}}
            </li>
            <li>收货邮编: {{orderData.order_consignee.zip}}</li>
            <li>收货人: {{orderData.order_consignee.receiver}}</li>
            <li>收货电话: {{orderData.order_consignee.mobile}}</li>
        </ul>
        <router-link :to="{path:'/home/myExpress',query:{orderNo:this.orderId}}"><Button type="success">查看物流信息</Button></router-link>
      </p>
    </Modal>
    <Modal v-model="evaluate" width="630" @on-ok="ok"
        @on-cancel="cancel">
      <p slot="header">
          <span>商品评价</span>
        </p>
      <Form ref="formData" :model="formData" label-position="left" :label-width="60">
        <FormItem label="填写评价">
            <i-input v-model="formData.content" size="large"></i-input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { getOrderLists, refund, confirmOrder, getOrderInfo, evaluate } from '../../api/index';
export default {
  name: 'MyOrder',
  mounted () {
    getOrderLists({user_id: this.userInfo.user_id}, this.userInfo.token).then(
      res => {
        if (res.code === 1) {
          this.SET_ORDERINFO(res.data);
        }
      }
    );
  },
  computed: {
    ...mapState(['userInfo', 'orderInfo'])
  },
  methods: {
    ...mapMutations(['SET_ORDERINFO']),
    ok () {
      evaluate(
        {
          order_no: this.orderId,
          user_id: this.userInfo.user_id,
          goods_id: this.goodsId,
          label: this.formData.content,
          content: this.formData.content
        }
      ).then(
        res => {
          if (res.code === 1) {
            this.$Message.success('评价成功');
            this.modal = false;
            this.evaluate = false;
          } else {
            this.$Message.error(res.msg);
          }
        }
      );
    },
    cancel () {
      this.$Message.info('Clicked cancel');
    },
    goToPay (index) {
      this.$router.push({path: '/order', query: { orderId: this.orderInfo.data[index].order_no }});
    },
    reFound (index) {
      refund({user_id: this.userInfo.user_id, order_no: this.orderInfo.data[index].order_no}).then(
        res => {
          if (res.code !== 1) {
            this.$Message.error(res.msg);
          }
        }
      );
    },
    Confirm (index) {
      confirmOrder({order_no: this.orderInfo.data[index].order_no}, this.userInfo.token).then(
        res => {
          if (res.code !== 1) {
            this.$Message.error(res.msg);
          }
        }
      );
      getOrderLists({user_id: this.userInfo.user_id}, this.userInfo.token).then(
        res => {
          if (res.code === 1) {
            this.SET_ORDERINFO(res.data);
          } else {
            this.$Message.info(res.msg);
          }
        }
      );
    },
    see (index) {
      this.modal = true;
      this.orderId = this.orderInfo.data[index].order_no;
      console.log('orderId', this.orderId);
      getOrderInfo({order_no: this.orderId}).then(
        res => {
          this.orderData = res.data;
        }
      );
    },
    evaluateFunc (index) {
      this.evaluate = true;
      this.goodsId = this.orderData.order_goods[index].goods_id;
      console.log('goodsId', this.goodsId);
    }
  },
  data () {
    return {
      formData: {
        content: ''
      },
      evaluate: false,
      modal: false,
      orderId: '',
      goodsId: '',
      orderData: {
        order_consignee: {
          receiver: '无',
          address: '东莞理工学院',
          area: '天河区',
          city: '广州市',
          create_time: 1540448837,
          id: 10,
          mobile: '17666200123',
          order_no: '201810251427099240',
          province: '无',
          remark: '',
          update_time: 1540448837,
          zip: '521800'
        }
      },
      Datacolumns: [
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
          title: '评价',
          render: (h, params) => {
            if (!params.row.evaluate_status) {
              return h('span', '该订单状态不支持评价(可能您未收货)');
            } else if (params.row.is_evaluate) {
              return h('span', '已评价');
            } else {
              return h('Button', {
                props: {
                  type: 'success',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.evaluateFunc(params.index);
                  }
                }
              }, '评价');
            }
          },
          align: 'center'
        }
      ],
      columns: [
        {
          title: '订单号',
          key: 'order_no',
          width: 180,
          align: 'center'
        },
        {
          title: '备注',
          key: 'remark',
          align: 'center'
        },
        {
          title: '价格',
          width: 98,
          key: 'goods_amount',
          align: 'center'
        },
        {
          title: '快递方式',
          width: 108,
          key: 'remark',
          render: (h, params) => {
            return h('span', '默认');
          },
          align: 'center'
        },
        {
          title: '创建时间',
          width: 120,
          key: 'create_time',
          render: (h, params) => {
            return h('i-time', {props: { time: params.row.create_time }}, params.row.create_time);
          },
          align: 'center'
        },
        {
          title: '状态',
          width: 120,
          key: 'order_status',
          render: (h, params) => {
            let status = '出错了';
            if (params.row.order_status === '0') {
              status = '未支付';
            } else if (params.row.order_status === '1') {
              status = '已支付';
            } else if (params.row.order_status === '2') {
              status = '已确认收货';
            } else if (params.row.order_status === '3') {
              status = '退款成功';
            }
            return h('span', status);
          },
          align: 'center'
        },
        {
          title: '操作',
          key: 'action',
          width: 300,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'success',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.see(params.index);
                  }
                }
              }, '查看'),
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
                    if (params.row.order_status !== '0') {
                      this.$Message.error('该订单您已支付');
                    } else {
                      this.goToPay(params.index);
                    }
                  }
                }
              }, '支付'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    if (params.row.order_status <= 0) {
                      this.$Message.error('该订单您还未支付');
                    } else {
                      this.reFound(params.index);
                    }
                  }
                }
              }, '申请退款'),
              h('Button', {
                props: {
                  type: 'warning',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    if (params.row.order_status <= 0) {
                      this.$Message.error('该订单您还未支付');
                    } else {
                      this.Confirm(params.index);
                    }
                  }
                }
              }, '确认收货')
            ]);
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
.page-size {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.express {
  margin-left: 40px;
  margin-top: 20px;
}
li{
  font-size: medium;
}
</style>
