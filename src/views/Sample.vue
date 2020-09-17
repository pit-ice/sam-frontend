<template>
  <div class="sample">
    <h1>test</h1>

    <h3>탭메뉴</h3>
    <b-tabs content-class="mt-3">
      <b-tab title="First" active><p>I'm the first tab</p></b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>

    <h3>캐로셀</h3>
    <carousel :autoplay="true" :nav="true" :items="1" :loop="true">
      <template slot="prev"><span class="prev">prev</span></template>
      <template slot="next"><span class="next">next</span></template>
      <div>
        <p>stop play 필요</p>
      </div>
      <div>
        <p>22</p>
      </div>
      <div>
        <p>33</p>
      </div>
      <div>
        <p>44</p>
      </div>
      <div>
        <p>55</p>
      </div>
    </carousel>
    <!-- 
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    <h3>scrollto anchor</h3>
    <div>
      <a href="#div-id" v-smooth-scroll>Anchor</a>
      <div id="div-id"></div>
    </div>
    <h3>jquery 샘플</h3>
    <button id="btn">click me</button>

    <ul id="nav">
      <li><a href="#section-1" class="js-anchor-link">Section 1</a></li>
      <li><a href="#section-2" class="js-anchor-link">Section 2</a></li>
      <li><a href="#section-3" class="js-anchor-link">Section 3</a></li>
    </ul>

    <div id="section-1" class="section">
      <h1>Section 1</h1>
      <a href="#section-2" class="js-anchor-link">Go to section 2</a>
    </div>

    <div id="section-2" class="section">
      <h1>Section 2</h1>
      <a href="#section-3" class="js-anchor-link">Go to section 3</a>
    </div>

    <div id="section-3" class="section">
      <h1>Section 3</h1>
      <a href="#section-1" class="js-anchor-link">Back to section 1</a>
    </div> -->
  </div>
</template>

<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  background: #333;
  margin: 0;
  padding: 15px;
  list-style: none;
  border-radius: 0 0 10px 0;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
}

#nav a {
  display: block;
  padding: 10px 10px;
  color: #fff;
}

#nav a:hover {
  color: #ff0;
}

.section {
  height: 1000px;
  padding: 30px 140px;
}

#section-1 {
  background: #eee;
}

#section-2 {
  background: #ddd;
}

#section-3 {
  background: #ccc;
}

.section a {
  color: #3399ff;
}
</style>

<script>
import carousel from 'vue-owl-carousel';
import $ from 'jquery';
export default {
  components: { carousel },
  mounted() {
    $('.js-anchor-link').click(function (e) {
      e.preventDefault();
      var target = $($(this).attr('href'));
      if (target.length) {
        var scrollTo = target.offset().top;
        $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
      }
    });
  },
};
</script>
