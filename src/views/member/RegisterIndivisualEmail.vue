<template>
  <div class="register">
    <BreadScrumb></BreadScrumb>

    <div class="wrap-certifi-email" v-if="emailauth == 404">
      <p class="txt-certif1">이메일 인증시간이 만료되었습니다. 아래의 재발송 버튼을 선택 해 주시고 이메일 인증을 완료 해 주시기 바랍니다</p>
      <!-- <dl class="box-certifi">
        <dt>인증 만료시간</dt>
        <dd>{{ key }}</dd>
      </dl> -->
      <div class="wrap-btn">
        <router-link to="/home" tag="button" class="btn btn-home">재발송</router-link>
      </div>
    </div>

    <div class="wrap-certifi-email" v-if="emailauth == 200">
      <p class="txt-certif1">이메일 인증이 완료되었습니다. 로그인 후 이용해주시기 바랍니다.</p>
      <!-- <dl class="box-certifi">
        <dt>인증 만료시간</dt>
        <dd>{{ key }}</dd>
      </dl> -->
      <div class="wrap-btn">
        <router-link to="/home" tag="button" class="btn btn-home">메인으로</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BreadScrumb from '@/components/BreadScrumb.vue';

export default {
  computed: {
    emailauth() {
      return this.$store.state.member.emailauth;
    },
  },
  mounted() {
    let key = this.$route.params.key;
    let mbrNo = this.$route.params.mbrNo;
    this.$store.dispatch('member/emailauth', key, mbrNo);
  },
  components: {
    BreadScrumb,
  },
};
</script>
