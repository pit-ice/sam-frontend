import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('Views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('Views/About.vue'),
  },
  {
    path: '/auto',
    name: 'Auto',
    component: () => import('Views/Auto.vue'),
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('Views/Info.vue'),
  },
  {
    path: '/virtual',
    name: 'Virtual',
    component: () => import('Views/Virtual.vue'),
  },
  {
    path: '/tech',
    name: 'Tech',
    component: () => import('Views/Tech.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
