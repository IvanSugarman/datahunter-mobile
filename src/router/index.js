import Vue from 'vue'
import Router from 'vue-router'
import Works from '@/views/works'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Works',
      component: Works
    }
  ]
})
