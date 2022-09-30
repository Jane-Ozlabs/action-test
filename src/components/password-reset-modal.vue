<template>
  <div :class="['alert_popup']" :style="styleObject" :id="MODAL_KEY">
      <a href="javascript:;" class="xBtn" @click="reset"><img src="img/icon_close_s.png"></a>
      <div class="contents">
          <div class="text01">{{modalTitle}}</div>
          <div class="text02">{{modalContent}}</div>
          <div class="btnBox">
              <a href="javascript:;" @click="handleOk">OK</a>
              <a href="javascript:;" @click="reset">CANCEL</a>
          </div>
      </div>
  </div>
</template>
<script>
export const MODAL_KEY = 'password-reset-modal';

export default {
  components: {},
  created() {
  },
  data() {
    return {
      MODAL_KEY,
      modalTitle: "Are you sure you want to reset your password?",
      modalContent: "A reset link will be sent to the email you entered during registration."
    }
  },
  computed: {
    ...mapState({
      modalVisible: state => { console.log(state, MODAL_KEY, state.modals[MODAL_KEY]); return state.modals[MODAL_KEY] && state.modals[MODAL_KEY].isVisible},
      userId: state => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].userId,
      email: state => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].email,
    }),
    styleObject() { return { display: this.modalVisible ? 'block' : 'none' } }
  },
  mounted() {
    console.log("mounted", MODAL_KEY);
    this.reset();
  },
  methods: {
    reset() {
      this.$store.commit("NOMODAL", MODAL_KEY);
    },
    handleOk() {
      var modal = { ...this.$store.getters.modals[MODAL_KEY] };
      console.log(modal);

      loadView(this, "/partners/sendpasswordresetemail", { email: this.email });

      this.reset();
    },
  }
};
import { mapState } from 'vuex';
import '@/../public/css/style.css';
</script>
