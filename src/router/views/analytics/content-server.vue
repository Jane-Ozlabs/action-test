
<template>
  <div>
    <div class="table-responsive mt-4">
      <table class="table table-striped table-centered">
        <thead>
          <tr>
            <th rowspan="2">Date</th>
            <th rowspan="2">Round</th>
            <th colspan="2">Banker Pair</th>
            <th colspan="2">Banker</th>
            <th colspan="2">Tie</th>
            <th colspan="2">Player</th>
            <th colspan="2">Player Pair</th>
            <th rowspan="2">Result</th>
            <th colspan="3">Balance</th>
          </tr>
          <tr>
            <th>User</th>
            <th>Bet</th>
            <th>User</th>
            <th>Bet</th>
            <th>User</th>
            <th>Bet</th>
            <th>User</th>
            <th>Bet</th>
            <th>User</th>
            <th>Bet</th>
            <th>Win</th>
            <th>Lose</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of data" :key="item.id">
            <td>{{ item.datetime | formatUTCDateTime }}</td>
            <td>{{ item.round }}</td>
            <td>{{ item.bankerPairs }}</td>
            <td>{{ item.bankerPair | formatCurrency }}</td>
            <td>{{ item.bankers }}</td>
            <td>{{ item.banker | formatCurrency }}</td>
            <td>{{ item.ties }}</td>
            <td>{{ item.tie | formatCurrency }}</td>
            <td>{{ item.players }}</td>
            <td>{{ item.player | formatCurrency }}</td>
            <td>{{ item.playerPairs }}</td>
            <td>{{ item.playerPair | formatCurrency }}</td>
            <td>{{ item.result }}</td>
            <td>{{ item.win | formatCurrency }}</td>
            <td>{{ item.lose | formatCurrency }}</td>
            <td>{{ item.sum | formatCurrency }}</td>
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
      if(term == 'm') { dateFrom = moment(monthFrom, 'YYYY-MM'); dateTo = moment(monthTo, 'YYYY-MM'); }
      dateFrom = dateTo; // server
      var p = { page: this.currentPage, perPage: this.perPage, provider, game, term, dateFrom, dateTo: moment(dateTo).utc(true).add(1, 'days').format('YYYY-MM-DD') };
      console.log(p);
      var data = await this.$store.dispatch("analytics/contentServerList", p);
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
      if(term == 'm') { dateFrom = moment(monthFrom, 'YYYY-MM'); dateTo = moment(monthTo, 'YYYY-MM'); }
      dateFrom = dateTo; // server
      var p = { page: this.currentPage, perPage: this.perPage, provider, game, term, dateFrom, dateTo: moment(dateTo).utc(true).add(1, 'days').format('YYYY-MM-DD') };
      p.download = true; 
      console.log(p);
      var data = await this.$store.dispatch("analytics/contentServerList", p);
      await this.load();
    }
  },
};
</script>
