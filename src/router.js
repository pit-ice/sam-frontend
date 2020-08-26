import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './views/Login.vue';
import Sample from './views/Sample.vue';
import Faq from './views/Faq.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/sample',
    name: 'Sample',
    component: Sample,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
