<template>
  <div class="about">
    <div class="wrap-about">
      <div class="about-nav">
        <ul>
          <li><a href="#sec1" class="active">First</a></li>
          <li><a href="#sec2">Second</a></li>
          <li><a href="#sec3">Third</a></li>
          <li><a href="#sec4">Fourth</a></li>
        </ul>
      </div>
      <div class="sections">
        <section id="sec1" class="sec-about">
          새로운 Auto 소재를 개발하기 위해 소재산업체을 주도하고, 기술을을 보유한 업체들과의 협업을 통해 종합화학 산업발전을 이끌어 나아가는
          SK종합화학의 새로운 플랫폼에 오신 여러분을 환영합니다.
        </section>
        <section id="sec2" class="sec-what">
          <h4>WHAT WE DO</h4>
          <div class="txt-about-summary">SK종합화학 플랫폼과 새로운 연구로 더 나은 발전을 도모할 파트너사를 모십니다.</div>
          <ul>
            <li>
              <dl>
                <dt>CNS PPT</dt>
                <dd>
                  <img src="" />
                  최첨단 장비와 우수한 인적자원을 보유한 고분자 나노 융합소재 가공 기술 센터
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>한국화학연구원</dt>
                <dd>
                  <img src="" />
                  화학 개발 및 역량을 결집, 화학강국 실천에 기여 지속가능 사회를 실현하는 화학 전문 연구기관
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>CEPLA</dt>
                <dd>
                  <img src="" />
                  오토 모티브 신소재 개발사로 PP 컴파운드, 엔지니어링 플라스틱 등 다양한 소재를 개척해 나아가는 기업
                </dd>
              </dl>
            </li>
          </ul>
        </section>
        <section id="sec3" class="sec-auto">
          <h4>Auto 소재 연구 & 개발</h4>
        </section>
        <section id="sec4" class="sec-partner">444444444444444444</section>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  mounted() {
    var sections = $('section'),
      nav = $('.about-nav'),
      nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();

      sections.each(function () {
        var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active');
          sections.removeClass('active');

          $(this).addClass('active');
          nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
      });
    });
    nav.find('a').on('click', function () {
      var $el = $(this),
        id = $el.attr('href');

      $('html, body').animate(
        {
          scrollTop: $(id).offset().top - nav_height,
        },
        500
      );

      // $('html, body').animate({
      //   scrollTop: $(id).offset().top - nav_height
      // }, 500);

      return false;
    });
  },
};
</script>
