import axios from 'axios'
import store from '../store/index'
const qs = require('qs')
const get = async (url, params) => {
  store.UI.setLoading(true)
  let response = null
  let options = {
    params,
    timeout: 60000
  }
  try {
    response = await axios.get(url, options)
    store.UI.setLoading(false)
    return response.data
  } catch (err) {
    store.UI.setLoading(false)
    return {
      isError: true,
      statusCode: -10001,
      message: '接口异常',
      data: null
    }
  }
}
const post = async (url, data, headers) => {
  store.UI.setLoading(true)
  data = data || {}
  let response = null
  try {
    response = await axios.post(url, qs.stringify(data), { // 控制允许接受的状态码范围
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true
    })
    store.UI.setLoading(false)
    return response.data
  } catch (err) {
    store.UI.setLoading(false)
    return {
      isError: true,
      statusCode: -10001,
      message: '接口异常',
      data: null
    }
  }
}
export {
  get,
  post
}