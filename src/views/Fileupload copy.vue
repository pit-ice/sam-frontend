<template>
  <div class="container">
    <input-file></input-file>
    <div class="large-12 medium-12 small-12 cell">
      <label
        >Files
        <input type="file" id="files" ref="files" multiple @change="handleFilesUpload" />
      </label>
      <button @click="submitFiles">Submit</button>
    </div>
    <!-- <img
      src="https://postfiles.pstatic.net/MjAxNzA0MjhfMjgx/MDAxNDkzMzcxMTA0OTY0.oaRPyvsTK5dg0jJcGeNvIjawMbYfY-gKgj5AalMyKaIg.Uj0rzkxqTBEFXqaSj305WHIsILQSi3BrlxNdst3AJAQg.PNG.qhfk545/%EB%A0%88%EC%A0%84%EB%93%9C.png?type=w966"
      alt="일정접기"
      @click="submitDown"
    /> -->
    <div v-if="loaded">
      <vue-ellipse-progress
        :loading="true"
        :no-data="false"
        :angle="-90"
        :legend="false"
        :thickness="100"
        dash="strict 60 0.95"
        :empty-thickness="100"
        line="butt"
        animation="rs 1000"
        :dot="{ size: 100, backgroundColor: 'rgba(100,256,4,1)', width: '2px' }"
        line-mode="in-over"
      />
    </div>
    {{ this.loaded }}
    <input type="file" @change="readFile" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
  </div>
</template>

<script>
export default {
  name: 'File',

  data() {
    return {
      files: [],
      excelData: [],
      progressRate: 0,
      loaded: false,
    };
  },

  computed: {
    progress() {
      return this.$store.state.file.progressRate;
    },
  },

  methods: {
    submitFiles() {
      this.loaded = true;
      let formData = new FormData();
      formData.append('attcFileData1', this.files, this.files.fileName);
      this.$store
        .dispatch('file/upload', formData)
        .then(() => {
          this.loaded = false;
        })
        .catch(() => {});
    },
    handleFilesUpload(event) {
      this.files = event.target.files[0];
    },
    submitDown() {
      this.$store.dispatch('file/down');
    },

    readFile(event) {
      this.loaded = true;
      this.files = event.target.files[0];
      let formData = new FormData();
      formData.append('attcFileData1', this.files, this.files.fileName);
      this.$store
        .dispatch('file/excel', formData)
        .then(() => {
          this.loaded = false;
        })
        .catch(() => {});
    },
    // readFile() {
    //   const XLSX = require('xlsx');

    //   this.excelData = [];
    //   const input = event.target;
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     console.log('onload');
    //     const fileData = reader.result;
    //     const wb = XLSX.read(fileData, { type: 'binary' });
    //     wb.SheetNames.forEach((sheetName) => {
    //       const rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
    //       this.excelData.push(JSON.stringify(rowObj));
    //     });
    //   };

    //   reader.onloadend = () => {
    //     console.log('onloadend');
    //     this.loaded = false;
    //   };
    //   this.loaded = true;
    //   var extension = input.files[0].name.split('.').pop().toLowerCase();
    //   if (extension === 'csv') {
    //     reader.readAsText(input.files[0], 'utf-8');
    //   } else {
    //     reader.readAsBinaryString(input.files[0]);
    //   }
    // },
  },
};
</script>
