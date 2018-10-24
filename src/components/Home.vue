<template>
  <div class="container">
    <Layout class="layout">
      <Sider class="side-bar" :style="{height: 'calc(100vh - 35px)', background: '#fff', overflow: 'auto'}" ref="side" :collapsed-width="78">
        <Menu active-name="1-2" theme="light" width="auto" @on-select="onSelect">
          <div class="user-icon">
            <div class="user-img">
              <img :src="userInfo.avatar">
            </div>
            <p>{{userInfo.username}}</p>
            <p></p>
            <p><Button type="primary" size="small" @click="edit">编辑资料</Button>&nbsp;<Button @click="reset" type="error" size="small">重置密码</Button></p>
          </div>
          <Modal v-model="editModal" width="530">
        <p slot="header">
          <Icon type="edit"></Icon>
          <span>编辑资料</span>
        </p>
        <div>
            <Form :model="formData" label-position="left" :label-width="60" >
              <FormItem label="头像地址"  prop="address">
                <i-input v-model="formData.avatar" disabled size="large"></i-input>
              </FormItem>
              <FormItem label="用户名" prop="name">
                <i-input v-model="formData.username" disabled size="large"></i-input>
              </FormItem>
              <FormItem label="昵称" prop="address">
                <i-input v-model="formData.nickname" size="large"></i-input>
              </FormItem>
              <FormItem label="简介" prop="address">
                <i-input v-model="formData.bio" size="large"></i-input>
              </FormItem>
            </Form>
        </div>
        <div slot="footer">
            <Button type="primary" size="large" long @click="editAction">修改</Button>
        </div>
    </Modal>
    <Modal v-model="resetModal" width="530">
        <p slot="header">
          <Icon type="edit"></Icon>
          <span>重置密码</span>
        </p>
        <div>
            <Form :model="pwData" label-position="left" :label-width="60" >
              <FormItem label="新密码"  prop="address">
                <i-input v-model="pwData.newpassword" type="password" size="large"></i-input>
              </FormItem>
              <FormItem label="确认密码" prop="name">
                <i-input v-model="pwData.repassword" type="password" size="large"></i-input>
              </FormItem>
            </Form>
        </div>
        <div slot="footer">
            <Button type="primary" size="large" long @click="resetAction">修改</Button>
        </div>
    </Modal>
          <Submenu name="1">
            <template slot="title">
                <Icon type="location"></Icon>
                <span>收货地址</span>
            </template>
            <MenuItem name="myAddress">我的收货地址</MenuItem>
            <MenuItem name="addAddress">添加收货地址</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
                <Icon type="clipboard"></Icon>
                <span>购物订单</span>
            </template>
            <MenuItem name="myOrder">我的订单</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
                <Icon type="ios-cart"></Icon>
                <span>购物车</span>
            </template>
            <MenuItem name="myShoppingCart">我的购物车</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout class="layout">
        <Header :style="{background: '#fff'}">
          <h2>{{activeTitle}}</h2>
        </Header>
        <Content class="content">
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </Content>
        <Footer class="layout-footer-center">2018 &copy; Thinkmoon</Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
import { editProfile, resetpwd } from '../api/index';
export default {
  name: 'Home',
  created () {
    this.isLogin();
    this.formData = this.userInfo;
  },
  computed: {
    ...mapState(['userInfo'])
  },
  data () {
    return {
      editModal: false,
      resetModal: false,
      formData: {},
      pwData: {},
      activeTitle: '我的订单',
      bar: {
        'myAddress': '我的收货地址',
        'addAddress': '添加收货地址',
        'myOrder': '我的订单',
        'myShoppingCart': '我的购物车'
      }
    };
  },
  methods: {
    ...mapActions(['signOut', 'isLogin']),
    onSelect (name) {
      this.activeTitle = this.bar[name];
      this.$router.push(`/home/${name}`);
    },
    edit () {
      this.editModal = true;
    },
    editAction () {
      editProfile(this.formData, this.userInfo.token).then(
        res => {
          if (res.code === 1) {
            this.$Message.success('修改成功');
          } else {
            this.$Message.error('修改失败');
          }
          this.editModal = false;
        }
      );
    },
    reset () {
      this.resetModal = true;
    },
    resetAction () {
      if (this.pwData.newpassword !== this.pwData.repassword) {
        console.log(this.pwData.newpassword, this.pwData.repassword);
        this.$Message.error('两次密码输入不一致');
      } else {
        resetpwd({newpassword: this.pwData.newpassword, mobile: this.userInfo.mobile, captcha: '123456'}, this.userInfo.token).then(
          res => {
            if (res.code === 1) {
              this.$Message.success('修改成功');
              this.signOut();
            } else {
              this.$Message.error('修改失败');
            }
            this.resetModal = false;
          }
        );
      }
    }
  },
  store
};
</script>

<style scoped>
.side-bar a{
  color: #232323;
}
.user-icon {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-icon span {
  font-size: 96px;
}
.user-img {
  margin-bottom: 15px;
  width: 96px;
  height: 96px;
  border-radius: 48px;
  overflow: hidden;
}
.user-img img{
  width: 100%;
}
.content {
  margin: 15px;
  background-color: #fff;
  padding: 15px;
}
.layout-footer-center {
  padding: 0px 15px;
  padding-bottom: 15px;
  text-align: center;
}
</style>
