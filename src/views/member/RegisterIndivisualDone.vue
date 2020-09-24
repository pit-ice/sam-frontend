<template>
  <div class="register">
    <BreadScrumb></BreadScrumb>

    <div class="title">
      <h3>회원가입 - 개인</h3>
      <p>세계속 종합 에너지 화학기업에서 제공하는 다양한 Solution 과 Machine Learning을 경험 해 보세요!</p>
    </div>

    <div class="wrap-process">
      <ul>
        <li><span>1</span>약관 동의</li>
        <li><span>2</span>정보 입력</li>
        <li class="on"><span>3</span>가입신청 완료</li>
      </ul>
    </div>

    <div class="wrap-reg-done">
      <div class="txt-done">
        회원가입이 완료 되었습니다. <br />가입시 입력 한 <strong>{{ member.emailAddr }}</strong> 이메일 인증 후 로그인 하실 수있습니다.
      </div>

      <dl class="list-form">
        <dt><label>이름</label></dt>
        <dd>{{ member.mbrId }}</dd>
        <dt><label>ID</label></dt>
        <dd>{{ member.mbrId }}</dd>
        <dt><label>이메일 주소</label></dt>
        <dd>{{ member.emailAddr }}</dd>
      </dl>
    </div>

    <div class="wrap-btn">
      <router-link to="/home" tag="button" class="btn btn-home">메인으로</router-link>
    </div>

    <router-link to="/member/register/indivisual/email" style="font-size: 11px">이메일_미인증후_로그인_유효기간상태</router-link><br />
    <router-link to="/member/register/indivisual/emailExpire" style="font-size: 11px">이메일_미인증후_로그인_유효기간만료</router-link>
  </div>
</template>

<script>
import BreadScrumb from '@/components/BreadScrumb.vue';

export default {
  computed: {
    member() {
      return this.$store.state.member.member;
    },
  },
  created() {
    this.$store.dispatch('member/memberdetail');
  },

  components: {
    BreadScrumb,
  },
};
</script>
