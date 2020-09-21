import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store';

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
      // ID/PW찾기
      {
        path: 'find',
        name: 'FindIdPw',
        component: () => import('Views/member/FindIdPw.vue'),
      },
    ],
  },

  {
    path: '/mypage',
    redirect: '/mypage/mypw',
    component: () => import('@/layout/MainLayout'),
    children: [
      // 마이페이지
      {
        path: 'mypw',
        name: 'MyPw',
        component: () => import('Views/mypage/MyPw.vue'),
      },
      {
        path: '/mypage/myInfo',
        name: 'MyInfo',
        component: () => import('Views/mypage/MyInfo.vue'),
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
        // meta: { roles: ['admin'] },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/auth/login', '/auth/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  const isAuthenticated = store.state.auth.isAuthenticated;

  // 인증처리 (auth)
  if (authRequired && !isAuthenticated) {
    return next('/auth/login');
  }

  // 권한처리 (role)
  const lacksRole = to.matched.some((route) => {
    return route.meta.roles && !route.meta.roles.includes(store.state.auth.user.role);
  });
  if (lacksRole) {
    //TODO. 접근처리 추가 필요
    return next(false);
  }

  next();
});

export default router;
