import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import MainPage from '@/views/MainPage.vue';
import Cartridges from '@/views/Cartridges.vue';
import Devices from '@/views/Devices.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'mainPage',
      component: MainPage
    },
    {
      path: '/cartridges',
      name: 'cartridges',
      component: Cartridges
    },
    {
      path: '/devices',
      name: 'devices',
      component: Devices
    },
    {
      path: '*',
      redirect: { name: 'login' }
    }
  ]
});
