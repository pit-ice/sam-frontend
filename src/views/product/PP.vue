<template>
  <div class="auto">
    <BreadScrumb></BreadScrumb>
    <div class="title">
      <h3>Automotive Polypropylene</h3>
      <p>aaaa</p>
    </div>

    <div>
      ########### 오토소재 PP ###############

      <div class="pp">
        <h4>특징</h4>
        <ul>
          <li>
            <dl>
              <dt>내충격</dt>
              <dd>일반 Random 대비 투명성이 뛰어난 초고투명 제품과 투명성/충격강도가 동시에 우수한 제품 등 차별화 제품을 생산하고 있습니다.</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>고강성</dt>
              <dd>우수한 제품 등 차별화 제품을 생산하고 있습니다.</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>고내열성</dt>
              <dd>일반 Random 대비 투명성이 뛰어난 초고투명 제품과 투명성/충격강도가 동시에 우수한 제품 등 차별화 제품을 생산하고 있습니다.</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>고투명성</dt>
              <dd>투명성이 뛰어난 초고투명 제품을 생산하고 있습니다.</dd>
            </dl>
          </li>
        </ul>
        <h4>용도</h4>
      </div>

      <router-link to="/introduce/SV">소개</router-link>
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
