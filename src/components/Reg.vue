<template>
  <div>
    <video class="video" muted="" id="videoEle" src="https://s.geilicdn.com/pc-new-official/weidian-official.mp4" autoplay="autoplay" loop="loop"></video>
    <div class="box">
      <p>
        <font size="69px" color="#ed4014">阿卡丽的神秘商店</font><br />
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;----------------助你成为网络弄潮儿</h2>
      </p>
      <br />
      <Form :model="formItem" label-position="left" :label-width="100" :rules="ruleInline">
        <FormItem label="店铺账户号" prop="username">
            <Input  size="large" v-model="formItem.username" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="店铺名称" prop="nickname">
            <Input size="large" v-model="formItem.nickname" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="密码" prop="password" >
            <Input size="large" v-model="formItem.password" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="邮箱" prop="email">
            <Input type="email" size="large" v-model="formItem.email" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="联系方式" prop="shop_mobile">
            <Input size="large" v-model="formItem.shop_mobile" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="店铺简介" prop="shop_intro">
            <Input size="large" v-model="formItem.shop_intro" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="店铺描述" prop="shop_content">
            <Input type="textarea" :rows="4" size="large" v-model="formItem.shop_content" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
            <Button @click="Reg" type="primary">确认注册</Button>
            <router-link :to="{path:'/home'}">
              <Button type="error" style="margin-left: 8px">我不干了</Button>
            </router-link>
        </FormItem>
      </Form>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/footer/Footer';
import { registerShop } from '../api/index';
export default {
  name: 'Reg',
  components: {
    Footer
  },
  data () {
    return {
      formItem: {

      },
      ruleInline: {
        username: [
          { required: true, message: '请输入店铺账户名', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入店铺名称', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入店铺密码', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入联系邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式出错', trigger: 'blur' }
        ],
        shop_mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur' }
        ],
        shop_intro: [
          { required: true, message: '请输入店铺介绍', trigger: 'blur' }
        ],
        shop_content: [
          { required: true, message: '请输入店铺描述', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    Reg () {
      registerShop(this.formItem).then(
        res => {
          if (res.code === 1) {
            this.$Message.success('店铺注册成功');
            window.location.href = 'https://b2b2c.bennyweb.top/admin/index/login?url=%2Fadmin';
          }
        }
      );
    }
  }
};
</script>

<style scoped>
.video{
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  background-size: cover;
}
.box{
  width: 50%;
  height: 750px;
  margin: auto auto;
  margin-top: 50px;
  padding: 50px 120px;
  background-color:rgba(255,255,255,0.7);
}
.ivu-form .ivu-form-item-label{
  font-size: 44px;
}
</style>
