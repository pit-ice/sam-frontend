<template>
  <div class="register">
    <BreadScrumb></BreadScrumb>

    <div class="title">
      <h3>회원가입 - 기업</h3>
      <p>세계속 종합 에너지 화학기업에서 제공하는 다양한 Solution 과 Machine Learning을 경험 해 보세요!</p>
    </div>

    <div class="wrap-process">
      <ul>
        <li><span>1</span>정보 입력</li>
        <li class="on"><span>2</span>약관 동의</li>
        <li><span>3</span>가입신청 완료</li>
      </ul>
    </div>

    <div class="wrap-reg-form">
      <h4>회사 정보 입력</h4>
      <dl class="list-form">
        <dt><label>회사명</label></dt>
        <dd>
          <input type="text" id="" placeholder="회사명" />
        </dd>
        <dt><label>사업자 등록 번호</label></dt>
        <dd>
          <input type="text" id="" placeholder="사업자 등록 번호" />
        </dd>
        <dt><label>회사 전화번호</label></dt>
        <dd>
          <input type="text" id="" placeholder="-포함 입력 (예: 020-123-4567)" />
        </dd>
        <dt><label>관리 담당자 명</label></dt>
        <dd>
          <input type="text" id="" placeholder="관리 담당자 이름" />
        </dd>
        <dt><label>부서 명</label></dt>
        <dd>
          <input type="text" id="" placeholder="부서 또는 소속팀명 입력" />
        </dd>
        <dt><label>직위 · 직급</label></dt>
        <dd>
          <input type="text" id="" placeholder="직위 또는 직급 입력" />
        </dd>
        <dt><label>이메일 주소</label></dt>
        <dd>
          <input type="text" id="" />@
          <input type="text" id="" />
          <select name="" id="">
            <option value="">직접입력</option>
          </select>
        </dd>
        <dt><label>주소</label></dt>
        <dd>
          <div><input type="text" id="" placeholder="우편번호" /> <button class="btn btn-zipcode">우편번호 검색</button></div>
          <div><input type="text" id="" placeholder="기본주소" /></div>
          <div><input type="text" id="" placeholder="상세주소" /></div>
        </dd>
        <dt><label>회사 CI 등록</label></dt>
        <dd>
          <input type="file" id="" />
          <ul class="wrap-file-attach">
            <li>
              <a href="#">abcas.png</a>
              <button class="btn btn-del-file">삭제</button>
            </li>
            <li>
              <a href="#">abcas.png</a>
              <button class="btn btn-del-file">삭제</button>
            </li>
          </ul>
          <p class="txt-point">※용량 200kb 이하, 확장자 jpg, jpge, gif, png 이미지만 등록 가능 합니다.</p>
        </dd>
      </dl>

      <h4>개인정보 입력</h4>
      <dl class="list-form">
        <dt><label>아이디</label></dt>
        <dd>
          <input type="text" id="" placeholder="영문 또는 숫자 20자 이내" />
          <button class="btn">중복확인</button>
        </dd>

        <dt><label>비밀번호</label></dt>
        <dd><input type="password" id="" placeholder="영문, 숫자, 특수문자 조합 8자 이상" /></dd>

        <dt><label>비밀번호 확인</label></dt>
        <dd>
          <input type="password" id="" placeholder="영문, 숫자, 특수문자 조합 8자 이상" /> <span class="txt-point">※ 비밀번호를 확인해주세요.</span>
        </dd>
        <dt>
          <label>이메일 주소</label>
        </dt>
        <dd>
          <input type="checkbox" id="ch" />
          <label class="checkbox" for="ch"><span class="icon"></span>담당자와 동일</label>
          <br />

          <input type="text" id="" />@
          <input type="text" id="" />
          <select name="" id="">
            <option value="">직접입력</option>
          </select>
          <button class="btn btn-email-certifi">이메일 인증</button>
          <span class="email-cerifi-done">인증 완료</span>
        </dd>
        <dt><label>이름 </label></dt>
        <dd><input type="text" id="" placeholder="이름 입력" /></dd>
        <dt><label>휴대전화번호 </label></dt>
        <dd><input type="text" id="" placeholder="휴대전화번호를 입력하세요." /></dd>
        <dt><label>부서명 </label></dt>
        <dd><input type="text" id="" placeholder="부서명을 입력하세요." /></dd>
        <dt><label>직위 </label></dt>
        <dd><input type="text" id="" placeholder="직위를 입력하세요." /></dd>
      </dl>
      <div class="wrap-btn">
        <button class="btn btn-cancel">취소</button>
        <router-link to="/member/register/business/done" tag="button" class="btn btn-regist">가입승인신청</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BreadScrumb from '@/components/BreadScrumb.vue';

export default {
  components: {
    BreadScrumb,
  },
  data: function () {
    return {
      isShow: false,
    };
  },
};
</script>
