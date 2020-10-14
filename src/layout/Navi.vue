<template>
  <div
    class="nav"
    :class="{ on: active }"
    @mouseover="addParentClass"
    @mouseout="removeParentClass"
    @click="removeParentClass"
    @focusin="addParentClass"
    @focusout="removeParentClass"
  >
    <h2 class="hidden">GNB</h2>
    <ul class="depth1">
      <li class="m1">
        <router-link to="/introduce/Introduce" @click.native="selected = 1" :class="{ active: selected == 1 }"><span>About</span></router-link>
        <ul class="depth2 sm1">
          <li><router-link to="/introduce/Introduce" @click.native="selected = 1">Platform 소개</router-link></li>
          <li><router-link to="/introduce/SV" @click.native="selected = 1">SK종합화학의 SV</router-link></li>
          <li><router-link to="/introduce/RND" @click.native="selected = 1">SK종합화학의 R&D</router-link></li>
          <li><router-link to="/introduce/Partners" @click.native="selected = 1">Partners</router-link></li>
        </ul>
      </li>
      <li class="m2">
        <router-link to="/product/PP" @click.native="selected = 2" :class="{ active: selected == 2 }"><span>Products</span></router-link>
        <ul class="depth2 sm2">
          <li><router-link to="/product/PP" @click.native="selected = 2">Automotive Polypropylene</router-link></li>
          <li><router-link to="/product/POE" @click.native="selected = 2">Polyolefin Elastomer</router-link></li>
          <li><router-link to="/product/EPDM" @click.native="selected = 2">EPDMm</router-link></li>
        </ul>
      </li>
      <li class="m3">
        <router-link to="/autoic/Auto" @click.native="selected = 3" :class="{ active: selected == 3 }"><span>Info</span></router-link>
        <ul class="depth2 sm3">
          <li><router-link to="/autoic/Auto" @click.native="selected = 3">Auto Value chain</router-link></li>
          <li><router-link to="/autoic/Material" @click.native="selected = 3">Material News</router-link></li>
          <li><router-link to="/autoic/Partner" @click.native="selected = 3">Partner News</router-link></li>
        </ul>
      </li>
      <li class="m5">
        <router-link to="/vrdlab/Introduce" @click.native="selected = 4" :class="{ active: selected == 4 }"><span>Virtual R&D Lab</span></router-link>
        <ul class="depth2 sm4">
          <li><router-link to="/vrdlab/Introduce" @click.native="selected = 4">Virtual R&D Lab 소개</router-link></li>
          <li><router-link to="/vrdlab/Execution" @click.native="selected = 4">Virtual R&D 실행</router-link></li>
          <li><router-link to="/vrdlab/Devjoin" @click.native="selected = 4">Virtual R&D 참여</router-link></li>
        </ul>
      </li>
      <li class="m6">
        <router-link to="/support/Faq" @click.native="selected = 5" :class="{ active: selected == 5 }"><span>Support</span></router-link>
        <ul class="depth2 sm5">
          <li><router-link to="/support/Faq" @click.native="selected = 5">FAQ</router-link></li>
          <li><router-link to="/support/Qna" @click.native="selected = 5">Q/A</router-link></li>
          <li><router-link to="/support/Tech" @click.native="selected = 5">기술지원활동</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isHovering: false,
      active: false,
    };
  },
  methods: {
    addParentClass() {
      this.active = true;
    },
    removeParentClass() {
      this.active = false;
    },
  },
};
</script>
