<template>
  <div class="signup-form">
    <ValidationObserver ref="form" v-slot="{ invalid }">
      <b-form name="form" @submit.prevent="onSubmit">
        <b-form-group>
          <ValidationProvider
            name="Password"
            :rules="{ required: true, regex: [/^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$/], min: 6, max: 20 }"
            v-slot="{ errors }"
          >
            <b-form-input class="form-control" v-model="password" type="password" placeholder="현재 비밀번호" />
            <span v-if="errors[0]" class="alert alert-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </b-form-group>
        <div class="form-group">
          <ValidationProvider
            name="NewPassword"
            :rules="{ required: true, regex: [/^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$/], min: 6, max: 20 }"
            v-slot="{ errors }"
          >
            <input class="form-control" v-model="newPassword" type="password" placeholder="신규 비밀번호" />
            <span v-if="errors[0]" class="alert alert-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider name="ConfirmNewPassword" rules="required|confirmed:비밀번호" v-slot="{ errors }">
            <input class="form-control" v-model="confirmNewPassword" type="password" placeholder="신규 비밀번호 확인" />
            <span v-if="errors[0]" class="alert alert-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success btn-lg btn-block" :disabled="invalid">변경</button>
        </div>
      </b-form>
    </ValidationObserver>
    <!-- 변경 완료 팝업 -->
    <b-modal title="알림" v-model="showCompleteModal">
      <p class="my-4">비밀번호 변경이 완료되었습니다!</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      newPassword: '',
      confirmNewPassword: '',
      showCompleteModal: false,
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }

        let data = { password: this.password, newPassword: this.newPassword };
        this.$store.dispatch('auth/changePassword', data).then(
          () => {
            this.showCompleteModal = true;
            this.$emit('completed');
          },
          (error) => {
            alert(error.message);
          }
        );

        this.email = this.password = this.confirmPassword = '';
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },
  },
};
</script>
