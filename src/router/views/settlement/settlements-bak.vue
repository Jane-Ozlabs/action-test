<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <!-- Search -->
              <div class="col-sm-12 col-md-3 m-0 p-0">
                <b-container class="m-0 p-0">
                  <b-row class="d-flex align-items-center m-0 p-0">
                    <b-col cols="4">Grade</b-col><b-col cols="8"><b-form-input id="user-filter-name" v-model="grade" type="text" readonly></b-form-input></b-col>
                  </b-row>
                </b-container>
              </div>
              <div class="col-sm-12 col-md-3 d-flex m-0 p-0">
                <MonthFilter ref="monthFilter" :noQuick="true"/>
              </div>
              <div class="col-sm-12 col-md-3 d-flex flex-row m-0 p-0">
                <b-container class="m-0 p-0">
                  <b-row class="d-flex align-items-center m-0 p-0">
                    <b-col>
                      <b-button variant="secondary" class="form-control ml-2 align-self-center" @click="search()">Search</b-button>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
              <!-- End search -->
            </div>
            <!--  -->
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
                      <th colspan="2" class="align-middle text-center">정산금액</th>
                      <th rowspan="2" class="align-middle text-center">처리</th>
                    </tr>
                    <tr>
                      <th class="align-middle">Bettingspoon</th>
                      <th class="align-middle">Partner</th>
                    </tr>
                  </b-thead>
                  <tbody>
                    <tr v-for="x of data" :key="x.id">
                      <td>{{ x.yyyymm | formatMonth }}</td>
                      <td>{{ x.grade }}</td>
                      <td>{{ x.group }}</td>
                      <td>{{ x.username }}</td>
                      <td>{{ x.bet | formatCurrency}}</td>
                      <td>{{ x.net | formatCurrency}}</td>
                      <td>{{ x.profit0 | formatCurrency }}</td>
                      <td>{{ x.profit1 | formatCurrency }}</td>
                      <td>{{ x.status }}</td>
                    </tr>
                  </tbody>
                </b-table-simple>
              </div>
              <div class="row">
                <div class="col">
                  <div class="overflow-auto mt-8">
                    <b-pagination pills v-model="filters.page" :total-rows="filters.total" :per-page="filters.perPage" limit="10" align="center" @input="load()"></b-pagination>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
    </b-row>
    <template v-slot:right>
    </template>
  </Layout>
</template>
<script>
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import AgentFilter from "@/components/agent-filter";
import MonthFilter from "@/components/month-filter";
import UserFilter from "@/components/user-filter";
import appConfig from "@/app.config";

export default {
  page: {
    title: "정산 관리",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, AgentFilter, MonthFilter, UserFilter },
  data() {
    return {
      title: "정산 관리",
      items: [],
      grade: "",
      filters: { dateFrom: "", dateTo: "" },
      user: { id: 0, date: "" },
      data: [],
    };
  },
  filters: {
  },
  computed: {
  },
  mounted() {
    console.log(this.$route.params);
    var { filters } = this.$route.params;
    this.load();
  },
  methods: {
    async load() {
      this.filters.dateFrom = moment(this.$refs.monthFilter.filters.dateFrom, 'YYYY-MM').format('YYYY-MM-DD')
      this.filters.dateTo = moment(this.$refs.monthFilter.filters.dateTo, 'YYYY-MM').add(1, 'months').format('YYYY-MM-DD')
      
      var view = await settlementsView(this.filters);
      var { filters, grade, settlements } = view;
      this.data = settlements;
      this.grade = grade;
    },
    async search() {
      await this.load();
    },
    async download() {
      console.log("download", this.filters);
      return await this.$refs.dataView.download();
    },
  },
};
import {settlementsView} from "@/services/partner";
const moment = require('moment');
import {showModal,hideModal,toggleRightSidebar,showRightSidebar,hideRightSidebar,dispatchPaged,} from "@/utils";
</script>
