<template>
  <div class="detailArea detailTable">
    <a href="javascript:;" class="xBtn"><img src="img/icon_close.png"></a>
    <div class="detailTitle"><span>Date : {{date}}, Username : {{userId}}</span></div>
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
                <th>100,000.00</th>
                <th><font color="#dd3100">- 9,000.00</font></th>
              </tr>
              <tr>
                <td style="text-align:left">2022-10-07<br>23:41:50</td>
                <td style="text-align:left">Gates of Olympus</td>
                <td>100,000.00</td>
                <td><font color="#006cff">+ 9,000.00</font></td>
              </tr>
              <tr>
                <td style="text-align:left">2022-10-07<br>23:41:50</td>
                <td style="text-align:left">Gates of Olympus</td>
                <td>100,000.00</td>
                <td><font color="#dd3100">- 9,000.00</font></td>
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
      items: [],
      filters: { n1: "", n2: "", n3: "", dateFrom: "", dateTo: "", username: "" },
    };
  },
  computed: {
  },
  mounted() {
    console.log(this.$route.params);
    var { filters } = this.$route.params;
    if(filters) {
      this.filters.provider = filters.provider;
      this.filters.game = filters.game;
      this.filters.term = filters.term;
    }
    if(!this.filters.provider) this.filters.provider = "bettingspoon";
    if(!this.filters.game) this.filters.game = "all";
    if(!this.filters.term) this.filters.term = "d";
    this.daysChanged();
  },
  methods: {
    async load() {
      var view = await revenueMonthlyUserView({ ...this.filters });
      console.log(view);
    },
    async search() {
      console.log(this.$refs.agentFilter.filters);
      console.log(this.$refs.dayFilter.filters);
      return;
      if(!this.filters.provider || !this.filters.game || !this.filters.term) { this.$store.commit("ERROR", { error: "Error", message: "Invalid Filter Values" }); return; };
      return await this.$refs.dataView.search();
    },
    daysChanged() {
      var from = moment().utc().subtract(0, 'days').startOf('day');
      var to = moment().utc().startOf('day');
      this.filters.dateFrom = from.format('YYYY-MM-DD');
      this.filters.dateTo = to.format('YYYY-MM-DD');
      this.filters.monthFrom = from.format('YYYY-MM');
      this.filters.monthTo = to.format('YYYY-MM');
      console.log(this.filters.dateFrom, this.filters.dateTo, from.unix(), to.unix());
    },
    dateChanged() {
      console.log("dateChanged", this.filters.dateFrom, this.filters.dateTo)
    },
    async download() {
      console.log("download", this.filters);
      return await this.$refs.dataView.download();
    }
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
</script>
