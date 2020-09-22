<template>
  <div class="login">
    <div class="wrap-login-error">
      <div class="txt-pw-error">
        <strong>비밀번호 재 설정 </strong>
        <p>
          회원가입 시 등록한 이메일 주소를 입력 후 이메일 발송 버튼을 선택 해 주세요. 발송 된 이메일에서 "비밀번호 재설정" 버튼선택 시 신규 비밀번호로
          재 설정 할 수있습니다.
        </p>
      </div>

      <dl class="list-form">
        <dt><label>비밀번호 </label></dt>
        <dd><input type="password" id="" placeholder="영문, 숫자, 특수문자 조합 8자 이상" /></dd>
        <dt><label>비밀번호 확인</label></dt>
        <dd>
          <input type="password" id="" placeholder="영문, 숫자, 특수문자 조합 8자 이상" />
        </dd>
      </dl>
      <p class="txt-point">※ 비밀번호를 확인해주세요.</p>

      <div class="wrap-btn">
        <router-link to="#" tag="button" class="btn btn-pw-chng">변경</router-link>
      </div>
    </div>
  </div>
</template>
