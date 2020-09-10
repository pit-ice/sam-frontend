<template>
  <div class="login">
    <div class="title">
      <h3>로그인</h3>
      <p>SK종합화학에서 제공하는 다양한 서비스를 로그인 후 이용하실 수 있습니다.</p>
    </div>

    <fieldset class="login-form">
      <dl>
        <dt>사용자</dt>
        <dd>
          <input type="text" id="" name="" placeholder="아이디 입력" />
        </dd>
        <dt>비밀번호</dt>
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
        <button class="btn btn-find-id">아이디 찾기</button>
        <button class="btn btn-find-pw">비밀번호 찾기</button>
        <router-link to="/member/Register" tag="button" class="btn btn-join">회원가입</router-link>
      </div>
    </fieldset>
  </div>
</template>
