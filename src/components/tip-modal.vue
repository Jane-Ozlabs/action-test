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
                    <span><input type="text" @input="bindNumber" :value="number"></span>
                </div>
            </li>
        </ul>
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
      number: 0,
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
      onClose: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].onClose,
    }),
    styleObject() { return { display: this.modalVisible ? 'block' : 'none' } }
  },
  methods: {
    bindNumber(event) {
      this.number = event.target.value
    },
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
      if(this.cash < this.number){
        await Swal.fire({ text: "No Cash",  showCancelButton: false, confirmButtonColor: "#34c38f" });
        this.number = 0;
        return
      }
      await save(this, `/partners/views/users/tips`, null, { userId: this.userId, amount: this.number });
      await Swal.fire({ text: "Sucess!",  showCancelButton: false, confirmButtonColor: "#34c38f" });
      this.load()
      this.number = 0;
    }
  },
  watch: {
    modalVisible: async function() { if(this.modalVisible) this.load(); },
    number(val) {
      const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|.|,|-]/;

      if(reg.exec(val)!==null) this.number = val.replace(/[^0-9]/g,'');
    }
  }
};
import {showModal,hideModal, dispatchPaged } from "@/utils";

</script>
