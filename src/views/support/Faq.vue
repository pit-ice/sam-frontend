<template>
  <div class="col-md-12">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" width="30%">#</th>
          <th scope="col" width="*">Title</th>
        </tr>
      </thead>
      <tbody v-for="(faq, index) in faqs" :key="faq.title">
        <!-- <tr @click="faq.open = !faq.open"> -->
        <tr @click="openCheck(index)">
          <th scope="row" width="30%">{{ index + 1 }}</th>
          <td width="*">{{ faq.title }}</td>
        </tr>
        <tr v-if="clickId === index && clickOpen">
          <th scope="row" width="30%"></th>
          <td width="*">{{ faq.contents }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <button type="button" @click="excelDownFunc">Excel download</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      clickId: '',
      clickOpen: false,
    };
  },
  computed: {
    faqs() {
      return this.$store.state.faq.faqs;
    },
    rows() {
      return this.$store.state.faq.faqs.length;
    },
  },
  created() {
    this.$store.dispatch('faq/getFaqData');
  },

  methods: {
    openCheck: function (id) {
      if (this.clickOpen) {
        this.clickId = id;
        this.clickOpen = false;
      } else {
        this.clickId = id;
        this.clickOpen = true;
      }
    },
    excelDownFunc() {
      const XLSX = require('xlsx');
      // 엑셀 워크시트로 json 내보내기
      // 배열만 가능
      var dataWS = XLSX.utils.json_to_sheet(this.faqs, this.faqs.length);
      // 엑셀의 workbook을 만든다
      // workbook은 엑셀파일에 지정된 이름이다.
      var wb = XLSX.utils.book_new();
      // workbook에 워크시트 추가
      // 시트명은 'nameData'
      XLSX.utils.book_append_sheet(wb, dataWS, 'nameData');
      // 엑셀 파일을 내보낸다.
      XLSX.writeFile(wb, 'example.xlsx');
    },
  },
};
</script>
