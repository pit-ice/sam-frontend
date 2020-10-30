<template>
  <div class="login">
    <div class="title">
      <h3>비밀번호 5회 오류로 재설정이 필요합니다.</h3>
    </div>
    <div class="wrap-login-error">
      <div class="txt-pw-error">
        <p>
          회원가입 시 등록한 이메일 주소를 입력 후<br />
          이메일 발송 버튼을 선택 해 주세요.<br />
          발송 된 이메일에서 "비밀번호 재설정" 버튼선택 시 <br />
          신규 비밀번호로 재 설정 할 수 있습니다.
        </p>
      </div>
      <ValidationObserver ref="form" v-slot="{ invalid }">
        <form name="form" @submit.prevent="onSubmit">
          <fieldset class="login-form">
            <dl class="list-form">
              <ValidationProvider name="아이디" :rules="{ required: true }" v-slot="{ errors }">
                <dt><label>아이디</label></dt>
                <dd>
                  <input type="text" v-model="memberId" placeholder="아이디를 입력하세요." />
                  <p class="txt_error" v-if="errors[0]">{{ errors[0] }}</p>
                </dd>
              </ValidationProvider>
              <ValidationProvider name="이름" :rules="{ required: true }" v-slot="{ errors }">
                <dt><label>이름</label></dt>
                <dd>
                  <input type="text" v-model="name" placeholder="이름을 입력하세요." />
                  <p class="txt_error" v-if="errors[0]">{{ errors[0] }}</p>
                </dd>
              </ValidationProvider>
              <ValidationProvider name="이메일" :rules="{ required: true, email: true }" v-slot="{ errors }">
                <dt><label>가입 이메일 주소 </label></dt>
                <dd>
                  <input type="text" v-model="email" placeholder="이메일주소를 입력하세요." />
                  <p class="txt_error" v-if="errors[0]">{{ errors[0] }}</p>
                </dd>
              </ValidationProvider>
            </dl>
            <div class="wrap-btn">
              <button :disabled="invalid" tag="button" class="btn btn-send-email">이메일 발송</button>
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
  name: 'LoginErrorEmail',
  data() {
    return {
      memberId: '',
      name: '',
      email: '',
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
        this.$store.dispatch('member/loginErrorEmailCheck', { memberId: this.memberId, name: this.name, email: this.email }).then(() => {
          this.loading = false;
          this.message = this.$store.state.member.msg;
          this.showCompleteModal = true;
        });

        this.memberId = this.name = this.email = '';
        this.$router.push('/member/login');
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
