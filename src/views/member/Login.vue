<template>
  <div class="login">
    <div class="title">
      <h3>로그인</h3>
      <p>SK종합화학에서 제공하는 다양한 서비스를 로그인 후 이용하실 수 있습니다.</p>
    </div>

    <fieldset class="login-form">
      <dl class="list-form">
        <dt><label>사용자 </label></dt>
        <dd><input type="text" id="" name="" placeholder="아이디 입력" /></dd>
        <dt><label>비밀번호 확인</label></dt>
        <dd>
          <input type="password" id="" name="" placeholder="비밀번호 입력" />
        </dd>
      </dl>

      <p class="txt_error">아이디 또는 비밀번호를 잘못 입력하셨습니다.</p>
      <div class="login-util">
        <div class="keep-login">
          <input type="checkbox" name="" id="keep-login" class="checkbox3" />
          <label for="keep-login"><span class="icon"></span>로그인 저장</label>
        </div>
      </div>
      <div class="wrap-btn">
        <button class="btn btn-login">로그인</button>
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
  </div>
</template>
