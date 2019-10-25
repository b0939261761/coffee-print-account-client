import Vue from 'vue';
import PortalVue from 'portal-vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from '@/store/index';
import i18n from '@/lang/index';

import './utils/polyfills';

Vue.use(PortalVue);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
