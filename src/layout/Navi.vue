<template>
  <div
    class="nav"
    :class="{ on: slideNav }"
    @mouseover="addParentClass"
    @mouseout="removeParentClass"
    @focusin="addParentClass"
    @focusout="removeParentClass"
  >
    <div class="top-bg"></div>
    <div class="inner">
      <h2 class="hidden">GNB</h2>
      <ul class="depth1">
        <li class="m1">
          <router-link to="#" @click.native="activeMenu = 1" :class="{ active: activeMenu == 1 }"><span>ABOUT</span></router-link>
          <ul class="depth2 sm1">
            <li>
              <router-link to="/introduce/About" v-scroll-to="{ el: '#app', offset: 0 }" @click.native="activeMenu = 1">Platform 소개</router-link>
            </li>
            <li>
              <router-link to="/introduce/About" v-scroll-to="{ el: '#app', offset: 500 }" @click.native="activeMenu = 1"
                >SK종합화학의 SV</router-link
              >
            </li>
            <li>
              <router-link to="/introduce/About" v-scroll-to="{ el: '#app', offset: 1000 }" @click.native="activeMenu = 1"
                >SK종합화학의 R&D</router-link
              >
            </li>
            <li>
              <router-link to="/introduce/About" v-scroll-to="{ el: '#app', offset: 1500 }" @click.native="activeMenu = 1">Partners</router-link>
            </li>
          </ul>
        </li>
        <li class="m2">
          <router-link to="#" @click.native="activeMenu = 2" :class="{ active: activeMenu == 2 }"><span>PRODUCTS</span></router-link>
          <ul class="depth2 sm2">
            <li>
              <router-link to="/product/PP" @click.native="activeMenu = 2">Automotive<br />Polypropylene</router-link>
            </li>
            <li>
              <router-link to="/product/POE" @click.native="activeMenu = 2">Polyolefin<br />Elastomer</router-link>
            </li>
            <li><router-link to="/product/EPDM" @click.native="activeMenu = 2">EPDM</router-link></li>
          </ul>
        </li>
        <li class="m3">
          <router-link to="#" @click.native="activeMenu = 3" :class="{ active: activeMenu == 3 }"><span>INFO</span></router-link>
          <ul class="depth2 sm3">
            <li><router-link to="/autoic/Auto" @click.native="activeMenu = 3">Auto Value chain</router-link></li>
            <li><router-link to="/autoic/Material" @click.native="activeMenu = 3">Material News</router-link></li>
            <li><router-link to="/autoic/Partner" @click.native="activeMenu = 3">Partner News</router-link></li>
          </ul>
        </li>
        <li class="m5">
          <router-link to="#" @click.native="activeMenu = 4" :class="{ active: activeMenu == 4 }"><span>Virtual R&D Lab</span></router-link>
          <ul class="depth2 sm4">
            <li><router-link to="/vrdlab/Introduce" @click.native="activeMenu = 4">Virtual R&D Lab 소개</router-link></li>
            <li><router-link to="/vrdlab/Execution" @click.native="activeMenu = 4">Virtual R&D 실행</router-link></li>
            <li><router-link to="/vrdlab/Devjoin" @click.native="activeMenu = 4">Virtual R&D 참여</router-link></li>
          </ul>
        </li>
        <li class="m6">
          <router-link to="#" @click.native="activeMenu = 5" :class="{ active: activeMenu == 5 }"><span>SUPPORT</span></router-link>
          <ul class="depth2 sm5">
            <li><router-link to="/support/Faq" @click.native="activeMenu = 5">FAQ</router-link></li>
            <li><router-link to="/support/Qna" @click.native="activeMenu = 5">Q/A</router-link></li>
            <li><router-link to="/support/Tech" @click.native="activeMenu = 5">기술지원활동</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      slideNav: false,
      activeMenu: false,
      scrollPosition: null,
    };
  },
  methods: {
    /* scroll dynamic class */
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    /* nav add/remv class */
    addParentClass() {
      this.slideNav = true;
    },
    removeParentClass() {
      this.slideNav = false;
    },
  },
  mounted() {
    /* scroll dynamic class */
    window.addEventListener('scroll', this.updateScroll);
  },
};
</script>
