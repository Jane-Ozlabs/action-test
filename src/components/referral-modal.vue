<template>
  <div :class="['alert_popup']" :style="styleObject" :id="MODAL_KEY">
      <a href="javascript:;" class="xBtn" @click="reset"><img src="img/icon_close_s.png"></a>
      <div class="contents">
        <div class="text01" style="color:#414141">https://www.bettingspoon.com/referral/<font color="#0066ff">{{referral}}</font></div>
        <div class="btnBox">
            <a href="javascript:;" @click="copy">COPY</a>
        </div>
      </div>
  </div>
</template>
<script>
export const MODAL_KEY = 'referral-modal';

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
      referral: state => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].referral,
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
