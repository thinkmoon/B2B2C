<template>
  <div>
    <div class="nav-item">
      <ul>
        <li v-for="(item,index) in nav" :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="nav-body">
      <!-- 侧边导航 -->
      <div class="nav-side" ref="navSide">
        <ul>
          <li v-for="(item,index) in Type" :key="index" @mouseenter="showDetail(index)" @mouseleave="hideDetail(index)">
            <span class="nav-side-item">{{item.type_text}}</span>
          </li>
        </ul>
      </div>
      <div class="nav-content">
        <!-- 幻灯片 -->
        <div>
          <Carousel autoplay loop>
              <CarouselItem  v-for="(item, index) in marketing.CarouselItems" :key="index">
                <router-link to="/goodsList">
                  <img style="width: 800px; height: 485px;" :src="item">
                </router-link>
              </CarouselItem>
          </Carousel>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="detail-item-panel panel-1" :duration="{ enter: 100, leave: 100 }" v-show="panel" @mouseenter="showDetail(1)" ref="itemPanel" @mouseleave="hideDetail(1)">
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData.navTags" :key="index">{{item.name}} > </span>
        </div>
        <ul>
          <li v-for="(items, index) in panelData.goodsNav" :key="index" class="detail-item-row" @click="to(items[0].id)">
            <span class="detail-item-title">{{items[0].name}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState } from 'vuex';
import { getCategory, getType } from '../../api/index';
export default {
  name: 'HomeNav',
  data () {
    return {
      Type: [],
      Category: [],
      panel: false,
      nav: [
        '秒杀',
        '特惠',
        '推荐',
        '拼团',
        '热买',
        '一元购',
        '生鲜',
        '全球购',
        '金融'
      ],
      panelData: {
        navTags: [],
        goodsNav: []
      }
    };
  },
  created () {
    getType({type: 'all'}).then(
      res => {
        this.Type = res.data;
      }
    );
  },
  computed: {
    ...mapState(['marketing'])
  },
  methods: {
    showDetail (index) {
      this.panel = true;
      getCategory({type: this.Type[index].type}).then(
        res => {
          this.panelData.navTags = res.data;
          this.panelData.goodsNav = [];
          for (let i = 0; i < res.data.length; i++) {
            this.panelData.goodsNav.push(res.data[i].son);
          }
        }
      );
    },
    // showDetail (index) {
    //   index === 1 ? (this.panel1 = true) : (this.panel2 = true);
    // },
    hideDetail (index) {
      this.panel = false;
    },
    to (aim) {
      this.$router.push({path: '/goodsList', query: { aim: aim }});
    }
  },
  mounted () {
    this.$refs.itemPanel.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel.style.top = this.$refs.navSide.offsetTop + 'px';
  },
  updated () {
    this.$refs.itemPanel.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel.style.top = this.$refs.navSide.offsetTop + 'px';
  },
  store
};
</script>

<style scoped>
.nav-item {
  width: 680px;
  height: 36px;
  margin: 0px auto;
}
.nav-item ul {
  list-style: none;
  margin-left: 15px;
}
.nav-item li {
  float: left;
  font-size: 16px;
  font-weight: bold;

  margin-left: 30px;
}
.nav-item a {
  text-decoration: none;
  color: #555555;
}
.nav-item a:hover {
  color: #d9534f;
}
/*大的导航信息，包含导航，幻灯片等*/
.nav-body {
  width: 1020px;
  height: 485px;
  margin: 0px auto;
}
.nav-side {
  width: 200px;
  height: 100%;
  padding: 0px;
  color: #fff;
  float: left;
  background-color: #6e6568;
}
.nav-side ul {
  width: 100%;
  padding: 0px;
  padding-top: 15px;
  list-style: none;
}
.nav-side li {
  padding: 7.5px;
  padding-left: 15px;
  font-size: 14px;
  line-height: 18px;
}
.nav-side li:hover {
  background: #999395;
}
.nav-side-item:hover {
  cursor: pointer;
  color: #c81623;
}

/*导航内容*/
.nav-content {
  width: 792px;
  margin-left: 15px;
  overflow: hidden;
  float: left;
}
/*导航图片*/
.nav-show-img {
  margin-top: 10px;
  float: left;
}
.nav-show-img:nth-child(2) {
  margin-left: 12px;
}
/*显示商品*/
.content {
  width: 100%;
}
/*显示商品详细信息*/
.detail-item-panel {
  width: 815px;
  height: 485px;
  background-color: #fff;
  position: absolute;
  top: 168px;
  left: 389px;
  z-index: 999;
}
.nav-detail-item {
  margin-left: 26px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #eee;
}
.nav-detail-item span {
  padding: 6px;
  padding-left: 12px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6e6568;
}
.nav-detail-item span:hover {
  margin-left: 15px;
  background-color: #f44336;
}
.detail-item-panel ul {
  list-style: none;
}
.detail-item-panel li {
  line-height: 38px;
  margin-left: 40px;
}
.detail-item-title {
  padding-right: 6px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  color: #555555;
}
.detail-item-title:hover {
  color: #d9534f;
}
.detail-item-row a {
  color: #555555;
}
.detail-item{
  font-size: 14px;
  padding-left: 12px;
  padding-right: 8px;
  cursor: pointer;
  border-left: 1px solid #ccc;
}
.detail-item:hover {
  color: #d9534f;
}
</style>
