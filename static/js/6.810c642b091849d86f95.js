webpackJsonp([6],{"ad+k":function(t,s){},zV51:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=a("4YfN"),i=a.n(o),e=a("fIxU"),n=a("Mtv5"),r=a("bYoP"),c=a("YtJ0"),d=a("9rMa"),l=a("gyMJ"),v={name:"GoodsList",beforeRouteEnter:function(t,s,a){window.scrollTo(0,0),a()},data:function(){return{cateID:0,sreachItem:"",isAction:[!0,!1,!1],icon:["arrow-up-a","arrow-down-a","arrow-down-a"],goodsTool:[{title:"综合",en:"sale"},{title:"评论数",en:"remarks"},{title:"价格",en:"price"}],goodsList:[]}},computed:i()({},Object(d.e)(["asItems","isLoading"]),Object(d.c)(["orderGoodsList"])),methods:i()({},Object(d.b)(["loadGoodsList"]),Object(d.d)(["SET_GOODS_ORDER_BY"]),{orderBy:function(t,s){console.log(t),this.icon=["arrow-down-a","arrow-down-a","arrow-down-a"],this.isAction=[!1,!1,!1],this.isAction[s]=!0,this.icon[s]="arrow-up-a",this.SET_GOODS_ORDER_BY(t)}}),created:function(){},mounted:function(){var t=this;this.sreachItem=this.$route.query.sreachData,this.cateID=this.$route.query.aim,Object(l.c)({cate_id:this.cateID}).then(function(s){console.log(s.data),t.goodsList=s.data})},components:{Sreach:e.a,GoodsListNav:n.a,Footer:r.a},store:c.a},_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Sreach"),t._v(" "),a("GoodsListNav"),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"bread-crumb"},[a("Breadcrumb",[a("BreadcrumbItem",{attrs:{to:"/"}},[a("Icon",{attrs:{type:"ios-home-outline"}}),t._v(" 首页\n        ")],1),t._v(" "),a("BreadcrumbItem",{attrs:{to:"/goodsList?sreachData="}},[a("Icon",{attrs:{type:"bag"}}),t._v(" "+t._s(t.sreachItem)+"\n        ")],1)],1)],1),t._v(" "),a("div",{staticClass:"goods-box"},[a("div",{staticClass:"as-box"},[t._m(0),t._v(" "),t._l(t.asItems,function(s,o){return a("div",{key:o,staticClass:"item-as"},[a("div",{staticClass:"item-as-img"},[a("img",{attrs:{src:s.img,alt:""}})]),t._v(" "),a("div",{staticClass:"item-as-price"},[a("span",[a("Icon",{attrs:{type:"social-yen text-danger"}}),t._v(" "),a("span",{staticClass:"seckill-price text-danger"},[t._v(t._s(s.price))])],1)]),t._v(" "),a("div",{staticClass:"item-as-intro"},[a("span",[t._v(t._s(s.intro))])]),t._v(" "),a("div",{staticClass:"item-as-selled"},[t._v("\n            已有"),a("span",[t._v(t._s(s.num))]),t._v("人评价\n          ")])])})],2),t._v(" "),a("div",{staticClass:"goods-list-box"},[a("div",{staticClass:"goods-list-tool"},[a("ul",t._l(t.goodsTool,function(s,o){return a("li",{key:o,on:{click:function(a){t.orderBy(s.en,o)}}},[a("span",{class:{"goods-list-tool-active":t.isAction[o]}},[t._v(t._s(s.title)+" "),a("Icon",{attrs:{type:t.icon[o]}})],1)])}))]),t._v(" "),a("div",{staticClass:"goods-list"},t._l(t.goodsList,function(s,o){return a("div",{key:o,staticClass:"goods-show-info"},[a("div",{staticClass:"goods-show-img"},[a("router-link",{attrs:{to:{path:"/goodsDetail",query:{id:s.id}}}},[a("img",{attrs:{src:""==s.img?s.img:"static/img/goodsList/item-show-6.jpg"}})])],1),t._v(" "),a("div",{staticClass:"goods-show-price"},[a("span",[a("Icon",{attrs:{type:"social-yen text-danger"}}),t._v(" "),a("span",{staticClass:"seckill-price text-danger"},[t._v(t._s(s.now_price))])],1)]),t._v(" "),a("div",{staticClass:"goods-show-detail"},[a("span",[t._v(t._s(s.goods_content))])]),t._v(" "),a("div",{staticClass:"goods-show-num"},[t._v("\n              已有"),a("span",[t._v(t._s(s.remarks))]),t._v("人评价\n            ")]),t._v(" "),a("div",{staticClass:"goods-show-seller"},[a("span",[t._v(t._s(s.goods_name))])])])}))])]),t._v(" "),a("div",{staticClass:"goods-page"},[a("Page",{attrs:{total:100,"show-sizer":""}})],1)]),t._v(" "),a("Footer"),t._v(" "),t.isLoading?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"item-as-title"},[s("span",[this._v("商品精选")]),this._v(" "),s("span",[this._v("广告")])])}]};var u=a("C7Lr")(v,_,!1,function(t){a("ad+k")},"data-v-e4a5d7b0",null);s.default=u.exports}});
//# sourceMappingURL=6.810c642b091849d86f95.js.map