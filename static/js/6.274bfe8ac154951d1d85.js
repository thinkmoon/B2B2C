webpackJsonp([6],{er4Q:function(t,e){},y74k:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("4YfN"),r=n.n(i),o=n("YtJ0"),s=n("9rMa"),a=n("gyMJ"),c={name:"MyShoppingCart",data:function(){return{columns:[{type:"selection",width:58,align:"center"},{title:"图片",key:"img",width:86,render:function(t,e){return t("div",[t("img",{attrs:{src:e.row.goods_image,class:"img",style:"display: inline-block;width: 70%;height: 70%;"}})])},align:"center"},{title:"标题",key:"goods_name",align:"center"},{title:"数量",key:"goods_num",width:68,align:"center"},{title:"价格",width:68,key:"goods_amount",align:"center"}]}},created:function(){var t=this;Object(a.f)({user_id:this.userInfo.user_id},{token:this.userInfo.token}).then(function(e){t.addShoppingCart(e.data)})},computed:r()({},Object(s.e)(["shoppingCart","userInfo"])),methods:r()({},Object(s.b)(["addShoppingCart"]),{goTo:function(){this.$router.push("/order")}}),store:o.a},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Table",{ref:"selection",attrs:{border:"",columns:this.columns,data:this.shoppingCart,size:"large","no-data-text":"您的购物车没有商品，请先添加商品到购物车再点击购买"}}),this._v(" "),e("div",{staticClass:"go-to"},[e("Button",{attrs:{type:"primary"},on:{click:this.goTo}},[this._v("去付款")])],1)],1)},staticRenderFns:[]};var u=n("C7Lr")(c,d,!1,function(t){n("er4Q")},"data-v-f2b9cd9a",null);e.default=u.exports}});
//# sourceMappingURL=6.274bfe8ac154951d1d85.js.map