<template>
  <div :class="['alert_popup']" :style="styleObject" :id="MODAL_KEY">
      <a href="javascript:;" class="xBtn" @click="reset"><img :src="iconURL"></a>
      <div class="contents">
        <div class="text01">Do you want to save now?</div>
        <div class="btnBox">
            <a href="javascript:;" @click="ok">OK</a>
            <a href="javascript:;" @click="cancel">CANCEL</a>
        </div>
      </div>
  </div>
</template>
<script>
export const MODAL_KEY = 'save-modal';

export default {
  components: {},
  created() {
  },
  data() {
    return {
      MODAL_KEY,
      iconURL: this.$store.getters.iconURL.close_s
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
    ok() {
      this.$store.commit("MODAL", { key: MODAL_KEY, data: { isVisible: false, result: 1 }, });
    },
    cancel() {
      this.$store.commit("MODAL", { key: MODAL_KEY, data: { isVisible: false, result: 2 }, });
    },
    reset() {
      this.$store.commit("NOMODAL", MODAL_KEY);
    },
  }
};
import copy from 'copy-to-clipboard';
import { mapState } from 'vuex';
import '@/../public/css/style.css';
</script>
