<template>
  <div :class="['detail_popup']" :style="styleObject" :id="MODAL_KEY">
    <a href="javascript:;" class="xBtn" @click="reset"><img src="img/icon_close_s.png"></a>
    <div class="popupTitle"><span>Deposit/Withdrawal</span></div>
    <div class="contents">
        <div class="summary">Period : {{ summary.dateFrom | formatDate }} ~ {{ summary.dateTo | formatDate }} <b>Cash balance($) : {{ summary.total | formatCurrency }}</b></div>
        <div class="scrollBox">
            <div class="tableBox">
            	<ul class="thBox">
                	<li class="item01-2"><p>Date</p></li>
                	<li class="item02-2"><p>Transaction</p></li>
                	<li class="item03-2"><p>Type</p></li>
                	<li class="item04-2"><p>Amount (Crypto)</p></li>
                	<li class="item05-2"><p>Amount ($)</p></li>
                	<li class="item06-2"><p>Balance</p></li>
                </ul>
                <ul class="tdBox">
                  <li v-for="item of rows" :key="item.id" :class="item.transaction == 'withdrawal' ? 'withdrawal' : ''">
                    <p class="item01-2">{{ item.dateTime | formatDate }}<span class="time">{{ item.dateTime | formatTime }}</span></p>
                    <p class="item02-2">{{ item.transaction }}</p>
                    <p class="item03-2">{{ item.currency }}</p>
                    <p class="item04-2">{{ item.amountCC | formatCurrency }}</p>
                    <p class="item05-2">{{ item.amount | formatCurrency }}</p>
                    <p class="item06-2">{{ item.balance | formatCurrency }}</p>
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
export const MODAL_KEY = "cash-log-modal";

import { mapState } from "vuex";

export default {
  components: {},
  created() {},
  data() {
    return {
      MODAL_KEY,
      filters: { userId: 0,dateFrom: "", dateTo: "", page: 1, perPage: 20, total: 0 },
      summary: { dateFrom: "", dateTo: "", total: 0 },
      rows: [],
    };
  },
  mounted() {
    console.log("mounted", MODAL_KEY);
    this.reset();
  },
  computed: {
    ...mapState({
      visible: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].isVisible,
      title: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].title || "Deposit/Withdrawal",
      initialFilters: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].filters,
      userId: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].userId,
    }),
    styleObject() { return { display: this.visible ? 'block' : 'none' } }
  },
  methods: {
    async load() {
      this.rows = [];
      this.filters.userId = this.userId;
      console.log("load", this.userId, UV(this.initialFilters), UV(this.filters));
      var res = await loadPagedView(this, "/partners/views/users/cashLogs", {});
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
