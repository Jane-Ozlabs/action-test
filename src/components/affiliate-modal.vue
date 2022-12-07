<template>
  <div :class="['alert_popup']" :style="styleObject" :id="MODAL_KEY">
      <a href="javascript:;" class="xBtn" @click="reset"><img :src="iconURL" /></a>
      <div class="contents">
        <div class="text01" style="color:#414141">{{VUE_APP_LINK_AFFILIATE}}<font color="#0066ff">{{affiliate}}</font></div>
        <div class="btnBox">
            <a href="javascript:;" @click="copy">COPY</a>
        </div>
      </div>
  </div>
</template>
<script>
export const MODAL_KEY = 'affiliate-modal';

export default {
  components: {},
  created() {
  },
  data() {
    return {
      MODAL_KEY,
      VUE_APP_LINK_AFFILIATE: process.env.VUE_APP_LINK_AFFILIATE,
      iconURL: this.$store.getters.iconURL.close_s
    }
  },
  computed: {
    ...mapState({
      modalVisible: state => { console.log(state, MODAL_KEY, state.modals[MODAL_KEY]); return state.modals[MODAL_KEY] && state.modals[MODAL_KEY].isVisible},
      affiliate: state => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].affiliate,
    }),
    styleObject() { return { display: this.modalVisible ? 'block' : 'none' } }
  },
  mounted() {
    console.log("mounted", MODAL_KEY);
    this.reset();
  },
  methods: {
    copy() {
      copy(`${this.VUE_APP_LINK_AFFILIATE}${this.affiliate}`);
      this.reset();
    },
    reset() {
      this.$store.commit("NOMODAL", MODAL_KEY);
    },
    handleOk() {
      var modal = { ...this.$store.getters.modals[MODAL_KEY] };
      console.log(modal);
      this.reset();
    },
  }
};
import copy from 'copy-to-clipboard';
import { mapState } from 'vuex';
import '@/../public/css/style.css';
</script>
