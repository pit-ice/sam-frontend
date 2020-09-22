<template>
  <div class="register">
    <BreadScrumb></BreadScrumb>

    <div class="title">
      <h3>회원가입 - 기업구성원</h3>
      <p>세계속 종합 에너지 화학기업에서 제공하는 다양한 Solution 과 Machine Learning을 경험 해 보세요!</p>
    </div>

    <div class="wrap-process">
      <ul>
        <li><span>1</span>정보 입력</li>
        <li><span>2</span>약관 동의</li>
        <li class="on"><span>3</span>가입신청 완료</li>
      </ul>
    </div>

    <div class="wrap-reg-done">
      <div class="txt-done">회원가입이 완료 되었습니다. <br />로그인 후 더 많은 서비스를 이용 해 보세요.</div>

      <h4>가입 신청 회사 정보</h4>
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

      <h4>기업 구성원 가입정보</h4>
      <dl class="list-form">
        <dt><label>이름</label></dt>
        <dd>이선호</dd>
        <dt><label>ID</label></dt>
        <dd>abcd</dd>
        <dt><label>휴대전화번호</label></dt>
        <dd>010-213-1231</dd>
        <dt><label>이메일 주소</label></dt>
        <dd>asd@asd.com</dd>
        <dt><label>부서 명 </label></dt>
        <dd>신소재연구소</dd>
        <dt><label>직위 · 직급 </label></dt>
        <dd>flatty@cepla.co.kr</dd>
      </dl>
      <p class="txt-point">※ 발급신청 심사는 최대 3일까지 소요될 수 있습니다.</p>
    </div>

    <div class="wrap-btn">
      <router-link to="/home" tag="button" class="btn btn-home">메인으로</router-link>
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
