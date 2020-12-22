import Axios from 'axios'

// 配置axios
Axios.defaults.timeout = 3000
Axios.defaults.baseURL = '/'
// 请求拦截器
Axios.interceptors.request.use(
    config => {
      // let url = config.url
      // const queryIndex = url.indexOf('?')
      // let query = ''
      //
      // if (queryIndex > -1) {
      //   query = url.substring(queryIndex + 1)
      //   url = url.substring(0, queryIndex)
      // }

      // config.headers = {
      //   'X-Content-Security': sign
      // }
      // Vue.NProgress.start()

      return config
    },
    error => {
      // Vue.NProgress.done()

      return error
    }
)

// 相应拦截器
Axios.interceptors.response.use(
    resopnse => {
      // Vue.NProgress.done()

      return resopnse.data
    },
    error => {
      // Vue.NProgress.done()

      const res = error.response || {}
      const data = res.data || {}
      const code = data.code || 404
      const message = data.message || data.desc || '请求出错啦^o^'

      return {
        code,
        message
      }
    }
)

export default Axios
