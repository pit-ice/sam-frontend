<template>
  <div class="mypage">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
    };
  },
  computed: {
    verifyResult() {
      return 'result.....';
    },
    userInfo() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    verifyPassword() {
      this.$store
        .dispatch('member/verifyPassword', this.password)
        .then(() => {
          this.$router.push('/mypage/info');
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
