<template>
  <Layout :breadcrumb="items">
    <div class="mainTitle"><span>Betting Status</span></div>
    <Header ref="header" :agentLines="agentLines" @input="updateFilters" @action="action"/>
    <div class="summary"><span><b>Group :</b> {{summary.group}}</span> <span><b>Date :</b> {{summary.dateFrom | formatDate}} ~ {{summary.dateTo | formatDate}}</span> <span><b>Member :</b> {{summary.numUsers}}</span></div>
    <div class="scrollBox">
      <div class="tableBox">
          <table>
              <tr>
                  <th><p>Date</p></th>
                  <th><p>Username</p></th>                            
                  <th><p>Category</p></th>
                  <th><p>Game</p></th>
                  <th><p>Bet</p></th>
                  <th><p>Win/Lose</p></th>
              </tr>
              <tr v-for="x of rows" :key="x.id">
                <td>{{ x.dateTime | formatDateTime }}</td>
                <td>{{ x.username }}</td>
                <td>{{ x.category }}</td>
                <td>{{ x.game }}</td>
                <td>{{ x.bet | formatCurrency}}</td>
                <td>{{ x.winLose | formatCurrency}}</td>
              </tr>
            </table>
        </div>
    </div>
    <Pagination v-model="filters.page" :totalRows="filters.total" :perPage="filters.perPage" limit="10" @input="load()"/>
  </Layout>
</template>
<script>
export default {
  page: {
    title: "회원 베팅 현황",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, Header, PageHeader, AgentFilter, DayFilter, UserFilter, Pagination },
  data() {
    return {
      title: "회원 베팅 현황",
      items: [],
      filters: { n1: "", n2: "", n3: "", dateFrom: "", dateTo: "", username: "" },
      summary: { group: "", numUsers: 0, dateFrom: "", dateTo: "" },
      agentLines: [],
    };
  },
  filters: {
  },
  computed: {
  },
  mounted() {
    setMainAreaClass("mainBettingStatus");
    this.load();
  },
  methods: {
    async load() {
      this.updateFilters();

      this.rows = [];
      var res = await loadPagedView(this, "/partners/views/analytics/bettings", {});
      console.log("loadPagedView", UV(res));

      this.agentLines = res.agentLines;
      this.summary = res.summary;

      hideRightPanel();
    },
    async updateFilters() {
      if(this.$refs.header) {
        this.filters.agent1 = this.$refs.header.filters.id1;
        this.filters.agent2 = this.$refs.header.filters.id2;
        this.filters.agent3 = this.$refs.header.filters.id3;
        this.filters.dateFrom = this.$refs.header.filters.dateFrom;
        this.filters.dateTo = this.$refs.header.filters.dateTo;
        this.filters.username = this.$refs.header.filters.username;
      } else {
        this.filters = { agent1: 0, agent2: 0, agent3: 0, 
          dateFrom: moment().utc().startOf('day').format("YYYY-MM-DD"), 
          dateTo: moment().utc().endOf('day').format("YYYY-MM-DD"), username: "", page: 1, perPage: 50, total: 0 };
      }

      console.log("updateFilters", UV(this.filters));
    },
    async action(action) {
      if(action == "search") await this.search();
      if(action == "download") await this.download();
    },
    async search() {
      await this.load();
    },
    async download() {
      await download(this, "/partners/views/analytics/bettings", {});
    },
  },
};
import Header from "./analytics-bettings-header.vue";
import Pagination from "@/components/pagination";
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import AgentFilter from "@/components/agent-filter";
import DayFilter from "@/components/day-filter";
import UserFilter from "@/components/user-filter";
import appConfig from "@/app.config";
import {analyticsBettingsView} from "@/services/partner";
const moment = require('moment');
import {showModal,hideModal,toggleRightSidebar,showRightSidebar,hideRightSidebar,dispatchPaged,} from "@/utils";
import {showRightPanel,hideRightPanel,setMainAreaClass} from "@/utils";
</script>
