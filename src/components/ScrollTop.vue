<template>
  <div class="scroll-top">
    <button class="btn-to-top" v-if="isVisible" v-scroll-to="{ el: '#app', offset: 0 }">TOP</button>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data: function () {
    return {
      isVisible: false,
    };
  },
  methods: {
    initToTopButton: function () {
      $(document).bind(
        'scroll',
        function () {
          var backToTopButton = $('.btn-to-top');
          if ($(document).scrollTop() > 100) {
            backToTopButton.addClass('isVisible');
            this.isVisible = true;
          } else {
            backToTopButton.removeClass('isVisible');
            this.isVisible = false;
          }
        }.bind(this)
      );
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      this.initToTopButton();
    });
  },
};
</script>
