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
  // 회원가입
  {
    path: '/member/Register',
    name: 'Register',
    component: () => import('Views/member/Register.vue'),
  },
  {
    path: '/member/RegisterAgreement',
    name: 'RegisterAgreement',
    component: () => import('Views/member/RegisterAgreement.vue'),
  },
  {
    path: '/member/RegisterInfo',
    name: 'RegisterInfo',
    component: () => import('Views/member/RegisterInfo.vue'),
  },
  {
    path: '/member/RegisterDone',
    name: 'RegisterDone',
    component: () => import('Views/member/RegisterDone.vue'),
  },
  // 로그인
  {
    path: '/member/Login',
    name: 'Login',
    component: () => import('Views/member/Login.vue'),
  },
  // 소개
  {
    path: '/introduce/SV',
    name: 'SV',
    component: () => import('Views/introduce/SV.vue'),
  },
  //제품
  {
    path: '/product/Search',
    name: 'Search',
    component: () => import('Views/product/Search.vue'),
  },
  // Auto info
  {
    path: '/autoic/Company',
    name: 'Company',
    component: () => import('Views/autoic/Company.vue'),
  },
  // 고객지원
  {
    path: '/support/Notice',
    name: 'Notice',
    component: () => import('Views/support/Notice.vue'),
  },
  //Virtual R&D Lab
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
