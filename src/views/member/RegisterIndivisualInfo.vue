<template>
  <div class="register">
    <div class="title">
      <h3>회원가입 - 개인</h3>
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
      <div class="wrap-reg-form2">
        <label>기업코드 입력 </label>
        <input type="text" id="" placeholder="기업코드" />
        <button class="btn">기업코드 입력</button>
        <button class="btn">기업코드발급</button>
        <br />

        <label>아이디</label>
        <input type="text" id="" placeholder="영문 또는 숫자 20자 이내" />
        <button class="btn">중복확인</button>
        <br />

        <label>비밀번호</label>
        <input type="password" id="" placeholder="영문, 숫자, 특수문자 조합 8자 이상" />
        <br />

        <label>비밀번호 확인</label>
        <input type="password" id="" placeholder="영문, 숫자, 특수문자 조합 8자 이상" />
        <span class="txt-point">※ 비밀번호를 확인해주세요.</span>
        <br />

        <label>이메일 주소</label>
        <input type="text" id="" placeholder="이메일주소 입력" />
        <span class="txt-gray">※ 입력한 이메일 주소로 인증메일이 발송됩니다.</span>
        <br />

        <label>이름 </label>
        <input type="text" id="" placeholder="이름 입력" />
        <br />

        <label>부서명 </label>
        <input type="text" id="" placeholder="부서명을 입력하세요." />
        <br />

        <label>직위 </label>
        <input type="text" id="" placeholder="부서명을 입력하세요." />
        <br />
      </div>
      <div class="wrap-btn">
        <button class="btn btn-cancel">취소</button>
        <router-link to="/member/register/indivisual/done" tag="button" class="btn btn-regist">가입신청</router-link>
      </div>
    </div>
  </div>
</template>
