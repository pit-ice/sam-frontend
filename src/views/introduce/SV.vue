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
          <div class="txt-about-summary">
            <strong>SUSTAINABILITY</strong> 변치 않는 환경을 만드는 것! 더 이상의 오염 없는 환경을 위해 인간은 주체가 되어 노력해야합니다. 기업의
            가치가 더이상 이익에 머물지않고, 사회와 환경의 역할까지 맡게된 현재,소비자가 요구하는 지속가능성에대한 발빠른 대처가 필요합니다.
          </div>
          <ul>
            <li>
              <dl>
                <dt>PROJECT</dt>
                <dd>
                  <img src="" />
                  업체간, 고객과 공급자간 협업이 필요한 경우 또는 경쟁사 여부에 관계없이 공동으로 문제 해결을 하고자 할 때 프로젝트를 진행합니다.
                  프로젝트의 진행은 해당 기업들 사이에서 진행되나, 프로젝트의 시작과 일부 간사역할 및 컨설팅 업무를 도와드리고 있습니다.
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>BUSINESS SOLUTION</dt>
                <dd>
                  <img src="" />
                  협업이 필요하다고 판단하지는 않으나, 업무에 어려움이 있고 해결방안을 명확하게 찾지 못할 때 포장학회 네트워크로 해결방안을 함꼐
                  고민합니다.
                  <button class="btn-learn">Learn More</button>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>REGULATION CONSULTING</dt>
                <dd>
                  <img src="" />
                  포장재 용도 규재 [eg, FDA, EU, Food Contact, 중국 등 해외 규제 포함]에 대한 요구사항을 함께 고민하고 대처합니니다.
                  <button class="btn-learn">Learn More</button>
                </dd>
              </dl>
            </li>
          </ul>
        </section>
        <section id="sec3" class="sec-auto">
          <h4>Auto 소재 연구 & 개발</h4>

          <carousel :autoplay="false" :smartSpeed="700" :nav="true" :items="1" :loop="true">
            <div>
              <p>1111</p>
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
        </section>
        <section id="sec4" class="sec-partner">
          <h4>Partners</h4>
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
                  <button class="btn-learn">Learn More</button>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>CEPLA</dt>
                <dd>
                  <img src="" />
                  오토 모티브 신소재 개발사로 PP 컴파운드, 엔지니어링 플라스틱 등 다양한 소재를 개척해 나아가는 기업
                  <button class="btn-learn">Learn More</button>
                </dd>
              </dl>
            </li>
          </ul>
          <div class="txt-partner">
            SK종합화학 플랫폼에 문의 또는 연락이 필요하시거나 함께 파트너사로 참여를 원하시면 우측 문의하기 버튼을 선택 해 주세요.
            <button class="btn-partner">파트너 문의</button>
          </div>
        </section>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import $ from 'jquery';

export default {
  components: {
    carousel,
  },
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
