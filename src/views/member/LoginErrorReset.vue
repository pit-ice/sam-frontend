<template>
  <div class="login">
    <div class="title">
      <h3>비밀번호 재 설정</h3>
    </div>
    <div class="wrap-login-error">
      <div class="txt-pw-error">
        <p>
          새로 사용하실 비밀번호와<br />
          입력한 비밀번호를 확인 후 "변경" 버튼을 선택해 주세요.
        </p>
      </div>
      <ValidationObserver ref="form" v-slot="{ invalid }">
        <form name="form" @submit.prevent="onSubmit">
          <fieldset class="login-form">
            <dl class="list-form">
              <dt><label>비밀번호 </label></dt>
              <dd>
                <ValidationProvider
                  name="비밀번호"
                  :rules="{ required: true, regex: [/^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$/], min: 6, max: 20 }"
                  v-slot="{ errors }"
                >
                  <input type="password" v-model="password" placeholder="영문, 숫자, 특수문자 조합 8자 이상" />
                  <span class="txt-point" v-if="errors[0]">※ {{ errors[0] }}</span>
                </ValidationProvider>
              </dd>
              <dt><label>비밀번호 확인</label></dt>
              <dd>
                <ValidationProvider name="비밀번호 확인" rules="required|confirmed:비밀번호" v-slot="{ errors }">
                  <input type="password" v-model="confirmPassword" placeholder="영문, 숫자, 특수문자 조합 8자 이상" />
                  <span v-if="errors[0]" class="txt-point">※ {{ errors[0] }}</span>
                </ValidationProvider>
              </dd>
              <p class="txt-point">※ 비밀번호를 확인해주세요.</p>
            </dl>

            <div class="wrap-btn">
              <button tag="button" :disabled="invalid" class="btn btn-pw-chng">변경</button>
            </div>
          </fieldset>
        </form>
      </ValidationObserver>
    </div>
    <b-modal title="알림" v-model="showCompleteModal" @ok="onOk">
      <p class="my-4">{{ message }}</p>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: '',
      confirmPassword: '',
      message: '',
      showCompleteModal: false,
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }

        let key = this.$route.params.key;
        let memberId = this.$route.params.memberid;
        console.log(key);
        console.log(memberId);

        this.$store.dispatch('member/resetPassword', { key: key, memberId: memberId, password: this.password }).then(
          () => {
            this.message = this.$store.state.member.msg;
            this.showCompleteModal = true;
          },
          (error) => {
            alert(error.message);
          }
        );

        this.id = this.password = this.confirmPassword = this.email = this.name = '';
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },
    onOk() {
      this.$router.push('/member/login');
    },
  },
};
</script>
