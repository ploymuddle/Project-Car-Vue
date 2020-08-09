import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Update from '../views/Update.vue'
import Insert from '../views/Insert.vue'
import Demo from '../views/Into.vue'
import User from '../views/User.vue'

// user
// import UserIndex from '@/component/user/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/update',
    name: 'update',
    component: Update
  },
  {
    path: '/update/:carId',
    name: 'updateId',
    component: Update
  },
  {
    path: '/insert',
    name: 'insert',
    component: Insert
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/user/:carId',
    name: 'user',
    component: User
  }
  // {
  //   path: '/user',
  //   name: 'user',
  //   component: UserIndex
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
