<template>
  <div class="mypage">
    <BreadScrumb></BreadScrumb>
    <div class="title">
      <h3>정보 및 설정</h3>
      <p>정보 조회 및 나의 문의, 참여정보, 활동정보를 확인할 수 있습니다.</p>
    </div>

    <div class="wrap-mypw">
      <p class="stit">나의 정보 및 활동 확인을 위한 비밀번호를 입력 해 주세요.</p>

      <dl class="list-form">
        <dt>아이디</dt>
        <dd>
          <strong>{{ userInfo.mbrId }}</strong>
        </dd>
        <dt>비밀번호</dt>
        <dd><input type="password" v-model="password" placeholder="비밀번호 입력" /></dd>
      </dl>
      <div class="wrap-btn">
        <button class="btn btn-confirm" @click="verifyPassword">확인</button>
      </div>
    </div>
    <vue-recaptcha ref="recaptcha" sitekey="6LeNgs8ZAAAAAEsbfPVS9TU0OUjx5AOBAeaV0G4U" :loadRecaptchaScript="true" @verify="onVerify"></vue-recaptcha>
    <!-- 패스워드확인 결과 팝업 -->
    <b-modal title="알림" v-model="showCompleteModal" @ok="onOk">
      <p class="my-4">{{ verifyMsg }}</p>
    </b-modal>
    <b-modal v-model="rechaModal" ok-only>
      <p>로봇이 아닙니다를 확인해주세요.</p>
    </b-modal>
  </div>
</template>
<script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script>
<script>
import BreadScrumb from '@/components/BreadScrumb.vue';
import VueRecaptcha from 'vue-recaptcha';
export default {
  data() {
    return {
      password: '',
      showCompleteModal: false,
      rechaModal: false,
      recaptcha: true,
      response: '',
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.auth.user;
    },
    verifyMsg() {
      return this.$store.state.member.msg;
    },
    verifyStatus() {
      return this.$store.state.member.status;
    },
  },
  methods: {
    onVerify(r) {
      if (r) {
        this.response = r;
        this.recaptcha = false;
      }
    },
    verifyPassword() {
      if (this.recaptcha) {
        return (this.rechaModal = true);
      }

      let body = { password: this.password, r: this.response };

      this.$store
        .dispatch('member/verifyPassword', body)
        .then(() => {
          this.showCompleteModal = true;
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    onOk() {
      this.$emit('completed');
    },
  },
  components: {
    BreadScrumb,
    VueRecaptcha,
  },
};
</script>
