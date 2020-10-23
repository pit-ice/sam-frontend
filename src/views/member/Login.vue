<template>
  <div class="login">
    <BreadScrumb></BreadScrumb>
    <div class="title">
      <h3>로그인</h3>
      <p>SK종합화학에서 제공하는 다양한 서비스를 로그인 후 이용하실 수 있습니다.</p>
    </div>
    <fieldset class="login-form">
      <dl>
        <dt><label>사용자 </label></dt>
        <dd><input type="text" id="" name="" class="input big w-100" placeholder="아이디 입력" /></dd>
        <dt><label>비밀번호 확인</label></dt>
        <dd>
          <input type="password" id="" name="" class="input big w-100" placeholder="비밀번호 입력" />
        </dd>
      </dl>
      <div class="wrap-btn">
        <button class="btn btn-point big w-100">로그인</button>
      </div>
      <div class="wrap-link-find">
        <router-link to="/member/find">아이디 찾기</router-link>
        |
        <router-link to="/member/find">비밀번호 찾기</router-link>
        |
        <router-link to="/member/register">회원가입</router-link>
      </div>
    </fieldset>
  </div>
</template>

<script>
import BreadScrumb from '@/components/BreadScrumb.vue';

export default {
  components: {
    BreadScrumb,
  },
};
</script>
