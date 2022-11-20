//引入刚才的http.js文件
import https from './http.js';

//设置个对象，就不用一个个暴露了，直接暴露对象
let apiFun = {};

/* 获取列表 */
//查询列表，详情就是get
/* /api/getlist是请求接口地址，有http.js里面的Ip加上，如：http:192.168.0.1:9090//api/getlist  */
apiFun.getlist = function(params) {
  return https.get('/api/getlist', params)
}

apiFun.getinfo = function () {
  return https.post('/datavapi/getInfo')
}

//暴露出这个对象
export default apiFun;

