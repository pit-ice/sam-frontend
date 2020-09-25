<template>
  <div class="util-menu">
    <span v-if="!loggedIn"><router-link to="/member/register">회원가입</router-link></span>
    <span v-if="!loggedIn"><router-link to="/member/login">로그인</router-link></span>
    <span v-if="loggedIn">
      <router-link to="/mypage/confirm">
        마이페이지
        <b-badge variant="light">4</b-badge>
      </router-link>
    </span>
    <span v-if="loggedIn"><router-link to="/member/logout">로그아웃</router-link></span>
    <span v-if="isAdmin"><router-link to="/">ADMIN</router-link></span>
  </div>
</template>

<script>
import { Role } from '@/constant';

export default {
  computed: {
    loggedIn() {
      return this.$store.state.auth.isAuthenticated;
    },
    isAdmin() {
      return this.$store.state.auth.role == Role.Admin;
    },
  },
};
</script>
