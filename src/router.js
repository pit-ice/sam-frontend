import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/MainLayout'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('Views/Home.vue'),
      },
      {
        path: '/sample',
        name: 'Sample',
        component: () => import('Views/Sample.vue'),
      },
    ],
  },
  {
    path: '/member',
    redirect: '/member/register',
    component: () => import('@/layout/MainLayout'),
    children: [
      // 회원가입
      {
        path: 'register',
        name: 'Register',
        component: () => import('Views/member/Register.vue'),
      },
      // 회원가입 - 기업회원
      {
        path: 'register/business/agreement',
        name: 'RegisterBusinessAgreement',
        component: () => import('Views/member/RegisterBusinessAgreement.vue'),
      },
      {
        path: 'register/business/info',
        name: 'RegisterBusinessInfo',
        component: () => import('Views/member/RegisterBusinessInfo.vue'),
      },
      {
        path: 'register/business/done',
        name: 'RegisterBusinessDone',
        component: () => import('Views/member/RegisterBusinessDone.vue'),
      },
      // 회원가입 - 개인회원
      {
        path: 'register/indivisual/agreement',
        name: 'RegisterIndivisualAgreement',
        component: () => import('Views/member/RegisterIndivisualAgreement.vue'),
      },
      {
        path: 'register/indivisual/info',
        name: 'RegisterIndivisualInfo',
        component: () => import('Views/member/RegisterIndivisualInfo.vue'),
      },
      {
        path: 'register/indivisual/done',
        name: 'RegisterIndivisualDone',
        component: () => import('Views/member/RegisterIndivisualDone.vue'),
      },
      // 로그인
      {
        path: 'login',
        name: 'Login',
        component: () => import('Views/member/Login.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layout/MainLayout'),
    children: [
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
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
