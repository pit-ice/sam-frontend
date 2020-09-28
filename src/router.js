import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/store';
import { Role } from '@/constant';

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
        meta: { authorize: [Role.Admin] },
      },
      {
        path: '/guide',
        name: 'Guide',
        component: () => import('Views/Guide.vue'),
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
      // 회원가입 - 기업회원 - 기업구성원가입
      {
        path: 'register/general/info',
        name: 'RegisterGeneralInfo',
        component: () => import('Views/member/RegisterGeneralInfo.vue'),
      },
      {
        path: 'register/general/done',
        name: 'RegisterGeneralDone',
        component: () => import('Views/member/RegisterGeneralDone.vue'),
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
      // 이메일 미인증
      {
        path: 'register/indivisual/email/:key/:mbrNo',
        name: 'RegisterIndivisualEmail',
        component: () => import('Views/member/RegisterIndivisualEmail.vue'),
      },
      {
        path: 'register/indivisual/emailExpire',
        name: 'RegisterIndivisualEmailExpire',
        component: () => import('Views/member/RegisterIndivisualEmailExpire.vue'),
      },
      // 개인회원 초대수락
      {
        path: 'register/indivisual/invite',
        name: 'RegisterIndivisualInvite',
        component: () => import('Views/member/RegisterIndivisualInvite.vue'),
      },
      // 로그인
      {
        path: 'login',
        name: 'Login',
        component: () => import('Views/member/Login.vue'),
      },
      // 로그아웃
      {
        path: 'logout',
        name: 'Logout',
        component: () => import('Views/member/Logout.vue'),
      },
      // ID/PW찾기
      {
        path: 'find',
        name: 'FindIdPw',
        component: () => import('Views/member/FindIdPw.vue'),
      },
      // 로그인 비번오류 메일발송
      {
        path: 'loginErrorEmail',
        name: 'LoginErrorEmail',
        component: () => import('Views/member/LoginErrorEmail.vue'),
      },
      // 로그인 비번오류 재설정
      {
        path: 'loginErrorReset',
        name: 'LoginErrorReset',
        component: () => import('Views/member/LoginErrorReset.vue'),
      },
      // 로그인 비번 경과
      {
        path: 'loginExpire',
        name: 'LoginExpire',
        component: () => import('Views/member/LoginExpire.vue'),
      },
    ],
  },

  {
    path: '/mypage',
    redirect: '/mypage/info',
    component: () => import('@/layout/MainLayout'),
    children: [
      // 마이페이지
      {
        path: 'confirm',
        name: 'MyPw',
        component: () => import('Views/mypage/MyPw.vue'),
        meta: {
          authorize: [],
        },
      },
      // 개인
      {
        path: 'info',
        name: 'MyInfoIndivisual',
        component: () => import('Views/mypage/info/MyInfo.vue'),
      },
      // 기업
      {
        path: 'info-biz',
        name: 'MyInfoBusiness',
        component: () => import('Views/mypage/MyInfoBusiness.vue'),
      },
    ],
  },

  {
    path: '/email/Email',
    component: () => import('Views/email/Email.vue'),
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
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 화면 이동시 상단으로 스크롤 처리
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const { authorize } = to.meta;
  const isAuthenticated = store.state.auth.isAuthenticated;

  if (authorize) {
    if (!isAuthenticated) {
      return next({ path: '/member/login', query: { returnUrl: to.path } });
    }

    if (authorize.length && !authorize.includes(store.state.auth.role)) {
      return next({ path: '/' });
    }
  }

  next();
});

export default router;
