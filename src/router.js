import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('Views/Home.vue'),
  },
  {
    path: '/sample',
    name: 'Sample',
    component: () => import('Views/Sample.vue'),
  },
  {
    path: '/introduce/SV',
    name: 'SV',
    component: () => import('Views/introduce/SV.vue'),
  },
  {
    path: '/product/Search',
    name: 'Search',
    component: () => import('Views/product/Search.vue'),
  },
  {
    path: '/autoic/Company',
    name: 'Company',
    component: () => import('Views/autoic/Company.vue'),
  },
  {
    path: '/support/Notice',
    name: 'Notice',
    component: () => import('Views/support/Notice.vue'),
  },
  {
    path: '/vrdlab/Introduce',
    name: 'Introduce',
    component: () => import('Views/vrdlab/Introduce.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
