<template>
  <div class="nav" @mouseover="listOne = true" @mouseleave="listOne = false" @focusin="listOne = true">
    <h2 class="hidden">GNB</h2>
    <ul class="depth1">
      <li class="m1"><router-link to="/introduce/SV" tabindex="1">About</router-link></li>
      <li class="m2"><router-link to="/product/Search" tabindex="2">Auto Products</router-link></li>
      <li class="m3"><router-link to="/autoic/Company" tabindex="3">Infor Center</router-link></li>
      <li class="m5"><router-link to="/vrdlab/Introduce" tabindex="4">Virtual R&D Lab</router-link></li>
      <li class="m4"><router-link to="/support/Notice" tabindex="5">Support</router-link></li>
    </ul>
    <transition name="slide">
      <div class="depth2" v-if="listOne" @click="listOne = false">
        <h2 class="hidden">About</h2>
        <ul class="sm1">
          <li><router-link to="/introduce/SV" tabindex="1">Platform 소개</router-link></li>
          <li><a href="#" tabindex="1">SK종합화학의 SV</a></li>
          <li><a href="#" tabindex="1">SK종합화학의 R&D</a></li>
          <li><router-link to="/introduce/Partners" tabindex="1">Partners</router-link></li>
        </ul>
        <h2 class="hidden">Auto Products</h2>
        <ul class="sm2">
          <li><a href="#" tabindex="2">Automotive Polypropylene</a></li>
          <li><a href="#" tabindex="2">Polyolefin Elastomer</a></li>
          <li><a href="#" tabindex="2">EPDM</a></li>
        </ul>
        <h2 class="hidden">Infor Center</h2>
        <ul class="sm3">
          <li><a href="#" tabindex="3">Auto Value chain</a></li>
          <li><a href="#" tabindex="3">Material News</a></li>
          <li><a href="#" tabindex="3">Partner News</a></li>
        </ul>
        <h2 class="hidden">Virtual R&D Lab</h2>
        <ul class="sm4">
          <li><a href="#" tabindex="4">Virtual R&D Lab 소개</a></li>
          <li><a href="#" tabindex="4">Virtual R&D 실행</a></li>
          <li><a href="#" tabindex="4">Virtual R&D 참여</a></li>
        </ul>
        <h2 class="hidden">Support</h2>
        <ul class="sm5">
          <li><a href="#" tabindex="5">FAQ</a></li>
          <li><a href="#" tabindex="5">Q/A</a></li>
          <li><a href="#" tabindex="5">기술문의</a></li>
          <li><a href="#" tabindex="5">기술지원활동</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      listOne: false,
    };
  },
  methods: {
    handleBlur() {
      false;
    },
  },
};
</script>
