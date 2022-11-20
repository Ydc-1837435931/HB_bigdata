import Vue from 'vue'
import VueRouter from 'vue-router'
import project from '../views/project.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: () => import('../views/Home.vue')
  },
    {
      path: '/project',
      name: 'project',
      meta:{title:"项目页面"},
      component: () => import('../views/project.vue')
    },
    {
      path:'/secondproject',
      name:'secondproject',
      meta:{title:"第二级看板"},
      component: () => import('../views/secondproject.vue')
    }
  ]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

export default router
