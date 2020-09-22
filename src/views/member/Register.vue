<template>
  <div class="register">
    <BreadScrumb></BreadScrumb>
    <div class="title">
      <h3>회원가입</h3>
      <p>세계속 종합 에너지 화학기업에서 제공하는 다양한 Solution 과 Machine Learning을 경험 해 보세요!</p>
    </div>

    <div class="wrap-register">
      <ul>
        <li class="reg-corp">
          <ul class="reg-info">
            <li>SKGC Resin을 사용하는 기업 종사자</li>
            <li>향후 구매할 수있는 기업 종사자</li>
            <li>오토밸류체인에 관심있는 기업 종사자</li>
            <li>전용 Virtual R&D Lab을 사용하고자 하는 고객</li>
          </ul>
          <ul class="reg-info2">
            <li>기업등록은 SK종합화학 내부 승인 후 가입이 완료 됩니다.</li>
          </ul>
          <div><router-link to="/member/register/business/agreement" tag="button" class="btn btn-join-business">기업회원가입</router-link></div>
        </li>
        <li class="reg-indv">
          <ul class="reg-info">
            <li>화학산업에 관심있는 개인</li>
            <li>연구를 위한 기본자료가 필요한 개인</li>
          </ul>
          <ul class="reg-info2">
            <li>※ 개인회원 가입의 경우 이메일 주소 외 별도의 개인정보를 요구하지 않습니다.</li>
          </ul>
          <div><router-link to="/member/register/indivisual/agreement" tag="button" class="btn btn-join-indivisual">개인회원가입</router-link></div>
        </li>
      </ul>
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
