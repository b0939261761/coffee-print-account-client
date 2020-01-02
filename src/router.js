import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Login from '@/pages/Login.vue';
import MainPage from '@/pages/MainPage.vue';
import Cartridges from '@/pages/Cartridges.vue';
import Devices from '@/pages/Devices.vue';
import Users from '@/pages/Users.vue';
import Report from '@/pages/Report.vue';

Vue.use(Router);

// -----------------------------

const routes = [
  { path: '/login', name: 'login', component: Login, meta: { notRequiresAuth: true } },
  { path: '/', name: 'mainPage', component: MainPage },
  { path: '/cartridges', name: 'cartridges', component: Cartridges },
  { path: '/devices', name: 'devices', component: Devices },
  { path: '/users', name: 'users', component: Users },
  { path: '/report', name: 'report', component: Report },
  { path: '*', redirect: { name: 'login' } }
];

// -----------------------------

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
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

// -----------------------------

export default router;
