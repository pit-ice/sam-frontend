<template>
  <div class="login">
    <div class="title">
      <h3>로그인</h3>
      <p>SK종합화학에서 제공하는 다양한 서비스를 로그인 후 이용하실 수 있습니다.</p>
    </div>

    <ValidationObserver ref="form" v-slot="{ invalid }">
      <form name="form" @submit.prevent="onSubmit">
        <fieldset class="login-form">
          <dl class="list-form">
            <dt><label>사용자 </label></dt>
            <dd>
              <ValidationProvider name="userid" :rules="{ required: true, regex: [/^[A-Za-z0-9+]*$/], min: 6, max: 20 }" v-slot="{ errors }">
                <input v-model="userid" type="test" placeholder="아이디 입력" />
                <p class="txt_error" v-if="errors[0]">{{ errors[0] }}</p>
              </ValidationProvider>
            </dd>
            <dt><label>비밀번호 확인</label></dt>
            <dd>
              <ValidationProvider
                name="password"
                :rules="{ required: true, regex: [/^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$/], min: 6, max: 20 }"
                v-slot="{ errors }"
              >
                <input v-model="password" type="password" placeholder="비밀번호 입력" />
                <p class="txt_error" v-if="errors[0]">{{ errors[0] }}</p>
              </ValidationProvider>
            </dd>
          </dl>
          <!-- 
          <p class="txt_error">아이디 또는 비밀번호를 잘못 입력하셨습니다.</p>
          <div class="login-util">
            <div class="keep-login">
              <input type="checkbox" name="" id="keep-login" class="checkbox3" />
              <label for="keep-login"><span class="icon"></span>로그인 저장</label>
            </div>
          </div> -->
          <div class="wrap-btn">
            <button class="btn btn-login" :disabled="invalid" type="submit">로그인</button>
          </div>

          <div class="wrap-btn">
            <router-link to="/member/find" tag="button" class="btn btn-find-id">아이디 찾기</router-link>
            <router-link to="/member/find" tag="button" class="btn btn-find-pw">비밀번호 찾기</router-link>
            <router-link to="/member/register" tag="button" class="btn btn-join">회원가입</router-link>

            <br />

            <router-link to="/member/loginErrorEmail">비번오류 이메일발송</router-link><br />
            <router-link to="/member/loginErrorReset">비번오류 재설정</router-link><br />
            <router-link to="/member/loginExpire">비번90일 경과 재설정 </router-link>
          </div>
        </fieldset>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      userid: '',
      password: '',
      loading: false,
      message: '',
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }

        this.$store.dispatch('auth/login', { userid: this.userid, password: this.password }).then(
          () => {
            this.loading = false;
          },
          (error) => {
            alert(error.message);
          }
        );

        this.userid = this.password = '';
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },
  },
};
</script>
