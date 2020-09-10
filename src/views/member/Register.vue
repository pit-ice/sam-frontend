<template>
  <div class="register">
    <div class="title">
      <h3>회원가입</h3>
      <p>세계속 종합 에너지 화학기업에서 제공하는 다양한 Solution 과 Machine Learning을 경험 해 보세요!</p>
    </div>

    <div class="wrap-register">
      <ul>
        <li class="reg-corp">
          <ul class="reg-info">
            <li>SKGC Resin을 사용하는 기업 종사자</li>
            <li>향후 구매할 수있는 기업 종사자</li>
            <li>오토밸류체인에 관심있는 기업 종사자</li>
            <li>전용 Virtual R&D Lab을 사용하고자 하는 고객</li>
          </ul>
          <ul class="reg-info2">
            <li>※ 기업등록의 경우 사업자 번호를 요구할 수 있습니다.</li>
            <li>※ 기업코드가 없는경우 이메일 인증 후 기업코드를 발급 받아야 기업 가입이 가능합니다.</li>
          </ul>
          <div><router-link to="/member/RegisterAgreement" tag="button" class="btn btn-join-corp">기업회원가입</router-link></div>
        </li>
        <li class="reg-indv">
          <ul class="reg-info">
            <li>화학산업에 관심있는 개인</li>
            <li>연구를 위한 기본자료가 필요한 개인</li>
          </ul>
          <ul class="reg-info2">
            <li>※ 개인회원 가입의 경우 이메일 주소 외 별도의 개인정보를 요구하지 않습니다.</li>
          </ul>
          <div><button class="btn btn-join-corp">개인회원가입</button></div>
        </li>
      </ul>
    </div>
  </div>
</template>
