<template>
<div class="tableBox">
  <div class="table_title">{{title}}</div>
  <table>
    <tr>
      <th><p>No.</p></th>
      <th style="width:40%"><p style="text-align:left">Game</p></th>
      <th><p>Bet</p></th>
      <th><p>Player</p></th>
    </tr>
    <tr v-for="x of data" :key="x.id">
      <td>{{ x.rank }}</td>
      <td style="text-align:left">{{ x.game }}</td>
      <td>{{ x.bet | formatCurrency }}</td>
      <td>{{ x.numPlayers }}</td>
    </tr>
  </table>
  <Pagination v-model="filters.page" :totalRows="filters.total" :perPage="filters.perPage" limit="5" @input="load()"/>
</div>
</template>
<script>
export default {
  components: { Layout, PageHeader, Pagination },
  props: [ 'title', 'data' ],
  data() {
    return {
      perPage: 20,
      page: 1,
      total: 0,
      sum: {},
      filters: { perPage: 20, page: 1, total: 0 },
    };
  },
  filters: {
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
    },
    async search() {
    },
  },
};
const moment = require('moment');
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import {showModal,hideModal,toggleRightSidebar,showRightSidebar,hideRightSidebar,dispatchPaged,} from "@/utils";
import {showRightPanel,hideRightPanel} from "@/utils";
import Pagination from "@/components/pagination";
</script>
