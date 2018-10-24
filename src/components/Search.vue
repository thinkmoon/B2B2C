<template>
  <div>
    <div class="container">
      <i-input v-model="searchData" size="large" class="sreach" placeholder="输入你想查找的商品">
        <Button slot="append" icon="ios-search" @click="search"></Button>
      </i-input>
      <!-- <Tag v-for="(item, index) in promotionTags" :key="index" closable  @on-close="closeTags(index)"><span @click="selectTags(index)">{{item}}</span></Tag> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      searchData: ''
    };
  },
  methods: {
    closeTags (index) {
      this.promotionTags.splice(index, 1);
    },
    selectTags (index) {
      this.searchData = this.promotionTags[index];
    },
    search () {
      this.$router.push({path: '/goodsList', query: { searchData: this.searchData }});
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 15px;
  margin: 0px auto;
  margin-bottom: 15px;
  width: 460px;
}
.sreach {
  margin: 5px 0px;
}
</style>
