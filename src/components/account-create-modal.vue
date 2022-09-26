<template>
    <b-modal id="account-create-modal" :title="errorTitle" :visible="modalErrorShow" @hidden="resetError" ok-only>
        <p class="my-4">{{errorContent}}</p>
    </b-modal>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {},
  created() {
  },
  computed: mapState({
    modalErrorShow: state => !!state.error,
    error: state => state.error,
    errorTitle: state => state.error && state.error.error || "Error",
    errorContent: state => state.error && state.error.message || "Unknown Error",
  }),
  methods: {
    resetError() {
      this.$store.commit("ERROR", null);
      var access_token = this.$store.getters['auth/accessToken'];
      if(!access_token) this.$router.push({ path: "/" });
    },
  }
};
</script>
