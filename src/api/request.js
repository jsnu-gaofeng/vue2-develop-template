import axios from 'axios'
const request = axios.create({
  //基础路径，发请求的时候 路径中会出现api
  baseURL: '/api',
  //设置请求时间（5S）
  timeout: 5000
})
request.interceptors.request.use((config) => {
  console.log('请求拦截器')
  return config
})
//响应拦截器：服务器的数据已经返回了，可以干一些事情
request.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    console.log('响应拦截器拦截到失败')
    return Promise.reject(error)
  }
)

const nodeApi = axios.create({
  baseURL: '/node',
  timeout: 5000
})
//请求拦截器:在发请求之前可以检测到，可以干一些事情
nodeApi.interceptors.request.use((config) => {
  console.log('request1的请求拦截器', config)
  return config
})
nodeApi.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    console.log('响应拦截器拦截到失败')
    return Promise.reject(error)
  }
)
export { request, nodeApi }
