<template>
  <div>
    <Table border :columns="columns" :data="orderInfo.data" size="large" no-data-text="你还有订单，快点去购物吧"></Table>
    <div class="page-size">
      <Page :total="100" show-sizer></Page>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { getOrderLists } from '../../api/index';
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
    ...mapMutations(['SET_ORDERINFO'])
  },
  data () {
    return {
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
            let status = '默认';
            if (params.row.order_status === 0) {
              status = '未支付';
            }
            return h('span', status);
          },
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
              }, '支付'),
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
</style>
