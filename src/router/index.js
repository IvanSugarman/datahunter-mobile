import Vue from 'vue'
import Router from 'vue-router'
import Works from '@/views/works'
import Sign from '@/views/sign'
import Share from '@/views/share'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/works-mobile',
      name: 'works',
      component: Works
    },{
      path: '/sign-mobile',
      name: 'sign',
      component: Sign
    }, {
      path: '/share-mobile/:id',
      component: Share
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
