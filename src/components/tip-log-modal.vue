<template>
  <div :class="['detail_popup']" :style="styleObject" :id="MODAL_KEY">
    <a href="javascript:;" class="xBtn" @click="reset"><img :src="iconURL"></a>
    <div class="popupTitle"><span>Tip</span></div>
    <div class="contents">
      <div class="summary">Period : {{ summary.dateFrom | formatDate }} ~ {{ summary.dateTo | formatDate }} <b>Tip($) : {{ summary.total | formatCurrency }}</b></div>
      <div class="scrollBox">
          <div class="tableBox">
            <ul class="thBox">
                <li class="item01"><p>Date</p></li>
                <li class="item02"><p>From</p></li>
                <li class="item03"><p>To</p></li>
                <li class="item04"><p>Amount</p></li>
                <li class="item05"><p>Balance ($)</p></li>
              </ul>
              <ul class="tdBox">
                <li v-for="item of rows" :key="item.id">
                  <p class="item01">{{ item.dateTime | formatDate }}<span class="time">{{ item.dateTime | formatTime }}</span></p>
                  <p class="item02">{{ item.from }}</p>
                  <p class="item03">{{ item.to }}</p>
                  <p class="item04">{{ item.amount | formatCurrency }}</p>
                  <p class="item05">{{ item.balance | formatCurrency }}</p>
                </li>              
              </ul>
          </div>
      </div>
      <div class="btnBox">
          <a href="javascript:;" @click="reset">CLOSE</a>
      </div>
    </div>
  </div>
</template>

<script>
export const MODAL_KEY = "tip-log-modal";

import { mapState } from "vuex";

export default {
  components: {},
  created() {},
  data() {
    return {
      MODAL_KEY,
      filters: { dateFrom: "", dateTo: "", userId: 0 },
      summary: {},
      dateFrom: "",
      dateTo: "",
      balance: 0,
      perPage: 20,
      page: 1,
      total: 0,
      rows: [],
      iconURL: this.$store.getters.iconURL.close_s
    };
  },
  computed: {
    ...mapState({
      visible: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].isVisible,
      title: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].title || "Tip",
      initialfilters: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].filters,
      userId: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].userId,
    }),
    styleObject() { return { display: this.visible ? 'block' : 'none' } }
  },
  mounted() {
    console.log("mounted", MODAL_KEY);
    this.reset();
  },
  methods: {
    async load() {
      this.filters = {...this.initialfilters, userId: this.userId};
      console.log("load", UV(this.userId), UV(this.filters));
      this.rows = [];
      var view = await loadPagedView(this, `/partners/views/users/tipLogs`, this.filters);
    },
    reset() {
      hideModal({ self: this, key: MODAL_KEY });
    },
  },
  watch: {
    visible: async function() { if(this.visible) this.load(); }
  }
};
import {showModal,hideModal, dispatchPaged } from "@/utils";

</script>
