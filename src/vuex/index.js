/**
 * Created by jiangmq on 2018/9/25.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import state from '@/vuex/state';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
Vue.config.debug = debug;

export default new Vuex.Store({
  state,
  getters: {
    getWorksList: state => {
      return state.workList;
    },
    getWorksById: state => (key) => {
      let result = null;

      state.workList.forEach((item) => {
        if (item.id == key) {
          result = item;
        }
      });
      return result;
    }
  },
  strict: debug
});
