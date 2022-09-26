
<template>
  <div>
    <div class="table-responsive mt-4">
      <table class="table table-striped table-centered">
        <thead>
          <tr>
            <th>Month</th>
            <th>Monthly User</th>
            <th>New User</th>
            <th>Max CCU</th>
            <th>Bet Count</th>
            <th>Bet($)</th>
            <th>Win($)</th>
            <th>Lose($)</th>
            <th>Refund($)</th>
            <th>Revenue($)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of data" :key="item.id">
            <td>{{ item.month | formatMonth }}</td>
            <td>{{ item.usersMonthly }}</td>
            <td>{{ item.usersNew }}</td>
            <td>{{ item.maxCcu }}</td>
            <td>{{ item.bets }}</td>
            <td>{{ item.bet | formatCurrency }}</td>
            <td>{{ item.win | formatCurrency }}</td>
            <td>{{ item.lose | formatCurrency }}</td>
            <td>{{ item.refund | formatCurrency }}</td>
            <td>{{ item.revenue | formatCurrency }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <div class="col">
        <div class="overflow-auto mt-8">
          <b-pagination pills v-model="currentPage" :total-rows="rows" :per-page="perPage" limit="10" align="center" @input="load()"></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const moment = require('moment');
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

export default {
  components: { Layout, PageHeader },
  props: [ 'filters' ],
  data() {
    return {
      perPage: 50,
      currentPage: 1,
      rows: 0,
      data: [],
    };
  },
  filters: {
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      console.log(this.filters, this.currentPage, this.perPage);
      var { provider, game, term, dateFrom, dateTo, monthFrom, monthTo } = this.filters;
      if(term == 'm') { dateFrom = moment(monthFrom, 'YYYY-MM'); dateTo = moment(monthTo, 'YYYY-MM').utc(true).add(1, 'months').add(-1, 'days'); }
      var p = { page: this.currentPage, perPage: this.perPage, provider, game, term, dateFrom: moment(dateFrom).format('YYYY-MM-DD'), dateTo: moment(dateTo).utc(true).add(1, 'days').format('YYYY-MM-DD') };
      console.log(p);
      var data = await this.$store.dispatch("analytics/contentMonthlyList", p);
      var { totalCount, rowsPerPage, currentPage, rows } = data;
      console.log(data);
      this.currentPage = currentPage;
      this.perPage = rowsPerPage;
      this.rows = totalCount;
      this.data = rows;
    },
    async search() {
      console.log(this.filters, this.currentPage, this.perPage);
      this.currentPage = 1;
      this.rows = 0;
      this.data = [];
      await this.load();
    },
    async download() {
      var { provider, game, term, dateFrom, dateTo, monthFrom, monthTo } = this.filters;
      if(term == 'm') { dateFrom = moment(monthFrom, 'YYYY-MM'); dateTo = moment(monthTo, 'YYYY-MM').utc(true).add(1, 'months').add(-1, 'days'); }
      var p = { page: this.currentPage, perPage: this.perPage, provider, game, term, dateFrom: moment(dateFrom).format('YYYY-MM-DD'), dateTo: moment(dateTo).utc(true).add(1, 'days').format('YYYY-MM-DD') };
      p.download = true;
      console.log(p);
      var data = await this.$store.dispatch("analytics/contentMonthlyList", p);
      await this.load();
    }
  },
};
</script>
