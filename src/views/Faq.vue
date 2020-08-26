<template>
  <div class="col-md-12">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" width="30%">#</th>
          <th scope="col" width="*">Name</th>
        </tr>
      </thead>
      <tbody v-for="faq in faqs" :key="faq.id">
        <tr @click="faq.open = !faq.open">
          <th scope="row" width="30%">{{ faq.id }}</th>
          <td width="*">{{ faq.name }}</td>
        </tr>
        <tr v-show="faq.open">
          <td colspan="2" width="*">{{ faq.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {};
  },
  computed: {
    faqs() {
      return this.$store.state.faq.faqs;
    },
  },
  created() {
    this.$store.dispatch('faq/getFaqData');
  },
};
</script>
