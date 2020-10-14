<template>
  <div class="support">
    <BreadScrumb></BreadScrumb>
    <div class="title">
      <h3>Support</h3>
      <p>물성, 소재, 기술개발 등의 분야에 문의 응답 및 문제 해결을 해 드립니다.</p>
    </div>

    <div class="wrap-qna">
      <h4>문의하기</h4>
      <dl class="list-form">
        <dt><label>분류 </label></dt>
        <dd>
          <div class="wrap-radio">
            <input type="radio" name="rd" id="rd1" />
            <label class="radio" for="rd1"><span class="icon"></span>일반 문의</label>
            <input type="radio" name="rd" id="rd2" class="radio" />
            <label class="radio" for="rd2"><span class="icon"></span>기술지원</label>
            <input type="radio" name="rd" id="rd3" class="radio" />
            <label class="radio" for="rd3"><span class="icon"></span>파트너</label>
          </div>
        </dd>
        <dt><label>산업유형</label></dt>
        <dd>
          <select name="" id="">
            <option value=""></option>
          </select>
        </dd>
        <dt><label>파트너 유형</label></dt>
        <dd>
          <select name="" id="" disabled>
            <option value=""></option>
          </select>
        </dd>
        <dt><label>담당자 성명</label></dt>
        <dd><input type="text" id="" placeholder="이름 입력" /></dd>
        <dt><label>담당자 연락처</label></dt>
        <dd><input type="text" id="" placeholder="-포함 입력 (예: 070-1234-5678)" /></dd>
        <dt><label>이메일 주소 </label></dt>
        <dd><input type="text" id="" placeholder="이메일 주소" /></dd>
        <dd>
          <textarea rows="5" placeholder="문의하실 내용이 있으면 입력해 주세요(최대200자이내)"></textarea>
        </dd>
      </dl>
      <div class="txt-agree">
        <input type="checkbox" id="ch" />
        <label class="checkbox" for="ch"><span class="icon"></span>개인정보수집에 동의 합니다.</label>
        <input type="checkbox" id="ch" />
        <label class="checkbox" for="ch"><span class="icon"></span>개인정보수집에 동의 합니다.</label>
      </div>
      <div class="wrap-btn">
        <button class="btn btn-cancel">취소</button>
        <button class="btn btn-confirm">등록</button>
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
};
</script>
