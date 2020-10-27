<template>
  <div>
    <div
      class="nav"
      :class="{ on: slideNav, mobileNav: mobileActive }"
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
            <router-link to="/introduce/About" @click.native="activeMenu = 1" :class="{ active: activeMenu == 1 }"><span>ABOUT</span></router-link>
            <ul class="depth2 sm1">
              <li>
                <router-link
                  to="/introduce/About"
                  v-scroll-to="{ el: '#app', offset: 0 }"
                  @click.native="removeParentClass(), (activeMenu = 1)"
                  @click="removeParentClass"
                  >Platform 소개</router-link
                >
              </li>
            </ul>
          </li>
          <li class="m2">
            <router-link to="/product/PP" @click.native="activeMenu = 2" :class="{ active: activeMenu == 2 }"><span>PRODUCTS</span></router-link>
            <ul class="depth2 sm2">
              <li>
                <router-link to="/product/PP" @click.native="removeParentClass(), (activeMenu = 2)"
                  ><em>Automotive</em> <em>Polypropylene</em></router-link
                >
              </li>
              <li>
                <router-link to="/product/POE" @click.native="removeParentClass(), (activeMenu = 2)"
                  ><em>Polyolefin</em> <em>Elastomer</em></router-link
                >
              </li>
              <li><router-link to="/product/EPDM" @click.native="removeParentClass(), (activeMenu = 2)">EPDM</router-link></li>
            </ul>
          </li>
          <li class="m3">
            <router-link to="/autoic/Auto" @click.native="activeMenu = 3" :class="{ active: activeMenu == 3 }"><span>INFO</span></router-link>
            <ul class="depth2 sm3">
              <li><router-link to="/autoic/Auto" @click.native="removeParentClass(), (activeMenu = 3)">Auto Value chain</router-link></li>
              <li><router-link to="/autoic/Material" @click.native="removeParentClass(), (activeMenu = 3)">Material News</router-link></li>
              <li><router-link to="/autoic/Partner" @click.native="removeParentClass(), (activeMenu = 3)">Partner News</router-link></li>
            </ul>
          </li>
          <li class="m5">
            <router-link to="/vrdlab/Introduce" @click.native="removeParentClass(), (activeMenu = 4)" :class="{ active: activeMenu == 4 }"
              ><span>Virtual R&D Lab</span></router-link
            >
            <ul class="depth2 sm4">
              <li><router-link to="/vrdlab/Introduce" @click.native="removeParentClass(), (activeMenu = 4)">Virtual R&D Lab 소개</router-link></li>
              <li><router-link to="/vrdlab/Execution" @click.native="removeParentClass(), (activeMenu = 4)">Virtual R&D 실행</router-link></li>
              <li><router-link to="/vrdlab/Devjoin" @click.native="removeParentClass(), (activeMenu = 4)">Virtual R&D 참여</router-link></li>
            </ul>
          </li>
          <li class="m6">
            <router-link to="/support/Faq" @click.native="activeMenu = 5" :class="{ active: activeMenu == 5 }"><span>SUPPORT</span></router-link>
            <ul class="depth2 sm5">
              <li><router-link to="/support/Faq" @click.native="removeParentClass(), (activeMenu = 5)">FAQ</router-link></li>
              <li><router-link to="/support/Qna" @click.native="removeParentClass(), (activeMenu = 5)">Q/A</router-link></li>
              <li><router-link to="/support/Tech" @click.native="removeParentClass(), (activeMenu = 5)">기술지원활동</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <button class="btn-hamburger" @click="mobileActive = !mobileActive" :class="mobileActive ? 'on' : 'off'">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      mobileActive: false, // 모바일 햄버거 메뉴 펼치기
      activeHamburger: false, //  모바일 햄버거 활성화
      slideNav: false, // 네비게이션 펼치기
      activeMenu: false, // 네비게이션 활성화
    };
  },
  methods: {
    /* nav add/remv class */
    addParentClass() {
      this.slideNav = true;
      this.mobileActive = true;
    },
    removeParentClass() {
      this.slideNav = false;
      this.mobileActive = false;
    },
  },
};
</script>
