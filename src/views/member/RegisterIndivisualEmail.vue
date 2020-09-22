<template>
  <div class="register">
    <BreadScrumb></BreadScrumb>

    <div class="wrap-certifi-email">
      <p class="txt-certif1">
        이메일 인증이 필요합니다. 가입시 입력 한 <strong>asd@asd.com</strong> 주소로 발송 된 이메일에서 인증 만료시간 이내에 인증을 완료 해 주세요.
      </p>
      <dl class="box-certifi">
        <dt>인증 만료시간</dt>
        <dd>2020-12-14 16:48</dd>
      </dl>
      <div class="wrap-btn">
        <router-link to="/home" tag="button" class="btn btn-home">메인으로</router-link>
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
