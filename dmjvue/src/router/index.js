import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'


Vue.use(VueRouter)

const routes = [
  {path: '/detail',component:()=>import("../views/detail.vue")},
  {path: '/reg',component:()=>import("../views/reg.vue")},
  {path: '/',component: index},
  {path: '/login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
