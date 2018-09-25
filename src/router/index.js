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
      path: '/works',
      name: 'works',
      component: Works
    },{
      path: '/sign',
      name: 'sign',
      component: Sign
    }, {
      path: '/share',
      name: 'share',
      component: Share
    }
  ]
})
