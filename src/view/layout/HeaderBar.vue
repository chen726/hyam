<template>
  <el-header class="header-bar">
    <ul class="header-operations">
      <li>
        <el-dropdown @command="handleCommand">
          <img class="top-userImg el-dropdown-link"
               src="@/assets/images/user.png"
               alt=""
               title="用户图像">
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              {{userInfo.username}}
            </el-dropdown-item>
            <el-dropdown-item @click.native="Signout"
                              divided>退出当前账号</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
  </el-header>
</template>
<script>
import ThemePicker from '@/components/ThemePicker/index'
export default {
  components: {
    ThemePicker
  },
  data () {
    return {
      userInfo: {
        username: 'admin'
      }
    }
  },
  methods: {
    Signout () {
      this.$alert('确定注销登录吗？', '提示', { confirmButtonText: '确定' }).then(() => {
        sessionStorage.removeItem('authorization')
        sessionStorage.removeItem('user')
        location.href = window._signOut().Ip
      })
    },
    handleCommand (command) {
      this.$message('click on item ' + command)
    },
    handleExpand () {
      this.$emit('handleExpand')
    }
  }
}
</script>
<style scoped lang="less">
.header-bar {
  width: 100%;
  height: 66px !important;
  background: #212121;
}
.header-operations {
  float: right;
  height: 100%;
}
.header-operations li {
  color: #878787;
  display: inline-block;
  vertical-align: middle;
  line-height: 66px;
  cursor: pointer;
}
.header-operations span {
  color: #878787;
}
.top-userImg {
  margin: 0 8px 0 10px;
  padding: 2px;
  width: 40px;
  height: 40px;
  vertical-align: middle;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid #eee;
}
</style>
