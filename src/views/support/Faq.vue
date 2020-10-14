<template>
  <div class="support">
    <BreadScrumb></BreadScrumb>
    <div class="title">
      <h3>Support</h3>
      <p>물성, 소재, 기술개발 등의 분야에 문의 응답 및 문제 해결을 해 드립니다.</p>
    </div>

    <div class="wrap-help">
      <fieldset>
        <input type="text" id="" placeholder="궁금한 점이 있다면 도움말을 검색해보세요." />
        <button class="btn btn-search">검색</button>
      </fieldset>
    </div>

    <div class="wrap-faq">
      <div class="wrap-faq-sort">
        <button @click="selected = 1" :class="{ active: selected == 1 }">전체</button>
        <button @click="selected = 2" :class="{ active: selected == 2 }">제품</button>
        <button @click="selected = 3" :class="{ active: selected == 3 }">소개</button>
      </div>

      <div class="faq-list" role="collapse">
        <ul>
          <li>
            <dl class="faq-head">
              <dt><span>제품</span></dt>
              <dd v-b-toggle.accordion-1>제품 분류기준이 어떻게 되나요?</dd>
            </dl>
            <b-collapse id="accordion-1" accordion="my-accordion">
              <div class="faq-cnt">안녕하세요. 답변 입니다.</div>
            </b-collapse>
          </li>
          <li>
            <dl class="faq-head">
              <dt><span>소개</span></dt>
              <dd v-b-toggle.accordion-2>제품 분류기준이 어떻게 되나요?</dd>
            </dl>
            <b-collapse id="accordion-2" accordion="my-accordion">
              <div class="faq-cnt">안녕하세요. 답변 입니다.</div>
            </b-collapse>
          </li>
          <li>
            <dl class="faq-head">
              <dt><span>제품</span></dt>
              <dd v-b-toggle.accordion-3>제품 분류기준이 어떻게 되나요?</dd>
            </dl>
            <b-collapse id="accordion-3" accordion="my-accordion">
              <div class="faq-cnt">안녕하세요. 답변 입니다.</div>
            </b-collapse>
          </li>
        </ul>

        <div class="wrap-faq-qna">
          <p>FAQ에 궁금하신점이 없으신 분은 Q&A를 이용 해 주시기 바랍니다.</p>
          <router-link to="/support/Qna" tag="button" class="btn btn-qna">Q&A 바로가기</router-link>
        </div>
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
      selected: 1,
    };
  },
};
</script>
