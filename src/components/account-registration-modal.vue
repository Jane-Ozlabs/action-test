<template>
  <div :class="['alert_popup']" :style="styleObject" :id="MODAL_KEY">
      <a href="javascript:;" class="xBtn" @click="ok"><img src="img/icon_close_s.png"></a>
      <div class="contents">
        <div class="text01">Account registration is complete.</div>
        <div class="btnBox">
            <a href="javascript:;" @click="ok">OK</a>
        </div>
      </div>
  </div>
</template>
<script>
export const MODAL_KEY = 'account-registration-modal';

export default {
  components: {},
  created() {
  },
  data() {
    return {
      MODAL_KEY,
    }
  },
  computed: {
    ...mapState({
      modalVisible: state => { console.log(state, MODAL_KEY, state.modals[MODAL_KEY]); return state.modals[MODAL_KEY] && state.modals[MODAL_KEY].isVisible},
    }),
    styleObject() { return { display: this.modalVisible ? 'block' : 'none' } }
  },
  mounted() {
    console.log("mounted", MODAL_KEY);
    this.reset();
  },
  methods: {
    copy() {
      copy(`https://www.bettingspoon.com/referral/${this.referral}`);
      this.reset();
    },
    reset() {
      this.$store.commit("NOMODAL", MODAL_KEY);
    },
    ok() {
      this.$store.commit("MODAL", { key: MODAL_KEY, data: { isVisible: false, result: 1 }, });
    },
    handleOk() {
      var modal = { ...this.$store.getters.modals[MODAL_KEY] };
      console.log(modal);
      this.$store.dispatch("auth/resetPassword", { email: this.email });
      this.reset();
    },
  }
};
import copy from 'copy-to-clipboard';
import { mapState } from 'vuex';
import '@/../public/css/style.css';
</script>
