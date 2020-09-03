import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from 'Views/Login.vue';
import Register from 'Views/Register.vue';
import Sample from 'Views/Sample.vue';
import Faq from 'Views/Faq.vue';
import Logout from 'Views/Logout.vue';
import Header from 'Views/Header.vue';

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
    path: '/header',
    name: 'Header',
    component: Header,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
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

export default router;
