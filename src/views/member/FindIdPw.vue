<template>
  <div class="find">
    <BreadScrumb></BreadScrumb>
    <div class="title">
      <h3>아이디 / 비밀번호 찾기</h3>
      <p>가입하신 이메일 정보를 통하여 아이디, 비밀번호를 확인하실 수 있습니다.</p>
    </div>

    <div class="wrap-find">
      <b-tabs justified>
        <b-tab title="아이디 찾기" active>
          <p class="stit">가입 시 입력한 이메일 주소를 이용하여 아이디를 조회할 수 있습니다.</p>
          <dl>
            <dt>이름</dt>
            <dd><input type="text" id="" name="" placeholder="이름을 입력하세요." /></dd>
            <dt>가입 이메일 주소</dt>
            <dd><input type="text" id="" name="" placeholder="이메일 주소를 입력하세요." /></dd>
          </dl>
          <div class="wrap-btn">
            <button class="btn btn-search-id">아이디 조회</button>
          </div>
        </b-tab>
        <b-tab title="비밀번호 찾기">
          <p class="stit">비밀번호 재설정을 위한 본인 확인을 진행합니다.</p>
          <dl>
            <dt>아이디</dt>
            <dd><input type="text" id="" name="" placeholder="아이디를 입력하세요." /></dd>
            <dt>이름</dt>
            <dd><input type="text" id="" name="" placeholder="이름을 입력하세요." /></dd>
            <dt>가입 이메일 주소</dt>
            <dd><input type="text" id="" name="" placeholder="이메일 주소를 입력하세요." /><button class="btn btn-send">인증번호 발송</button></dd>
            <dt>인증코드 입력</dt>
            <dd><input type="text" id="" name="" placeholder="인증코드 입력하세요." /><button class="btn btn-send">인증코드 확인</button></dd>
          </dl>
          <ul class="list-txt1">
            <li>※ 입력된 이메일주소로 발송된 인증코드를 입력해 주세요.</li>
            <li>※ 인증코드의 유효기간은 발급 후 10분입니다.</li>
          </ul>
          <div class="wrap-btn">
            <button class="btn btn-reset-pw">비밀번호 재설정</button>
          </div>
        </b-tab>
      </b-tabs>
    </div>
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
