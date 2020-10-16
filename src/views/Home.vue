<template>
  <div class="main">
    <div class="main-carousel">
      <div class="inner">
        <VueSlickCarousel
          ref="carousel"
          :autoplay="true"
          :autoplaySpeed="1000"
          :pauseOnDotsHover="true"
          :pauseOnFocus="true"
          :arrows="true"
          :dots="true"
          :slidesToShow="1"
          :slidesToScroll="1"
          :infinite="true"
          :speed="500"
        >
          <div>1 <button tabindex="-1">aa1</button></div>
          <div>2 <button tabindex="-1">aa1</button></div>
          <div>3 <button tabindex="-1">aa1</button></div>
          <div>4<button tabindex="-1">aa1</button></div>
        </VueSlickCarousel>
        <button @click="slickPause" v-if="playing">slickPause</button>
        <button @click="slickPlay" v-else>slickPlay</button>
      </div>
    </div>
    <div class="main-about">
      <div class="inner">
        <div class="txt-main">
          <strong>ABOUT PLATFORM</strong>
          <p>내용내용</p>
        </div>
      </div>
    </div>
    <div class="main-product">
      <div class="inner">
        <div class="txt-main">
          <strong>Product</strong>
          <p>내용내용</p>
        </div>
        <dl>
          <dt>PP</dt>
          <dd></dd>
          <dt>POE</dt>
          <dd></dd>
        </dl>
        <button class="btn">제품검색</button>
      </div>
    </div>
    <div class="main-rnd">
      <div class="inner">
        <div class="txt-main">
          <strong>Virtual R&D Lab</strong>
          <p>내용내용</p>
        </div>
        <button class="btn">바로가기</button>
      </div>
    </div>
    <div class="main-support">
      <div class="inner">
        <div class="txt-main">
          <strong>Support</strong>
          <p>내용내용</p>
        </div>
      </div>
    </div>
    <div class="main-plan">
      <div class="inner">
        <div class="txt-main">
          <strong>Plan</strong>
          <p>내용내용</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },

  data: function () {
    return {
      playing: true,
    };
  },
  methods: {
    slickPause() {
      this.$refs.carousel.pause();
      this.playing = false;
    },
    slickPlay() {
      this.$refs.carousel.play();
      this.playing = true;
    },
  },
};
</script>
