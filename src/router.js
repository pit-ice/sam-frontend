import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store';
import Sample from 'Views/Sample.vue';
import Fileupload from 'Views/Fileupload.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FullPage'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('Views/Home.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('@/layouts/FullPage'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('Views/auth/Login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('Views/auth/Register.vue'),
      },
      {
        path: 'logout',
        name: 'Logout',
        component: () => import('Views/auth/Logout.vue'),
      },
    ],
  },
  {
    path: '/support',
    component: () => import('@/layouts/FullPage'),
    children: [
      {
        path: 'faq',
        name: 'Faq',
        component: () => import('Views/support/Faq.vue'),
      },
    ],
  },
  {
    path: '/sample',
    name: 'Sample',
    component: Sample,
    meta: { roles: ['admin'] },
  },
  {
    path: '/file',
    name: 'Fileupload',
    component: Fileupload,
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
