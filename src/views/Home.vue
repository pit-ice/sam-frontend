<template>
  <div class="main">
    <div class="main-visual">
      <VueSlickCarousel
        ref="carousel"
        :autoplay="false"
        :autoplaySpeed="3000"
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
      <!-- <span class="total-slide">/</span>
      <button @click="slickPause" v-if="playing">slickPause</button>
      <button @click="slickPlay" v-else>slickPlay</button> -->
    </div>
    <div class="main-card">
      <div class="inner">
        <VueSlickCarousel
          ref="carousel"
          :autoplay="false"
          :autoplaySpeed="3000"
          :pauseOnDotsHover="true"
          :pauseOnFocus="true"
          :arrows="true"
          :dots="false"
          :slidesToShow="3"
          :slidesToScroll="1"
          :infinite="true"
          :speed="500"
        >
          <div>
            <img src="@/assets/img/img_main_vrd.png" />
            <div class="txt-visual">
              <a href="#">
                <div class="overlay"></div>
                <em>Virtual R&D Lab.</em>
                <p>머신러닝 어렵지않아요. <br />머신러닝에 대한 설명입니다. <br />머신러닝에 대한 설명입니다.</p>
                <span class="ico"></span>
                <button>자세히 보기</button>
              </a>
            </div>
          </div>
          <div>
            <img src="@/assets/img/img_main_product.png" />
            <div class="txt-visual">
              <a href="#">
                <div class="overlay"></div>
                <em>Products</em>
                <p>머신러닝 어렵지않아요. <br />머신러닝에 대한 설명입니다. <br />머신러닝에 대한 설명입니다.</p>
                <span class="ico"></span>
                <button>자세히 보기</button>
              </a>
            </div>
          </div>
          <div>
            <img src="@/assets/img/img_main_trouble.png" />
            <div class="txt-visual">
              <a href="#">
                <div class="overlay"></div>
                <em>Troubleshooting</em>
                <p>머신러닝 어렵지않아요. <br />머신러닝에 대한 설명입니다. <br />머신러닝에 대한 설명입니다.</p>
                <span class="ico"></span>
                <button>자세히 보기</button>
              </a>
            </div>
          </div>
          <div>
            <img src="@/assets/img/img_main_trouble.png" />
            <div class="txt-visual">
              <a href="#">
                <div class="overlay"></div>
                <em>Troubleshooting</em>
                <p>머신러닝 어렵지않아요. <br />머신러닝에 대한 설명입니다. <br />머신러닝에 대한 설명입니다.</p>
                <span class="ico"></span>
                <button>자세히 보기</button>
              </a>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>

    <div class="main-banner">
      <div class="inner">
        <VueSlickCarousel
          ref="carousel"
          :autoplay="false"
          :autoplaySpeed="3000"
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
            <img src="@/assets/img/img_banner1.png" />
            <div class="txt-visual">
              <a href="#">
                <p>지속가능한 패키징을 위한 Online 소통 공간, 스페이스</p>
                <button>바로가기</button>
              </a>
            </div>
          </div>
          <div>
            <img src="@/assets/img/img_banner1.png" />
            <div class="txt-visual">
              <a href="#">
                <p>지속가능한 패키징을 위한 Online 소통 공간, 스페이스</p>
                <button>바로가기</button>
              </a>
            </div>
          </div>
        </VueSlickCarousel>
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
