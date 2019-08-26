<template>
  <div class="loginBg">
    <el-row class="loginContainer">
      <h3 class="text-center txt-dark mb-10 animated-zoomInDown"
          style="font-family: YouYuan;">HYAM资产管理系统</h3>
      <el-form :model="loginForm"
               label-position="top"
               status-icon
               :rules="loginRule"
               ref="loginForm"
               label-width="80px"
               class="loginForm">
        <el-form-item label="名称"
                      prop="name">
          <el-input v-model.number="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="pass">
          <el-input type="password"
                    v-model="loginForm.pass"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('loginForm')">提交</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>
<script>
import cookie from '@/common/cookie'
export default {
  data () {
    return {
      loginForm: {
        pass: '',
        checkPass: '',
        name: ''
      },
      loginRule: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          cookie.setCookie('token')
          that.$router.push({
            path: '/'
          })
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style>
.loginBg {
  width: 100%;
  height: 100%;
  background: #1b1e32;
  color: #fff;
  position: relative;
}
.loginContainer {
  width: 375px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
