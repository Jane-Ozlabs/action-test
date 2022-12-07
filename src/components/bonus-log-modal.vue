<template>
  <div :class="['detail_popup']" :style="styleObject" :id="MODAL_KEY">
    <a href="javascript:;" class="xBtn" @click="reset"><img :src="iconURL"></a>
    <div class="popupTitle"><span>Bonus</span></div>
    <div class="contents">
        <div class="summary">Period : {{ summary.dateFrom | formatDate }} ~ {{ summary.dateTo | formatDate }} <b>Bonus($) : {{ summary.total | formatCurrency }}</b></div>
        <div class="scrollBox">
            <div class="tableBox">
              <ul class="thBox">
                  <li class="item01"><p>Date</p></li>
                  <li class="item02"><p>Bonus Deposit</p></li> 
                  <li class="item03"><p>Expire Date</p></li>
                  <li class="item04"><p>Cash in</p></li>
                  <li class="item05"><p>Bonus Dalance</p></li>
                </ul>
                <ul class="tdBox">
                  <li v-for="item of rows" :key="item.id">
                    <p class="item01">{{ item.dateTime | formatDate }}<span class="time">{{ item.dateTime | formatTime }}</span></p>
                    <p class="item02">{{ item.deposit | formatCurrency }}</p>
                    <p class="item03">{{ item.expiresAt | formatDate }}<span class="time">{{ item.expiredAt | formatTime }}</span></p>
                    <p class="item04">{{ item.cashIn | formatCurrency }}</p>
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
export default {
    components: {},
    created() {},
    data() {
        return {
            MODAL_KEY,
            filters: { userId: 0,dateFrom: "", dateTo: "", page: 1, perPage: 20, total: 0 },
            summary: { dateFrom: "", dateTo: "", total: 0 },
            rows: [],
            iconURL: this.$store.getters.iconURL.close_s
        };
    },
    mounted() {
        console.log("mounted", MODAL_KEY);
        this.reset();
    },
    computed: {
        ...mapState({
            visible: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].isVisible,
            title: (state) => (state.modals[MODAL_KEY] && state.modals[MODAL_KEY].title) || "Bonus",
            initialFilters: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].filters,
            userId: (state) => state.modals[MODAL_KEY] && state.modals[MODAL_KEY].userId,
        }),
        styleObject() { return { display: this.visible ? 'block' : 'none' } },
    },
    methods: {
        async load() {
            this.rows = [];
            this.filters.userId = this.userId;
            console.log("load", this.userId, UV(this.initialFilters), UV(this.filters));
            var res = await loadPagedView(this, "/partners/views/users/bonusLogs", {});
        },
        reset() {
            hideModal({ self: this, key: MODAL_KEY });
        },
    },
    watch: {
        visible: async function () {
            console.log(MODAL_KEY, UV(this.visible))
            if (this.visible) this.load();
        },
    },
};
import {showModal,hideModal, dispatchPaged } from "@/utils";
export const MODAL_KEY = "bonus-log-modal";
import { mapState } from "vuex";

</script>
