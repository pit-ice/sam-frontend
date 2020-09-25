<template>
  <div>
    <div class="wrap-btn right">
      <button class="btn btn-ask">문의하기</button>
    </div>
    <div class="stit">그동안 요청하신 오토소재 관련된 기술지원 내역을 열람하실 수 있습니다.</div>

    <div class="support-list" role="collapse">
      <ul>
        <li>
          <dl class="collapse-head">
            <dt><img src="@/assets/img/thumb.png" style="width: 50px" /></dt>
            <dd v-b-toggle.accordion-1>
              <span class="subject"><strong class="wait">답변 대기 중</strong> BX3800 압출기 관련 문의 </span>
              <span class="detail">
                오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요! 오픽상사 Talc만 섞으면 압출기에
                문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요!오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요 오픽상사 Talc만
                섞으면 압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요! 오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요
                컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요!오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요 오픽상사 Talc만 섞으면 압출기에
                문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요! 오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요 컴파운드 가공을
                어떻게 해야하는지 잘 모르겠어요!오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요
              </span>
              <span class="date">2020-10-10</span>
            </dd>
          </dl>
          <b-collapse id="accordion-1" accordion="my-accordion">
            <dl class="collapse-cnt">
              <dt>SK</dt>
              <dd>안녕하세요 고객님 답변입니다</dd>
            </dl>
          </b-collapse>
        </li>
        <li>
          <dl class="collapse-head">
            <dt><img src="@/assets/img/thumb.png" style="width: 50px" /></dt>
            <dd v-b-toggle.accordion-2>
              <span class="subject"><strong class="wait">답변 대기 중</strong> BX3800 압출기 관련 문의</span>
              <span class="detail">
                오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요! 오픽상사 Talc만 섞으면 압출기에
                문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요!
              </span>
              <span class="date">2020-10-10</span>
            </dd>
          </dl>
          <b-collapse id="accordion-2" accordion="my-accordion">
            <dl class="collapse-cnt">
              <dt>SK</dt>
              <dd>안녕하세요 고객님</dd>
            </dl>
          </b-collapse>
        </li>
        <li>
          <dl class="collapse-head">
            <dt><img src="@/assets/img/thumb.png" style="width: 50px" /></dt>
            <dd v-b-toggle.accordion-3>
              <span class="subject"><strong class="done">답변완료</strong> BX3800 압출기 관련 문의</span>
              <span class="detail">
                오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요! 오픽상사 Talc만 섞으면 압출기에
                문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요!
              </span>
              <span class="date">2020-10-10</span>
            </dd>
          </dl>
          <b-collapse id="accordion-3" accordion="my-accordion">
            <dl class="collapse-cnt">
              <dt>SK</dt>
              <dd>안녕하세요 고객님</dd>
            </dl>
          </b-collapse>
        </li>
      </ul>
    </div>

    <div class="wrap-paging">
      <ul>
        <li class="btn-first"><a href="#">First</a></li>
        <li class="btn-prev"><a href="#">prev</a></li>
        <li class="active"><a>1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li class="btn-next"><a href="#">next</a></li>
        <li class="btn-first"><a href="#">Last</a></li>
      </ul>
    </div>
  </div>
</template>
