<template>
  <div class="login">
    <div class="wrap-login-error">
      <div class="txt-pw-error">
        <strong>비밀번호 5회 오류로 재설정이 필요합니다. </strong>
        <p>
          회원가입 시 등록한 이메일 주소를 입력 후 이메일 발송 버튼을 선택 해 주세요. 발송 된 이메일에서 "비밀번호 재설정" 버튼선택 시 신규 비밀번호로
          재 설정 할 수있습니다.
        </p>
      </div>

      <dl class="list-form">
        <dt><label>이메일 주소 </label></dt>
        <dd><input type="text" id="" placeholder="이메일주소를 입력하세요." /></dd>
      </dl>

      <div class="wrap-btn">
        <router-link to="#" tag="button" class="btn btn-send-email">이메일 발송</router-link>
      </div>
    </div>
  </div>
</template>
