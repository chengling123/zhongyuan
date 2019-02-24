import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Task from './views/TaskPage.vue'
import XiTong from "./views/XiTong"
import Login from "./views/Login"

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:"/home"
    },{
      path:"/home",
      component:Home
    },{
      path: '/task',
      component: Task
    },{
      path: '/xitong',
      component: XiTong
    },{
      path: '/login',
      component: Login
    }
  ]
})
