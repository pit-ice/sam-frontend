<template>
  <div class="main">
    <div class="main-carousel">
      <div class="inner">
        <carousel :autoplay="true" :nav="true" :items="1" :loop="true">
          <div>
            <p>11</p>
            <button class="btn">See More</button>
          </div>
          <div>
            <p>22</p>
            <button class="btn">See More</button>
          </div>
          <div>
            <p>33</p>
            <button class="btn">See More</button>
          </div>
          <div>
            <p>44</p>
            <button class="btn">See More</button>
          </div>
          <div>
            <p>55</p>
            <button class="btn">See More</button>
          </div>
        </carousel>
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
import carousel from 'vue-owl-carousel';

export default {
  components: {
    carousel,
  },
};
</script>
