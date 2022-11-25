import Vue from 'vue'
import VueRouter from 'vue-router'
import project from '../views/thirdProject.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: () => import('../views/Home.vue')
  },
    {
      path: '/thirdProject',
      name: 'thirdProject',
      meta:{title:"项目页面"},
      component: () => import('../views/thirdProject.vue')
    },
    {
      path:'/secondProject',
      name:'secondProject',
      meta:{title:"第二级看板"},
      component: () => import('../views/secondProject.vue')
    }
  ]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

export default router
