// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import store from './vuex/index';
import axios from 'axios';
import VueAxios from 'vue-axios'

//Components
import DataHunterHeader from '@/components/data-hunter-header';
import DataHunterFooter from '@/components/data-hunter-footer';
import Banner from '@/components/banner';
import DataHunterDialog from '@/components/data-hunter-dialog';

Vue.config.productionTip = false;
Vue.use(VueAxios,axios);

Vue.component('data-hunter-header', DataHunterHeader);
Vue.component('data-hunter-footer', DataHunterFooter);
Vue.component('banner', Banner);
Vue.component('data-hunter-dialog', DataHunterDialog);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, DataHunterHeader, DataHunterFooter, Banner, DataHunterDialog },
  template: '<App/>',
});
