<template>
  <div :class="['tip_popup']" :style="styleObject" :id="MODAL_KEY">
      <a href="javascript:;" class="xBtn" @click="reset"><img src="img/icon_close_s.png"></a>
      <div class="contents">
        <div class="cash">
            <p>TIP</p>
            <span>Cash($) : <b>{{ cash | formatCurrency }}</b></span>
        </div>
        <ul class="tipInfo">
            <li>
                <label>* To</label>
                <div class="box">
                    <img src="img/icon_username.png" class="icon">
                    <span>{{userName}}</span>
                </div>
            </li>
            <li>
                <label>* Amount</label>
                <div class="box">
                    <img src="img/icon_coin.png" class="icon">
                    <span><input type="number" v-model="amount"></span>
                </div>
            </li>
        </ul>
        <!-- <div class="check">
            <input type="checkbox" id="tipCheck" :v-model="nochat"><label for="tipCheck">Don’t show tip in chat</label>
        </div> -->
        <div class="btnBox">
            <a href="javascript:;" @click="send">SEND</a>
        </div>
    </div>
  </div>
</template>

<script>
export const MODAL_KEY = "tip-modal";

import { mapState } from "vuex";

export default {
  components: {},
  created() {},
  data() {
    return {
      MODAL_KEY,
      filters: {},
      userName: "",
      cash: 0,
      amount: 10,
      nochat: true,
    };
  },
  mounted() {
    console.log("mounted", MODAL_KEY);
    this.reset();
  },
  computed: {
    ...mapState({
      modalVisible: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].isVisible,
      title: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].title || "Tip",
      initialFilters: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].filters,
      userId: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].userId,
    }),
    styleObject() { return { display: this.modalVisible ? 'block' : 'none' } }
  },
  methods: {
    async load() {
      console.log("load", UV(this.userId));
      var view = await loadView(this, `/partners/views/users/tips/${this.userId}`, {});
      this.userName = view.userName;
      this.cash = view.cash;
    },
    reset() {
      hideModal({ self: this, key: MODAL_KEY });
    },
    async send() {
      console.log("send", this.userId, this.amount);
      await save(this, `/partners/views/users/tips`, null, { userId: this.userId, amount: this.amount });
    }
  },
  watch: {
    modalVisible: async function() { if(this.modalVisible) this.load(); }
  }
};
import {showModal,hideModal, dispatchPaged } from "@/utils";

</script>
