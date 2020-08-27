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
        <!-- <tr @click="faq.open = !faq.open"> -->
        <tr @click="openCheck(faq.id)">
          <th scope="row" width="30%">{{ faq.id }}</th>
          <td width="*">{{ faq.name }}</td>
        </tr>
        <tr v-if="clickId === faq.id && clickOpen">
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
    return {
      clickId: '',
      clickOpen: false,
    };
  },
  computed: {
    faqs() {
      return this.$store.state.faq.faqs;
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
  },
};
</script>
