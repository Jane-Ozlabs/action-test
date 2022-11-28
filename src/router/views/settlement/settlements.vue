<template>
  <Layout :breadcrumb="items">
  <div class="mainTitle"><span>Payment Management</span></div>
    
    <Header ref="header" :agentLines="agentLines" @input="updateFilters" @action="action"/>

    <div class="scrollBox">
      <div class="tableBox">
        <table>
          <tr>
            <th><p>Date</p></th>
            <th><p>Grade</p></th>
            <th><p>Group</p></th>
            <th><p>Username</p></th>
            <th><p>Bet</p></th>
            <th class="radiusRight"><p>Win/Lose</p></th>
              
            <th class="radiusLeft"><p>Bettingspoon</p><span class="absText2">Revenue share</span></th>
            <th class="radiusRight"><p>Partner</p></th>
              
            <th class="radiusLast"><p>Process</p></th>
          </tr>
          <tr v-for="x of rows" :key="x.id">
            <td>{{ x.yyyymm | formatMonth }}</td>
            <td>{{ x.grade }}</td>
            <td>{{ x.group }}</td>
            <td>{{ x.username }}</td>
            <td>{{ x.bet | formatCurrency}}</td>
            <td :color="x.winLose < 0 ? '#dd3100' : '#006cff'">{{ x.winLose | formatCurrency}}</td>
            <td>{{ x.rS0 | formatCurrency }}</td>
            <td>{{ x.rS1 | formatCurrency }}</td>
            <td :color="x.status == 'pending' ? '#dd3100' : '#000'">{{ x.status }}</td>
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
    title: "정산 관리",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, Header, DayFilter, UserFilter, Pagination },
  data() {
    return {
      title: "정산 관리",
      items: [],
      filters: { agent1: 0, agent2: 0, agent3: 0, dateFrom: "", dateTo: "", username: "", page: 1, perPage: 50, total: 0 },
      summary: {},
      rows: [],
      agentLines: [],
    };
  },
  computed: {
  },
  mounted() {
    console.log(this.$route.params);
    setMainAreaClass("mainPaymentManagement");
    this.load();
  },
  methods: {
    async load() {
      this.updateFilters();

      if(this.filters.dateFrom.split('-').join('') > this.filters.dateTo.split('-').join('')){
        alert('Please re-enter the date');
      }else {
        this.rows = [];
        var res = await loadPagedView(this, "/partners/views/settlements", {});

        this.agentLines = res.agentLines;
        this.summary = res.summary;

        hideRightPanel();
      }
    },
    async updateFilters() {
      if(this.$refs.header) {
        this.filters.agent1 = this.$refs.header.filters.id1;
        this.filters.agent2 = this.$refs.header.filters.id2;
        this.filters.agent3 = this.$refs.header.filters.id3;
        this.filters.dateFrom = moment(this.$refs.header.filters.dateFrom, 'YYYY-MM').format("YYYY-MM-DD");
        this.filters.dateTo = moment(this.$refs.header.filters.dateTo, 'YYYY-MM').endOf('month').add(1, "day").format("YYYY-MM-DD");
        this.filters.username = this.$refs.header.filters.username;
      } else {
        this.filters = { agent1: 0, agent2: 0, agent3: 0, 
          dateFrom: moment().utc().startOf('month').format("YYYY-MM-DD"), 
          dateTo: moment().utc().startOf('month').add(1, 'months').format("YYYY-MM-DD"), username: "", page: 1, perPage: 50, total: 0 };
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
      await download(this, "/partners/views/settlements", {});
    },
  },
};
import Header from "./settlements-header.vue";
import Pagination from "@/components/pagination";
import {revenueDailyView} from "@/services/partner";
const moment = require('moment');
import {showRightPanel,hideRightPanel,setMainAreaClass} from "@/utils";
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import DayFilter from "@/components/day-filter";
import UserFilter from "@/components/user-filter";
import appConfig from "@/app.config";
</script>
