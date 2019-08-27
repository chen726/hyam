<template>
  <div>
    <el-row>
      <h5 class="txt-dark capitalize-font"><i class="zmdi zmdi-account-box mr-10"></i>通知方式设置</h5>
      <hr class="light-grey-hr mb-15">
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button type="primary">主要按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
      </el-col>
      <el-col :span="24">
        <el-card>
          <el-form :model="ruleForm2"
                   status-icon
                   :rules="rules2"
                   ref="ruleForm2"
                   label-width="100px"
                   class="demo-ruleForm">
            <el-form-item label="密码"
                          prop="pass">
              <el-input type="password"
                        v-model="ruleForm2.pass"
                        auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码"
                          prop="checkPass">
              <el-input type="password"
                        v-model="ruleForm2.checkPass"
                        auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄"
                          prop="age">
              <el-input v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         @click="submitForm('ruleForm2')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      formInline: {
        user: '',
        region: ''
      },
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
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
</style>
