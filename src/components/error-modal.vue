<template>
  <div :class="['alert_popup']" :style="styleObject" id="error-modal">
      <a href="javascript:;" class="xBtn" @click="resetError"><img src="img/icon_close_s.png"></a>
      <div class="contents">
          <div class="text01">{{errorTitle}}</div>
          <div class="text02">{{errorContent}}</div>
          <div class="btnBox">
              <a href="javascript:;" @click="resetError">OK</a>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {},
  props: [ "stay" ],
  created() {
  },
  computed: mapState({
    modalErrorShow: state => !!state.error,
    error: state => state.error,
    errorTitle: state => state.error && state.error.error || "Error",
    errorContent: state => state.error && state.error.message || "Unknown Error",
    shouldStay: state => state.error && state.error.stay || this.stay,
    styleObject() { return { display: this.modalErrorShow ? 'block' : 'none' } }
  }),
  methods: {
    resetError() {
      this.$store.commit("ERROR", null);
      if(this.shouldStay) return;
      
      var access_token = this.$store.getters['auth/accessToken'];
      if(!access_token) this.$router.push({ path: "/login" });
    },
  }
};
</script>
