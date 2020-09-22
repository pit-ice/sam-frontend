<template>
  <div class="register">
    <div class="wrap-invite">
      <div class="txt-invite">
        <img src="@/assets/img/logo.png" style="width: 150px" />
        <p>주식회사 세프라에서 최찬희 님을 기업 구성원으로 초대하였습니다.</p>
      </div>

      <h4>초대 회사 정보</h4>
      <dl class="list-form">
        <dt><label>기업 CI</label></dt>
        <dd><img src="@/assets/img/logo.png" style="width: 50px" /></dd>
        <dt><label>회사명</label></dt>
        <dd>주식회사 세프라</dd>
        <dt><label>사업자 등록 번호</label></dt>
        <dd>123-123-***</dd>
        <dt><label>회사 전화번호</label></dt>
        <dd>010-213-1231</dd>
        <dt><label>관리 담당자 명</label></dt>
        <dd>홍길동</dd>
        <dt><label>부서 명</label></dt>
        <dd>서비스팀</dd>
        <dt><label>직위 · 직급</label></dt>
        <dd>대리</dd>
        <dt><label>이메일 주소</label></dt>
        <dd>abs@asd.com</dd>
        <dt><label>주소</label></dt>
        <dd>
          (우)123-123<br />
          서울시 강동구 강동아파트 120동
        </dd>
      </dl>
      <p class="txt-point">※ 초대 수락 시 초대한 기업의 구성원으로 기업 전용 시뮬레이션 이용이 가능합니다.</p>

      <div class="wrap-btn">
        <router-link to="/member/register/indivisual/agreement" tag="button" class="btn btn-home">초대수락</router-link>
      </div>
    </div>
  </div>
</template>
