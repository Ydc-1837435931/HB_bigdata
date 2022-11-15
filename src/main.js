// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from "./App"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false

//适配方案 引入 淘宝方案 flexble
import './assets/flexible.js'

// var echarts = require('echarts');
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/chart/line');
require('echarts/lib/chart/pie');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/markPoint');
require('echarts/lib/component/legend');
require('echarts/lib/component/legendScroll');

//vue全局注入echartsindex
Vue.prototype.$echarts = echarts

// 自定义全局组件引入
import top_item from "./components/top_item"
import left from './components/left'
import center from './components/center'
import right from './components/right'

Vue.component('topItem', top_item)
Vue.component('left', left)
Vue.component('center', center)
Vue.component('right', right)

// dataV 插件按需引入
// import {loading,borderBox13, decoration5,scrollBoard } from '@jiaminghi/data-view'

// Vue.use(loading)
// Vue.use(decoration5)
// Vue.use(borderBox13)
// Vue.use(scrollBoard)
Vue.use(ElementUI);

Vue.use(dataV)

Vue.config.productionTip = false

// 解决样式被覆盖的问题
import './assets/css/base.css'

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>',
  mode:'hash',
  render: h => h(App)
}).$mount('#app')
