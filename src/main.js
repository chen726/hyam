// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/index'
import ELementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/public.css'
// import './assets/css/style-black.css'
import './assets/css/font-awesome.min.css'
import './assets/css/themify-icons.css'
import './assets/css/animate.css'
import './assets/css/simple-line-icons.css'
import './assets/css/ionicons.min.css'
import './assets/css/linea-icon.css'
import './assets/css/pe-icon-7-stroke.css'
import './assets/css/pe-icon-7-styles.css'
import './assets/css/material-design-iconic-font.min.css'

Vue.use(VueRouter)
Vue.use(ELementUI)
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
