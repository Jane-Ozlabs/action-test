
<template>
  <div>
    <div class="table-responsive mt-4">
      <b-table-simple>
        <b-thead>
          <tr>
            <th rowspan="2" class="align-middle">Date</th>
            <th rowspan="2" class="align-middle">Grade</th>
            <th rowspan="2" class="align-middle">Group</th>
            <th rowspan="2" class="align-middle">Username</th>
            <th rowspan="2" class="align-middle">Bet</th>
            <th rowspan="2" class="align-middle">Win/Lose</th>
            <th colspan="3" class="align-middle text-center">수익 분배</th>
          </tr>
          <tr>
            <th class="align-middle">Level 1</th>
            <th class="align-middle">Level 2</th>
            <th class="align-middle">Level 3</th>
          </tr>
        </b-thead>
        <tbody>
          <b-tr class="bg-light">
            <b-th colspan="4"><b-row><b-col>2022-06-01</b-col> <b-col>Total</b-col></b-row></b-th>
            <b-th>{{sum.bet}}</b-th>
            <b-th>{{sum.net}}</b-th>
            <b-th>{{sum.commission1}}</b-th>
            <b-th>{{sum.commission2}}</b-th>
            <b-th>{{sum.commission3}}</b-th>
          </b-tr>
          <tr v-for="x of data" :key="x.id" @click="viewDetail(x)">
            <td>{{ x.date | formatDate }}</td>
            <td>{{ x.grade }}</td>
            <td>{{ x.group }}</td>
            <td>{{ x.username }}</td>
            <td>{{ x.bet | formatCurrency}}</td>
            <td>{{ x.net | formatCurrency}}</td>
            <td>{{ x.commission1 | formatCurrency }}</td>
            <td>{{ x.commission2 | formatCurrency }}</td>
            <td>{{ x.commission3 | formatCurrency }}</td>
          </tr>
        </tbody>
      </b-table-simple>
    </div>
    <div class="row">
      <div class="col">
        <div class="overflow-auto mt-8">
          <b-pagination pills v-model="page" :total-rows="total" :per-page="perPage" limit="10" align="center" @input="load()"></b-pagination>
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
  props: [ 'filters', 'onDetail' ],
  data() {
    return {
      perPage: 50,
      per: 1,
      total: 0,
      data: [],
      sum: {},
    };
  },
  filters: {
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      console.log(this.filters, this.page, this.perPage);
      await dispatchPaged({ self: this, key: "user/userList", data: {} });
      return;

      var { provider, game, term, dateFrom, dateTo, monthFrom, monthTo } = this.filters;
      if(term == 'm') { dateFrom = moment(monthFrom, 'YYYY-MM'); dateTo = moment(monthTo, 'YYYY-MM'); }
      var p = { page: this.currentPage, perPage: this.perPage, provider, game, term, dateFrom, dateTo: moment(dateTo).utc(true).add(1, 'days').format('YYYY-MM-DD') };
      console.log(p);
      var data = await this.$store.dispatch("analytics/contentDailyList", p);
      var { totalCount, rowsPerPage, currentPage, rows } = data;
      console.log(data);
      this.currentPage = currentPage;
      this.perPage = rowsPerPage;
      this.rows = totalCount;
      this.data = rows;
    },
    async search() {
      console.log(this.filters, this.page, this.perPage);
      this.page = 1;
      this.total = 0;
      this.data = [];
      await this.load();
    },
    async download() {
      var { provider, game, term, dateFrom, dateTo, monthFrom, monthTo } = this.filters;
      if(term == 'm') { dateFrom = moment(monthFrom, 'YYYY-MM'); dateTo = moment(monthTo, 'YYYY-MM'); }
      var p = { page: this.currentPage, perPage: this.perPage, provider, game, term, dateFrom, dateTo: moment(dateTo).utc(true).add(1, 'days').format('YYYY-MM-DD') };
      p.download = true;
      console.log(p);
      var data = await this.$store.dispatch("analytics/contentDailyList", p);
      await this.load();
    },
    async viewDetail(x) {
      var { dateFrom, dateTo } = this.filters;
      var { username } = x;
      this.onDetail({ username, dateFrom, dateTo });
    }    
  },
};
import {showModal,hideModal,toggleRightSidebar,showRightSidebar,hideRightSidebar,dispatchPaged,} from "@/utils";
</script>
