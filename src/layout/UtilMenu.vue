<template>
  <div class="util-menu">
    <h2 class="hidden">유틸메뉴</h2>
    <ul>
      <li>
        <span><router-link to="/member/register" tabindex="1">회원가입</router-link></span>
      </li>
      <li>
        <span><router-link to="/member/login" tabindex="1">로그인</router-link></span>
      </li>
      <li>
        <span><router-link to="/mypage/mypw" tabindex="1">정보및 설정</router-link></span>
      </li>
      <li>
        <span><a href="#" tabindex="1">로그아웃</a></span>
      </li>
    </ul>
  </div>
</template>
