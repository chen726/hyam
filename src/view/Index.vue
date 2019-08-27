<template>
  <el-container>
    <LeftBar />
    <el-container class="is-vertical">
      <HeaderBar />
      <el-main class="main-content newgdt">
        <router-view></router-view>
      </el-main>
      <FooterBar />
    </el-container>
  </el-container>
</template>
<script>
import HeaderBar from '@/view/layout/HeaderBar'
import LeftBar from '@/view/layout/LeftBar'
import FooterBar from '@/view/layout/FooterBar'
// import cookie from '@/common/cookie'
export default {
  components: {
    HeaderBar,
    LeftBar,
    FooterBar
  },
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {

  }
}
</script>
<style scoped lang="less">
.el-container {
  height: 100%;
}
</style>
