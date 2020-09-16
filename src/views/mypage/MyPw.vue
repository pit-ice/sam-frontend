<template>
  <div class="mypage">
    <div class="title">
      <h3>정보 및 설정</h3>
      <p>정보 조회 및 나의 문의, 참여정보, 활동정보를 확인할 수 있습니다.</p>
    </div>

    <div class="wrap-mypw">
      <p class="stit">나의 정보 및 활동 확인을 위한 비밀번호를 입력 해 주세요.</p>

      <dl>
        <dt>아이디</dt>
        <dd><strong>ABCD</strong></dd>
        <dt>비밀번호</dt>
        <dd><input type="password" id="" name="" placeholder="비밀번호 입력" /></dd>
      </dl>
      <div class="wrap-btn">
        <router-link to="/mypage/myInfo" tag="button" class="btn btn-confirm">확인</router-link>
      </div>
    </div>
  </div>
</template>
