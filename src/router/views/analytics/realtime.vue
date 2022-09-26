<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <BarChart :height="300" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <PolarChart :height="300" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
            </div>
          </div>
        </div>
      </div>
    </b-row>
  </Layout>
</template>
<script>
const moment = require('moment');
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import BarChart from "@/router/views/charts/chartjs/BarChart";
import PolarChart from "@/router/views/charts/chartjs/PolarChart";

export default {
  page: {
    title: "Analytics Realtime",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, BarChart, PolarChart, },
  data() {
    return {
      title: "Analytics Realtime",
      items: [{ text: "Analytics", href: "/analytics/realtime" }, { text: "Realtime", href: "/analytics/realtime" }],
      filters: { id: null, content: null, days: null, dateFrom: null, dateTo: null },
      contentOptions: [
        { value: 'total', text: 'Total' },
        { value: 'deposit', text: 'Deposit' },
        { value: 'withdrawal', text: 'Withdrawal' },
        { value: 'game', text: 'Game' },
        { value: 'tip', text: 'Tip' },
        { value: 'bonus', text: 'Bonus' },
      ],
      daysOptions: [
        { value: '1', text: 'Today' },
        { value: '7', text: '7 days' },
        { value: '30', text: '30 days' },
      ],
      perPage: 50,
      currentPage: 1,
      rows: 50,
      balanceLogs: [],
    };
  },
  filters: {
  },
  computed: {
  },
  mounted() {
    console.log(this.$route.params);
    var { filters } = this.$route.params;
    if(filters) {
      this.filters.id = filters.id;
      this.filters.content = filters.content;
      this.filters.days = filters.days;
    }
    if(!this.filters.content) this.filters.content = "total";
    if(!this.filters.days) this.filters.days = "1";

    this.daysChanged();
    this.load();
  },
  methods: {
    async load() {
      var data = await this.$store.dispatch("user/balanceLogs", { page: this.currentPage, perPage: this.perPage, 
        filterId: this.filters.id, filterContent: this.filters.content, filterDays: this.filters.days, 
        filterDateFrom: this.filters.dateFrom, filterDateTo: moment(this.filters.dateTo).utc(true).add(1, 'days').format('YYYY-MM-DD'), });
      var { totalCount, rowsPerPage, currentPage, rows } = data;
      console.log(data);
      this.currentPage = currentPage;
      this.perPage = rowsPerPage;
      this.rows = totalCount;
      this.balanceLogs = rows;
    },
    async search() {
      console.log(this.filters);
      this.currentPage = 1;
      this.rows = 0;
      this.balanceLogs = [];
      await this.load();
    },
    daysChanged() {
      console.log(this.filters.days);
      var from = moment().utc().subtract(this.filters.days-1, 'days').startOf('day');
      var to = moment().utc().startOf('day');
      this.filters.dateFrom = from.format('YYYY-MM-DD');
      this.filters.dateTo = to.format('YYYY-MM-DD');
      console.log(this.filters.dateFrom, this.filters.dateTo, from.unix(), to.unix());
    },
    dateChanged() {
      console.log("dateChanged", this.filters.dateFrom, this.filters.dateTo)
    }
  },
};
</script>
