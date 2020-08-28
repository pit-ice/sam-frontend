import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from 'Views/Login.vue';
import Register from 'Views/Register.vue';
import Sample from 'Views/Sample.vue';
import Faq from 'Views/Faq.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ 'Views/Home.vue'),
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
    path: '/register',
    name: 'Register',
    component: Register,
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

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;