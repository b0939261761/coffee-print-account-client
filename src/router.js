import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Login from '@/views/Login.vue';
import MainPage from '@/views/MainPage.vue';
import Cartridges from '@/views/Cartridges.vue';
import Devices from '@/views/Devices.vue';
import Users from '@/views/Users.vue';

Vue.use(Router);

// -----------------------------

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { notRequiresAuth: true }
    },
    {
      path: '/',
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
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '*',
      redirect: { name: 'login' }
    }
  ]
});

// -----------------------------

router.beforeEach(async (to, from, next) => {
  const page = { name: null };
  const isAuthenticated = await store.dispatch('auth/getRefreshToken');
  const { notRequiresAuth } = to.meta;
  if (notRequiresAuth && isAuthenticated) page.name = 'mainPage';
  else if (!notRequiresAuth && !isAuthenticated) page.name = 'login';

  next(page);
});

export default router;
