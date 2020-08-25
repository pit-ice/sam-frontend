<template>
  <div class="col-md-12">
    <table class="table table-striped">
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
</template>

<script>
export default {
  name: "Sample",
  data() {
    return {};
  },
  computed: {
    samples() {
      return this.$store.state.sample.samples;
    }
  },
  created() {
    this.$store.dispatch("sample/getSampleData");
  }
};
</script>
