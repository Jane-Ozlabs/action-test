<template>
  <div :class="['detail_popup']" :style="styleObject" :id="MODAL_KEY">
    <a href="javascript:;" class="xBtn" @click="reset"><img src="img/icon_close_s.png"></a>
    <div class="popupTitle"><span>Win/Lose</span></div>
    <div class="contents">
        <div class="summary">Period : {{ summary.dateFrom | formatDate }} ~ {{ summary.dateTo | formatDate }} <b>Cash balance($) : {{ summary.total | formatCurrency }}</b></div>
        <div class="scrollBox">
            <div class="tableBox">
            	<ul class="thBox">
                	<li class="item01-1"><p>Date</p></li>
                	<li class="item02-1"><p>Category</p></li>
                	<li class="item03-1"><p>Game</p></li>
                	<li class="item04-1"><p>Bet</p></li>
                	<li class="item05-1"><p>Win</p></li>
                	<li class="item06-1"><p>Lose</p></li>
                	<li class="item07-1"><p>Balance</p></li>
                </ul>
                <ul class="tdBox">
                  <li v-for="item of rows" :key="item.id">
                    <p class="item01-1">{{ item.dateTime | formatDate }}<span class="time">{{ item.dateTime | formatTime }}</span></p>
                    <p class="item02-1">{{ item.category }}</p>
                    <p class="item03-1">{{ item.game }}</p>
                    <p class="item04-1">{{ item.bet | formatCurrency }}</p>
                    <p class="item05-1">{{ item.win | formatCurrency }}</p>
                    <p class="item06-1">{{ item.lose | formatCurrency }}</p>
                    <p class="item07-1">{{ item.balance | formatCurrency }}</p>
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
export const MODAL_KEY = "game-log-modal";

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
      title: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].title || "Win/Lose",
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
      var res = await loadPagedView(this, "/partners/views/users/gameLogs", {});
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
