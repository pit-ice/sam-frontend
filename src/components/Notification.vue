<template>
  <div class="float-left">
    <b-button class="mr-2" variant="success" @click="publishTestEvent"> SEND </b-button>
    <b-dropdown>
      <template v-slot:button-content class="btn btn-primary">
        <strong>Notifications</strong><span class="badge badge-light">{{ newNotiCount }}</span></template
      >
      <b-dropdown-item href="#" v-for="noti in notifications" :key="noti.id"> {{ noti.eventType }} | {{ noti.eventStatus }}</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  computed: {
    newNotiCount() {
      return this.$store.state.noti.newNotiCount;
    },
    notifications() {
      return this.$store.state.noti.notifications;
    },
  },
  mounted() {
    this.$root.$on('bv::dropdown::show', () => {
      this.resetCount();
    });
  },
  methods: {
    resetCount() {
      this.$store.dispatch('noti/resetNewNotiCount');
    },
    publishTestEvent() {
      let userId = this.$store.state.auth.user.email;
      let data = {
        userId: userId,
        eventId: 'string',
        eventStatus: 'string',
        eventType: 'TRAINING',
      };
      this.$store.dispatch('noti/publishTestEvent', data);
    },
  },
};
</script>
