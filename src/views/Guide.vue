<template>
  <div class="guide">
    <h1>퍼블리싱 화면 목록</h1>
    <table class="pub-list">
      <colgroup>
        <col width="8%" />
        <col width="8%" />
        <col width="8%" />
        <col width="13%" />
        <col width="8%" />
        <col width="6%" />
        <col width="6%" />
        <col width="10%" />
      </colgroup>
      <thead>
        <tr>
          <th>1depth</th>
          <th>2depth</th>
          <th>3depth</th>
          <th>페이지명</th>
          <th>파일명</th>
          <th>상태</th>
          <th>완료일</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-guide">
          <td>가이드</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <a
              href="https://dev.azure.com/SKGC-VRD/vrd-dev/_wiki/wikis/vrd-dev.wiki?pagePath=%2F%EA%B0%9C%EB%B0%9C%EA%B0%80%EC%9D%B4%EB%93%9C%20%EB%B0%8F%20%ED%91%9C%EC%A4%80%2F%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%8B%B1%20%EA%B0%80%EC%9D%B4%EB%93%9C"
              target="_blank"
            >
              퍼블리싱 가이드
            </a>
          </td>
          <td></td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td>홈</td>
          <td></td>
          <td></td>
          <td>홈</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td>회원</td>
          <td>로그인</td>
          <td></td>
          <td>로그인</td>
          <td><a href="/member/Login" target="_blank">Login</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>아이디/비밀번호 찾기</td>
          <td><a href="/member/Find" target="_blank">FindIdPw</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>비번5회오류 이메일발송</td>
          <td><a href="/member/loginErrorEmail" target="_blank">LoginErrorEmail</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>비번5회오류 재설정</td>
          <td><a href="/member/loginErrorReset" target="_blank">LoginErrorReset</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>비번90일 경과 재설정</td>
          <td><a href="/member/loginExpire" target="_blank">LoginExpire</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td>회원가입</td>
          <td></td>
          <td>가입유형선택</td>
          <td><a href="/member/register" target="_blank">Register</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>기업(master)</td>
          <td>step1 이용약관동의</td>
          <td><a href="/member/register/business/agreement" target="_blank">RegisterBusinessAgreement</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>step2 회원정보입력</td>
          <td><a href="/member/register/business/info" target="_blank">RegisterBusinessInfo</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>step3 가입완료</td>
          <td><a href="/member/register/business/done" target="_blank">RegisterBusinessDone</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>step3-1 내부 승인 전 로그인</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>기업(general)</td>
          <td>기업구성원 가입</td>
          <td><a href="/member/register/general/info" target="_blank">RegisterGeneralInfo</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>기업구성원 가입신청완료</td>
          <td><a href="/member/register/general/done" target="_blank">RegisterGeneralDone</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>개인회원</td>
          <td>step1 이용약관동의</td>
          <td><a href="/member/register/indivisual/agreement" target="_blank">RegisterIndivisualAgreement</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>step2 회원정보입력</td>
          <td><a href="/member/register/indivisual/info" target="_blank">RegisterIndivisualInfo</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>step3 가입완료</td>
          <td><a href="/member/register/indivisual/done" target="_blank">RegisterIndivisualDone</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>이메일 미인증후 로그인_유효기간상태</td>
          <td><a href="/member/register/indivisual/email" target="_blank">RegisterIndivisualEmail</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>이메일 미인증후 로그인_유효기간만료</td>
          <td><a href="/member/register/indivisual/emailExpire" target="_blank">RegisterIndivisualEmailExpire</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td>마이페이지</td>
          <td>기업</td>
          <td></td>
          <td>비밀번호확인</td>
          <td><a href="/mypage/mypw" target="_blank">MyPw</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>회원정보/문의내역</td>
          <td><a href="/mypage/myInfo" target="_blank">MyInfoBusiness</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>비밀번호변경팝업</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td>개인</td>
          <td></td>
          <td>비밀번호확인</td>
          <td><a href="/mypage/mypw" target="_blank">MyPw</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>개인회원정보 / 문의내역</td>
          <td><a href="/mypage/myInfo" target="_blank">MyInfoIndivisual</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td>소개</td>
          <td>소개</td>
          <td></td>
          <td>회사소개</td>
          <td><a href="/introduce/SV" target="_blank">SV</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
        <tr>
          <td></td>
          <td>Partners</td>
          <td></td>
          <td>파트너지원</td>
          <td><a href="/introduce/Partners" target="_blank">Partners</a></td>
          <td>선작업</td>
          <td></td>
          <td class="txt-left"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.guide h1 {
  font-size: 24px;
  text-align: center;
  margin: 20px 10px;
}
.pub-list {
  width: 100%;
  margin: 10px 0 20px;
  border: 1px solid #666;
  border-collapse: collapse;
  line-height: 1.3;
  color: #666;
  font-size: 12px;
  font-family: sans-serif, Verdana, Geneva, Tahoma;
}
.pub-list th,
.pub-list td {
  border: 1px solid #666;
  padding: 5px;
  text-align: center;
  background: #fff;
}
.pub-list tr.bg-guide td {
  background: rgb(231, 241, 250);
}
.pub-list th {
  color: #fff;
  background: #888;
}
.pub-list .num {
  margin: 5px 0;
  font-size: 14px;
  color: #222;
}
.pub-list .num strong {
  font-size: 18px;
}
.pub-list .done {
  background: #eee;
}
.pub-list a {
  text-decoration: underline;
  color: rgb(69, 120, 214);
}
</style>
