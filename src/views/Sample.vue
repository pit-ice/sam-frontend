<template>
  <div class="col-md-12">
    <button type="button" class="btn btn-primary" @click="refreshSampleData">
      refresh
    </button>
    <div class="d-flex justify-content-center mb-3">
      <b-spinner
        class="align-self-end"
        label="Loading..."
        v-if="loading"
      ></b-spinner>
      <table class="table table-striped" v-if="!loading">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sample in samples" :key="sample.id">
            <th scope="row">{{ sample.id }}</th>
            <td>{{ sample.name }}</td>
            <td>{{ sample.category }}</td>
            <td>{{ sample.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sample',
  data() {
    return {
      loading: false,
      test: '',
    };
  },

  computed: {
    samples() {
      return this.$store.state.sample.samples;
    },
  },
  methods: {
    refreshSampleData() {
      this.loading = true;
      this.$store.dispatch('sample/getSampleData').then(() => {
        console.log('completed ....');

        this.loading = false;
      });
    },
  },
  created() {
    this.refreshSampleData();
  },
};
</script>
