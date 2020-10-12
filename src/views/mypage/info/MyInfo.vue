<template>
  <div class="mypage">
    <div class="title">
      <h3>정보 및 설정</h3>
      <p>정보 조회 및 나의 문의, 참여정보, 활동정보를 확인할 수 있습니다.</p>
    </div>

    <div class="wrap-myinfo">
      <b-tabs justified>
        <b-tab title="회원정보 조회 및 변경" active>
          <h4>가입자 정보</h4>
          <dl class="list-form">
            <dt><label>아이디</label></dt>
            <dd>{{ userInfo.MBR_ID }}</dd>
            <dt><label>가입자 명 </label></dt>
            <dd>{{ userInfo.MBR_NM }}</dd>
            <dt><label>비밀번호</label></dt>
            <dd>
              <button class="btn btn-email-certifi" @click="modalShow = true">비밀번호 변경</button>
            </dd>
            <dt>
              <label>이메일 주소</label>
            </dt>
            <dd>{{ userInfo.EMAIL_ADDR }}</dd>
          </dl>
          <div class="wrap-btn">
            <button class="btn btn-cancel">취소</button>
            <button @click="changePassword" class="btn btn-confirm">확인</button>
          </div>
        </b-tab>
        <b-tab title="기술지원/문의내역">
          <my-inquire></my-inquire>
        </b-tab>
      </b-tabs>
    </div>
    <b-modal v-model="modalShow" title="비밀번호 변경" centered :hide-footer="true">
      <change-password @completed="modalShow = false"></change-password>
    </b-modal>
  </div>
</template>

<script>
import MyInquire from './MyInquire';
import ChangePassword from './ChangePassword';

export default {
  components: {
    MyInquire,
    ChangePassword,
  },
  data() {
    return {
      show: false,
      password: '',
      newPassword: '',
      confirmNewPassword: '',
      modalShow: false,
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
    changePassword() {
      let data = {
        password: this.password,
        newPassword: this.newPassword,
      };
      this.$store
        .dispatch('auth/changePassword', data)
        .then(() => {
          alert('변경되었습니다.');
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
