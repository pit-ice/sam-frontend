<template>
  <div class="register">
    <BreadScrumb></BreadScrumb>

    <div class="title">
      <h3>회원가입 - 기업</h3>
      <p>세계속 종합 에너지 화학기업에서 제공하는 다양한 Solution 과 Machine Learning을 경험 해 보세요!</p>
    </div>

    <div class="wrap-process">
      <ul>
        <li class="on"><span>1</span>정보 입력</li>
        <li><span>2</span>약관 동의</li>
        <li><span>3</span>가입신청 완료</li>
      </ul>
    </div>

    <div class="wrap-reg-agree">
      <div class="txt-agree">
        <input type="checkbox" id="ch" />
        <label class="checkbox" for="ch"><span class="icon"></span>모든 약관에 동의 합니다.</label>
      </div>
      <ul>
        <li>
          <h4>회원 약관</h4>
          <div class="box-agree">
            약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />
          </div>
          <div class="txt-agree">
            <input type="checkbox" id="ch1" />
            <label class="checkbox" for="ch1"><span class="icon"></span>이용약관에 동의합니다. (필수)</label>
          </div>
        </li>
        <li>
          <h4>개인정보 수집 및 이용동의</h4>
          <div class="box-agree">
            약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />
          </div>
          <div class="txt-agree">
            <input type="checkbox" id="ch2" />
            <label class="checkbox" for="ch2"><span class="icon"></span>이용약관에 동의합니다. (필수)</label>
          </div>
        </li>
        <li>
          <h4>마케팅 / 홍보의 수집 및 이용동의</h4>
          <div class="box-agree">
            약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />약관<br />
          </div>
          <div class="txt-agree">
            <input type="checkbox" id="ch3" />
            <label class="checkbox" for="ch3"><span class="icon"></span>동의합니다. (선택)</label>
          </div>
        </li>
      </ul>

      <div class="wrap-btn">
        <button class="btn btn-cancel">취소</button>
        <router-link to="/member/register/business/info" tag="button" class="btn btn-agree">동의</router-link>
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
