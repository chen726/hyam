import axios from 'axios'
import qs from 'qs'
import cookie from '../common/cookie'

// axios全局配置
axios.defaults.timeout = 10000

axios.defaults.baseURL = 'http://192.168.1.193'
// axios.defaults.baseURL = window.location.origin;
// 请求拦截器
axios.interceptors.request.use((config) => {
  if (config.url !== config.baseURL + '/user/login/index') {
    // if (axios.defaults.baseURL === config.baseURL) {
    //   if (cookie.hasCookie()) config.data.token = cookie.getCookie()
    // } else {
    //   // if(cookie.hasCookie()) config.headers['X-Client-Token'] =  cookie.getCookie();
    // }
  }
  if (config.method === 'post' && config.url !== config.baseURL + '/auth/inner/adds' && config.url !== config.baseURL + '/image/index/add' && config.url !== config.baseURL + '/portal/AuthConfig/uploads') {
    if (axios.defaults.baseURL === config.baseURL) {
      config.data = qs.stringify(config.data)
    } else {
      config.data = JSON.stringify(config.data)
    }
    // console.log(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

function procData (data, cb, err) {
  switch (data.code) {
    case 200:
      cb(data.data)
      break
    case 10001:
    case 10002:
      err(data.message)
      cookie.setCookie(0, -1)
      this.$router.push('/login')
      break
    default:
      err(data.message)
  }
}

function fetch (url, params, config) {
  let c = config || ''
  return axios.post(url, params, c).then(res => {
    return {
      res: res.data,
      procData: procData
    }
  })
}

export default fetch
