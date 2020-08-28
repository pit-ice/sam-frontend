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
      console.log(this.$store.state.faq.faqs);
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
