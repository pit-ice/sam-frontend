<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label
        >Files
        <input type="file" id="files" ref="files" multiple @change="handleFilesUpload" />
      </label>
      <button @click="submitFiles">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'File',
  /*
      Defines the data used by the component
    */
  data() {
    return {
      files: [],
    };
  },

  methods: {
    /*
        Submits all of the files to the server
      */
    submitFiles() {
      //   console.log('submitFiles : ' + event);
      /*
          Initialize the form data
        */
      let formData = new FormData();

      /*
          Iteate over any file sent over appending the files
          to the form data.
        */
      //let formData = { name: this.files.name, size: this.files.size, file: this.files };
      formData.append('attcFileData1', this.files, this.files.fileName);
      this.$store.dispatch('file/upload', formData);

      /*
          Make the request to the POST /multiple-files URL
        */
    },

    /*
        Handles a change on the file upload
      */
    handleFilesUpload(event) {
      console.log(event);
      this.files = event.target.files[0];
    },
  },
};
</script>
