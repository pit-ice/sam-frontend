import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/LayoutMain'),
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
      {
        path: '/guide',
        name: 'Guide',
        component: () => import('Views/Guide.vue'),
      },
      {
        path: '/component',
        name: 'Component',
        component: () => import('Views/Component.vue'),
      },
    ],
  },
  {
    path: '/member',
    redirect: '/member/register',
    component: () => import('@/layout/LayoutSub'),
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
        path: 'register/indivisual/email',
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
    redirect: '/mypage/mypw',
    component: () => import('@/layout/LayoutSub'),
    children: [
      // 마이페이지
      {
        path: 'mypw',
        name: 'MyPw',
        component: () => import('Views/mypage/MyPw.vue'),
      },
      // 개인
      {
        path: '/mypage/myInfo',
        name: 'MyInfoIndivisual',
        component: () => import('Views/mypage/MyInfoIndivisual.vue'),
      },
      // 기업
      {
        path: '/mypage/myInfo',
        name: 'MyInfoBusiness',
        component: () => import('Views/mypage/MyInfoBusiness.vue'),
      },
    ],
  },

  {
    path: '/email/Email',
    component: () => import('Views/email/Email.vue'),
  },

  // 서브페이지
  {
    path: '/',
    component: () => import('@/layout/LayoutSub'),
    children: [
      // intro
      {
        path: '/introduce/About',
        name: 'About',
        component: () => import('Views/introduce/About.vue'),
      },
      {
        path: '/introduce/SV',
        name: 'SV',
        component: () => import('Views/introduce/About.vue'),
      },
      {
        path: '/introduce/RND',
        name: 'RND',
        component: () => import('Views/introduce/About.vue'),
      },
      {
        path: '/introduce/Partners',
        name: 'Partners',
        component: () => import('Views/introduce/About.vue'),
      },
      // product
      {
        path: '/product/PP',
        name: 'PP',
        component: () => import('Views/product/PP.vue'),
      },
      {
        path: '/product/POE',
        name: 'POE',
        component: () => import('Views/product/POE.vue'),
      },
      {
        path: '/product/EPDM',
        name: 'EPDM',
        component: () => import('Views/product/EPDM.vue'),
      },
      // info
      {
        path: '/autoic/Auto',
        name: 'Auto',
        component: () => import('Views/autoic/Auto.vue'),
      },
      {
        path: '/autoic/Material',
        name: 'Material',
        component: () => import('Views/autoic/Material.vue'),
      },
      {
        path: '/autoic/Partner',
        name: 'Partner',
        component: () => import('Views/autoic/Partner.vue'),
      },
      //Virtual R&D Lab
      {
        path: '/vrdlab/Introduce',
        name: 'Introduce',
        component: () => import('Views/vrdlab/Introduce.vue'),
      },
      {
        path: '/vrdlab/Execution',
        name: 'Execution',
        component: () => import('Views/vrdlab/Execution.vue'),
      },
      {
        path: '/vrdlab/Devjoin',
        name: 'Devjoin',
        component: () => import('Views/vrdlab/Devjoin.vue'),
      },
      // supoort
      {
        path: '/support/Faq',
        name: 'Faq',
        component: () => import('Views/support/Faq.vue'),
      },
      {
        path: '/support/Qna',
        name: 'Qna',
        component: () => import('Views/support/Qna.vue'),
      },
      {
        path: '/support/Tech',
        name: 'Tech',
        component: () => import('Views/support/Tech.vue'),
      },
    ],
  },
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

export default router;
