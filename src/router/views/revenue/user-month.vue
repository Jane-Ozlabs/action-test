<template>
  <div class="detailArea detailTable">
    <xbtn />
    <div class="detailTitle"><span>Date : {{ summary.date | formatMonth }}, Username : {{ summary.username }}</span></div>
      <div class="tableBox">
        <table class="tb02">
          <tr>
            <th style="width:22%"><p>Date</p></th>
            <th style="width:35%"><p style="text-align:left">Game</p></th>
            <th><p>Bet</p></th>
            <th><p>Win/Lose</p></th>
          </tr>
          <tr class="total">
            <th>&nbsp;</th>
            <th style="text-align:left">Total</th>
            <th>{{summary.bet | formatCurrency}}</th>
            <th><font :color="colorWinLose(summary)">{{summary.winLose | formatCurrency}}</font></th>
          </tr>
          <tr v-for="x of rows" :key="x.id">
            <td>{{x.dateTime | formatDateTime}}</td>
            <td style="text-align: left">{{x.game}}</td>
            <td>{{x.bet | formatCurrency}}</td>
            <td><font :color="colorWinLose(x)">{{x.winLose | formatCurrency}}</font></td>
          </tr>
        </table>
      </div>
  </div>
</template>
<script>
export default {
  page: {
    title: "일별 매출 현황",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, AgentFilter, DayFilter, UserFilter },
  props: {
    userId: {},
    date: {},
  },
  data() {
    return {
      title: "일별 매출 현황",
      filters: { dateFrom: "", dateTo: "", username: "" },
      rows: [],
      summary: { date: "", username: "", bet: 0, winLose: 0 },
    };
  },
  computed: {
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      this.updateFilters();

      this.rows = [];
      var res = await loadPagedView(this, `/partners/views/revenue/monthly/${this.userId}`, {});
      console.log("loadPagedView", UV(res));

      this.summary = res.summary;
    },
    updateFilters() {
      this.filters.dateFrom = moment(this.date).startOf("day").format("YYYY-MM-DD");
      this.filters.dateTo = moment(this.date).startOf("day").add(1, "month").format("YYYY-MM-DD");
    },
    colorWinLose(x) {
      return x.winLose < 0 ? '#006cff' : '#dd3100';
    },
  },
  watch: {
    userId() {
      this.load();
    },
    date() {
      this.load();
    },
  },
};
import {revenueMonthlyUserView} from "@/services/partner";
const moment = require('moment');
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import AgentFilter from "@/components/agent-filter";
import DayFilter from "@/components/day-filter";
import UserFilter from "@/components/user-filter";
import appConfig from "@/app.config";
import xbtn from "@/components/xbtn";
</script>
