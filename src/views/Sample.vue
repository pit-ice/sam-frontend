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
    <carousel :autoplay="true" :nav="true" :items="1" :loop="true">
      <template slot="prev"><span class="prev">prev</span></template>
      <template slot="next"><span class="next">next</span></template>
      <div>
        <p>stop play 필요</p>
      </div>
      <div>
        <p>22</p>
      </div>
      <div>
        <p>33</p>
      </div>
      <div>
        <p>44</p>
      </div>
      <div>
        <p>55</p>
      </div>
    </carousel>
  </div>
</template>
<script>
import carousel from 'vue-owl-carousel';

export default {
  components: { carousel },
};
</script>
