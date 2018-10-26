<template>
  <div>
    <p>
    <Input v-model="orderNo" @on-enter="searchAction" @on-search="searchAction" search autofocus enter-button placeholder="输入你要搜索的单号" />
    </p>
    <p style="margin-top:30px;">
    <Timeline>
        <TimelineItem color="green">
            <Icon type="ios-trophy" slot="dot"></Icon>
            <span>查看快递信息</span>
        </TimelineItem>
        <TimelineItem style="font-size: 24px" v-for="(item, index) in expressData.order_log" :key="index">
         <Icon type="ios-trophy" slot="dot"></Icon>
          <Time :time="item.create_time"></Time><br />
          派送员: {{item.sender_name}}<br />
          联系电话: {{item.sender_mobile}}<br />
          位置: {{item.address}}<br />
          快递单号: {{item.express_no}}<br />
        </TimelineItem>
    </Timeline>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { getOrderExpress } from '../../api/index';
export default {
  name: 'MyExpress',
  data () {
    return {
      orderNo: 0,
      expressData: {
        order_log: []
      }
    };
  },
  mounted () {
    this.orderNo = this.$route.query.orderNo;
    if (this.orderNo) {
      this.searchAction();
    }
  },
  computed: {
  },
  methods: {
    searchAction () {
      getOrderExpress({order_no: this.orderNo}).then(
        res => {
          if (res.code !== 1) {
            this.$Message.error(res.msg);
          } else {
            this.expressData = res.data;
          }
        }
      );
    }
  },
  store
};
</script>

<style scoped>
</style>
