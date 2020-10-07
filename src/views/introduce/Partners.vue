<template>
  <div class="about">
    <BreadScrumb></BreadScrumb>
    <div class="title">
      <h3>파트너 지원</h3>
      <p>SKGC의 소재 플랫폼의 파트너를 모십니다.</p>
    </div>

    <div class="wrap-partner">
      <h4>파트너 신청</h4>
      <dl class="list-form">
        <dt><label>산업유형</label></dt>
        <dd>
          <select>
            <option>선택</option>
          </select>
        </dd>
        <dt><label>파트너 유형</label></dt>
        <dd>
          <select>
            <option>선택</option>
          </select>
        </dd>
        <dt><label>담당자 성명</label></dt>
        <dd><input type="text" id="" /></dd>
        <dt><label>담당자 연락처</label></dt>
        <dd><input type="text" id="" /></dd>
        <dt><label>이메일 주소</label></dt>
        <dd><input type="text" id="" /></dd>
        <dt>문의 내용</dt>
        <dd>
          <textarea rows="5" placeholder="문의하실 내용이 있으면 입력해 주세요(최대200자이내)"></textarea>
        </dd>
      </dl>
      <div class="txt-agree">
        <input type="checkbox" id="ch" />
        <label class="checkbox" for="ch"><span class="icon"></span>모든 약관에 동의 합니다.</label>
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
