<template>
  <div>
    <div class="add-container">
      <div class="add-title">
        <h1>添加收货地址</h1>
      </div>
      <Form ref="formData" :model="formData" label-position="left" :label-width="100" :rules="ruleInline">
      <div class="add-box">
          <FormItem label="收件人" prop="name">
            <i-input v-model="formData.name" size="large"></i-input>
          </FormItem>
          <FormItem label="收件地区" prop="address">
            <Distpicker :province="formData.province" :city="formData.city" :area="formData.area" @province="getProvince" @city="getCity" @area="getArea"></Distpicker>
          </FormItem>
          <FormItem label="收件地址" prop="address">
            <i-input v-model="formData.address" size="large"></i-input>
          </FormItem>
          <FormItem label="手机号码" prop="phone">
            <i-input v-model="formData.phone" size="large"></i-input>
          </FormItem>
          <FormItem label="邮政编码" prop="postalcode">
            <i-input v-model="formData.postalcode" size="large"></i-input>
          </FormItem>
      </div>
      <div class="add-submit">
        <Button @click="addSubmit('formData')" type="primary">添加地址</Button>
      </div>
      </Form>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState } from 'vuex';
import Distpicker from 'v-distpicker';
import { addUserConsignee } from '../../api';
export default {
  name: 'AddAddress',
  data () {
    return {
      formData: {
        name: '李大嘴',
        address: '东莞理工学院',
        phone: '17666200123',
        postalcode: '521800',
        province: '广东省',
        city: '广州市',
        area: '天河区'
      },
      ruleInline: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ],
        postalcode: [
          { required: true, message: '请输入邮政编码', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur' }
        ]
      }
    };
  },
  computed: {
    ...mapState(['address', 'userInfo'])
  },
  methods: {
    getProvince (data) {
      this.formData.province = data.value;
    },
    getCity (data) {
      this.formData.city = data.value;
    },
    getArea (data) {
      this.formData.area = data.value;
    },
    addSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          const userAddress = {
            receiver: this.formData.name,
            user_id: this.userInfo.id,
            province: this.formData.province,
            city: this.formData.city,
            area: this.formData.area,
            address: this.formData.address,
            mobile: this.formData.phone,
            zip: this.formData.postalcode,
            flag: 0
          };
          addUserConsignee(userAddress, this.userInfo.token);
          this.$router.push({ path: '/home/myAddress' });
        } else {
          this.$Message.error('添加失败, 格式校验不通过');
        }
      });
    }
  },
  components: {
    Distpicker
  },
  store
};
</script>

<style scoped>
.add-container {
  margin: 15px auto;
  width: 60%;
  min-width: 600px;
}
.add-title {
  margin-bottom: 15px;
  text-align: center;
}
.add-submit {
  display: flex;
  justify-content: center;
}
</style>
