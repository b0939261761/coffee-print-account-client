import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import auth from './modules/auth';
import device from './modules/device';
import errors from './modules/errors';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    auth,
    device,
    errors
  },

  strict: process.env.NODE_ENV !== 'production'
});

store.dispatch('auth/init');

export default store;
