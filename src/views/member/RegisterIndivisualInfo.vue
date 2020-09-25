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
        <li class="on"><span>2</span>정보 입력</li>
        <li><span>3</span>가입신청 완료</li>
      </ul>
    </div>

    <div class="wrap-reg-form">
      <h4>개인정보 입력</h4>
      <ValidationObserver ref="form" v-slot="{ invalid }">
        <dl class="list-form">
          <dt><label>아이디</label></dt>
          <dd>
            <ValidationProvider name="아이디" :rules="{ required: true, regex: [/^[A-Za-z0-9+]*$/], min: 6, max: 20 }" v-slot="{ errors }">
              <input type="text" v-model="id" placeholder="영문 또는 숫자 6자-20자" />
              <button class="btn" @click="idDuplication">중복확인</button>
              <span v-if="errors[0]" class="txt-point">※ {{ errors[0] }}</span>
              <span v-if="idStatus == 200" class="txt-point">※ {{ '이미 존재하는 ID입니다.' }}</span>
              <span v-if="idStatus == 404" class="txt-point">※ {{ '사용가능한 ID입니다.' }}</span>
            </ValidationProvider>
          </dd>

          <dt><label>비밀번호</label></dt>
          <dd>
            <ValidationProvider
              name="비밀번호"
              :rules="{ required: true, regex: [/^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$/], min: 6, max: 20 }"
              v-slot="{ errors }"
            >
              <input type="password" v-model="password" placeholder="영문 대문자, 소문자, 숫자, 특수문자가 최소 하나 이상 조합 6자-20자" />
              <span v-if="errors[0]" class="txt-point">※ {{ errors[0] }}</span>
            </ValidationProvider>
          </dd>

          <dt><label>비밀번호 확인</label></dt>
          <dd>
            <ValidationProvider name="비밀번호 확인" rules="required|confirmed:비밀번호" v-slot="{ errors }">
              <input type="password" v-model="confirmPassword" placeholder="영문 대문자, 소문자, 숫자, 특수문자가 최소 하나 이상 조합 6자-20자" />
              <span v-if="errors[0]" class="txt-point">※ {{ errors[0] }}</span>
            </ValidationProvider>
          </dd>
          <dt>
            <label>이메일 주소</label>
          </dt>
          <dd>
            <ValidationProvider name="이메일 주소" rules="required|email" v-slot="{ errors }">
              <input type="text" v-model="email" placeholder="이메일주소 입력" />
              <button class="btn" @click="emailDuplication">중복확인</button>
              <span class="txt-gray">※ 입력한 이메일 주소로 인증메일이 발송됩니다.</span>
              <span v-if="errors[0]" class="txt-point">※ {{ errors[0] }}</span>
              <span v-if="emailStatus == 200" class="txt-point">※ {{ '이미 존재하는 Email입니다.' }}</span>
              <span v-if="emailStatus == 404" class="txt-point">※ {{ '사용가능한 Email입니다.' }}</span>
            </ValidationProvider>
          </dd>
          <dt><label>이름 </label></dt>
          <dd>
            <ValidationProvider name="이름" rules="required" v-slot="{ errors }">
              <input type="text" v-model="name" placeholder="이름 입력" />
              <span v-if="errors[0]" class="txt-point">※ {{ errors[0] }}</span>
            </ValidationProvider>
          </dd>
        </dl>

        <div class="wrap-btn">
          <button class="btn btn-cancel" @click="resetForm">취소</button>
          <button class="btn btn-regist" @click="onSubmit" :disabled="invalid || isDupId || isDupEmail">가입신청</button>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import BreadScrumb from '@/components/BreadScrumb.vue';

export default {
  data() {
    return {
      id: '',
      password: '',
      confirmPassword: '',
      email: '',
      name: '',
    };
  },
  computed: {
    idStatus() {
      return this.$store.state.member.idStatus;
    },
    emailStatus() {
      return this.$store.state.member.emailStatus;
    },
    isDupId() {
      return this.$store.state.member.isDupId;
    },
    isDupEmail() {
      return this.$store.state.member.isDupEmail;
    },
  },
  methods: {
    resetForm() {
      const result = confirm('회원가입을취소하시겠습니까? 확인버튼 선택 시 입력한 모든 정보가 삭제 됩니다.');

      if (result) {
        this.id = this.password = this.confirmPassword = this.email = this.name = '';
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      }
    },
    idDuplication() {
      let registerId = { id: this.id };
      this.$store.dispatch('member/idDuplication', registerId);
    },
    emailDuplication() {
      let registerId = { email: this.email };
      this.$store.dispatch('member/emailDuplication', registerId);
    },
    onSubmit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }
        let registerUser = { id: this.id, password: this.password, email: this.email, name: this.name };

        this.$store.dispatch('member/register', registerUser).then(
          () => {
            this.$router.push('/member/register/indivisual/done');
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
  },
  components: {
    BreadScrumb,
  },
};
</script>
