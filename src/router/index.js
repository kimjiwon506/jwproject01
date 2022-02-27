import Vue from 'vue'
import Router from 'vue-router'
import Join from '@/components/join/Join'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/join',
      name: 'Join',
      compotent: Join
    }
  ]
})
