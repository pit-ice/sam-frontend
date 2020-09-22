<template>
  <div class="login">
    <div class="wrap-login-error">
      <div class="txt-pw-error">
        <strong>비밀번호 재 설정 </strong>
        <p>비밀번호 설정 후 90일이 경과 되었습니다. 보안을 위하여 새로운 비밀번호를 설정 해 주시기 바랍니다.</p>
      </div>

      <dl class="list-form">
        <dt><label>현재 비밀번호 </label></dt>
        <dd><input type="password" id="" placeholder="영문, 숫자, 특수문자 조합 8자 이상" /></dd>
        <dt><label>신규 비밀번호 </label></dt>
        <dd><input type="password" id="" placeholder="영문, 숫자, 특수문자 조합 8자 이상" /></dd>
        <dt><label>신규 비밀번호 확인</label></dt>
        <dd>
          <input type="password" id="" placeholder="영문, 숫자, 특수문자 조합 8자 이상" />
        </dd>
      </dl>
      <p class="txt-point">※ 비밀번호를 확인해주세요.</p>

      <div class="wrap-btn">
        <router-link to="#" tag="button" class="btn btn-pw-next">다음에 변경</router-link>
        <router-link to="#" tag="button" class="btn btn-pw-donw">변경완료</router-link>
      </div>
    </div>
  </div>
</template>
