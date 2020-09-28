<template>
  <div class="mypage">
    <div class="title">
      <h3>정보 및 설정</h3>
      <p>정보 조회 및 나의 문의, 참여정보, 활동정보를 확인할 수 있습니다.</p>
    </div>

    <div class="wrap-myinfo">
      <b-tabs justified>
        <b-tab title="회원정보 조회 및 변경" active>
          <h4>회사 정보</h4>
          <dl class="list-form">
            <dt><label>회사코드</label></dt>
            <dd>AB1234</dd>
            <dt><label>기업 CI</label></dt>
            <dd><img src="@/assets/img/logo.png" style="width: 50px" /></dd>
            <dt><label>회사명</label></dt>
            <dd>주식회사 세프라</dd>
            <dt><label>사업자 등록 번호</label></dt>
            <dd>123-123-***</dd>
            <dt><label>회사 전화번호</label></dt>
            <dd>010-213-1231</dd>
            <dt><label>주소</label></dt>
            <dd>
              (우)123-123<br />
              서울시 강동구 강동아파트 120동
            </dd>
          </dl>
          <h4>가입자 정보</h4>
          <dl class="list-form">
            <dt><label>분류</label></dt>
            <dd>일반 사용자</dd>
            <dt><label>아이디</label></dt>
            <dd>abc</dd>
            <dt><label>가입자 명 </label></dt>
            <dd>이선호</dd>

            <dt><label>비밀번호</label></dt>
            <dd>
              <input type="password" id="" placeholder="현재 비밀번호 입력" />
              <button class="btn btn-email-certifi" v-on:click="show = !show">비밀번호 변경</button>
            </dd>

            <dt v-if="show"><label>비밀번호 변경</label></dt>
            <dd v-if="show">
              <input type="password" id="" placeholder="신규 비밀번호 입력. (영문, 숫자, 특수문자 조합 8자이상)" /> <br />
              <input type="password" id="" placeholder="신규 비밀번호 입력확인 . (영문, 숫자, 특수문자 조합 8자이상)" />
            </dd>
            <dt>
              <label>이메일 주소</label>
            </dt>
            <dd>
              <input type="text" id="" />@
              <input type="text" id="" />
              <select name="" id="">
                <option value="">직접입력</option>
              </select>
              <button class="btn btn-email-certifi">인증번호 발송</button>
            </dd>
            <dt>
              <label>부서 명 </label>
            </dt>
            <dd>기술개발연구소</dd>
            <dt><label>직위 · 직급 </label></dt>
            <dd>책임</dd>
          </dl>
          <div class="wrap-btn">
            <button class="btn btn-cancel">취소</button>
            <router-link to="#" tag="button" class="btn btn-confirm">확인</router-link>
          </div>
        </b-tab>
        <b-tab title="기술지원/문의내역">
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
                      오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요! 오픽상사 Talc만 섞으면
                      압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요!오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요
                      오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요! 오픽상사 Talc만 섞으면
                      압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요!오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요
                      오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요! 오픽상사 Talc만 섞으면
                      압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요!오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요
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
                      오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요! 오픽상사 Talc만 섞으면
                      압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요!
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
                      오픽상사 Talc만 섞으면 압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요! 오픽상사 Talc만 섞으면
                      압출기에 문제가 생기는데요 컴파운드 가공을 어떻게 해야하는지 잘 모르겠어요!
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
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
