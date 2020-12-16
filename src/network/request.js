import axios from 'axios'

//The instance is a Promise , so return itself
export function request(config) {

  //1. create axios instance
  const instance = axios.create({
    baseURL: '', // 感谢coderwhy老师提供API接口
    timeout: 3000
  })
  // 2. axios interceptor
  //2.1 request interceptor
  axios.interceptors.request.use(
    config => {console.log(config)},
    err => {console.log(err)}
  )
  //2.2 response interceptor
  axios.interceptors.response.use(
    res => {return res.data},
    err => {return err}
  )
  //3. send real network request
  return instance(config)
}
