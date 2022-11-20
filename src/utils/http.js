import axios from 'axios'     //引入

let baseURL = 'http://localhost:8088/'
// let baseURL = 'http://121.4.166.140:8088'


let config = {
  baseURL: baseURL,
  timeout: 30000       //设置最大请求时间
}
const _adios = axios.create(config)


/* 请求拦截器（请求之前的操作） */
_adios.interceptors.request.use(
  config => {
    //如果有需要在这里开启请求时的loading动画效果
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    return config;
  },
  err => Promise.reject(err)
);

/* 请求之后的操作 */
_adios.interceptors.response.use(
  res => {
    //在这里关闭请求时的loading动画效果
    //这里用于处理返回的结果，比如如果是返回401无权限，可能会是跳回到登录页的操作，结合自己的业务逻辑写
    if (res.data.code === "401" ) {
      alert("请先登录")
      console.log("请先登录")

    }
    if (res.data.code === "400" ) {
      alert("400")
    }
    if (res.data.code === "404" ) {
      alert("网页不存在")
    }
    // 兼容服务端返回的字符串数据
    if (typeof res.data === 'string'){
      res.data = res.data ? JSON.parse(res.data) : res.data
    }
    if (res.config.responseType === 'blob'){
      return res
    }
    return res;
  },

  err => {
    if (err) {
      //在这里关闭请求时的loading动画效果
      console.log("请求网络失败")
    }
    return Promise.reject(err);
  }
);

//封装post,get方法
const http = {
  get(url='',params={}){
    return new Promise((resolve, reject) => {
      _adios({
        url,
        params,
        headers:{'Content-Type': 'application/json;charset=UTF-8'},
        method: 'GET'
      }).then(res => {
        resolve(res.data)
        return res
      }).catch(error => {
        reject(error)
      })
    })
  },
  post(url='',params={}){
    return new Promise((resolve, reject) => {
      _adios({
        url,
        data:params,
        headers:{'Content-Type': 'application/json;charset=UTF-8'},
        method: 'POST'
      }).then(res => {
        resolve(res.data)
        return res
      }).catch(error => {
        reject(error)
      })
    })
  }
}


export default http
