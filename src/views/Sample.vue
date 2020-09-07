<template>
  <div class="sample">
    <h1>sample모음</h1>

    <h3>탭메뉴</h3>
    <b-tabs content-class="mt-3">
      <b-tab title="First" active><p>I'm the first tab</p></b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>

    <h3>캐로셀</h3>
    <carousel :autoplay="true" :nav="false" :items="1">
      <template slot="prev"><span class="prev">prev</span></template>
      <template slot="next"><span class="next">next</span></template>

      <div tabindex="0">1</div>
      <div tabindex="0">2</div>
      <div tabindex="0">3</div>
      <div tabindex="0">4</div>
      <div tabindex="0">5</div>
      <div tabindex="0">6</div>
    </carousel>
  </div>
</template>
<script>
import carousel from 'vue-owl-carousel';

export default {
  components: { carousel },
};
</script>
