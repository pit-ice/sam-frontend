<template>
  <div class="main">
    <div class="main-carousel">
      <VueSlickCarousel
        ref="carousel"
        :autoplay="false"
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
        <div>
          <img src="@/assets/img/img_visual1.png" />
          <div class="txt-visual">
            <em>SK chemistry</em>
            <p>What is Polymer Lab?</p>
            <span>당신의 연구에 작은 도움으로 더 나은 발전을 위해 시작 해 보세요.</span>
            <button tabindex="-1">See More</button>
          </div>
        </div>
        <div>
          <img src="@/assets/img/img_visual1.png" />
          <div class="txt-visual">
            <em>SK chemistry</em>
            <p>What is Polymer Lab?</p>
            <span>당신의 연구에 작은 도움으로 더 나은 발전을 위해 시작 해 보세요.</span>
            <button tabindex="-1">See More</button>
          </div>
        </div>
        <div>
          <img src="@/assets/img/img_visual1.png" />
          <div class="txt-visual">
            <em>SK chemistry</em>
            <p>What is Polymer Lab?</p>
            <span>당신의 연구에 작은 도움으로 더 나은 발전을 위해 시작 해 보세요.</span>
            <button tabindex="-1">See More</button>
          </div>
        </div>
      </VueSlickCarousel>
      <span class="total-slide">/</span>
      <button @click="slickPause" v-if="playing">slickPause</button>
      <button @click="slickPlay" v-else>slickPlay</button>
    </div>
    <div class="main-card">
      <div class="inner">
        <div class="title">
          <h4>SK종합화학은</h4>
          <p>
            SK종합화학은 끊임없는 연구와 지속적인 개발로 <br />고객의 가치를 창출을 위해 새로운 플랫폼을 오픈 하였습니다. <br />우리의 플랫폼은 개인,
            기업 누구나 SK종합화학과 함께 새로운 연구를 시작합니다.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
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
  mounted() {
    var length = $('.slick-dots li').length;
    $('.total-slide').html('/' + length);
  },
};
</script>
