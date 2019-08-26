<template>
  <div class="g-container m-managebox">
    <LeftBar />
    <div class="g-main">
      <HeaderBar />
      <div class="hyam-content">
        <router-view></router-view>
      </div>
      <FooterBar />
    </div>
  </div>
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
.g-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
}
.g-main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
// .main-container {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// }
.hyam-content {
  display: flex;
  flex-grow: 1;
  margin: 15px;
}
</style>
