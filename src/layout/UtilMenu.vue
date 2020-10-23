<template>
  <div class="util-menu">
    <h2 class="hidden">유틸메뉴</h2>
    <ul>
      <li class="vrnd">
        <router-link to="/member/register">VRND LAB <img src="@/assets/img/ico_vrnd.png" /> </router-link>
      </li>
      <li>
        <div class="gnb-alarm">
          <button @click="active = !active" :class="active ? 'on' : 'off'">alarm</button>
          <!--새알림 있을떄 노출  <span class="ico-new-alarm">new</span> -->
          <div class="wrap-alarm" :class="{ open: active }">
            <p>총 <strong>4건</strong>의 알림 메시지가 있습니다.</p>
            <ul>
              <li>
                <span class="date">2020-11-22 17:05</span>
                <em>작성하신 문의 내역이 정상적으로 등록 되었습니다. 확인해주세요.</em>
              </li>
              <li>
                <span class="date">2020-11-22 17:05</span>
                <em>종료되었습니다.</em>
              </li>
              <li>
                <span class="date">2020-11-22 17:05</span>
                <em>작성하신 문의 내역이 정상적으로 등록 되었습니다.</em>
              </li>
              <li>
                <span class="date">2020-11-22 17:05</span>
                <em>작성하신 문의 내역이 정상적으로 등록 되었습니다.</em>
              </li>
              <li>
                <span class="date">2020-11-22 17:05</span>
                <em>작성하신 문의 내역이 정상적으로 등록 되었습니다.</em>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <span><router-link to="/member/login">Login</router-link></span>
      </li>
      <li>
        <span><router-link to="/member/register">Join</router-link></span>
      </li>
      <li>
        <span><a href="#">Logout</a></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      active: false,
    };
  },
};
</script>
