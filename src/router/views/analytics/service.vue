<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <!-- Search -->
              <div class="col-sm-12 col-md-5">
                <div class="d-flex flex-row justify-content-start">
                  <b-form-select v-model="filters.term" :options="termsOptions"></b-form-select>
                </div>
              </div>
              <div class="col-sm-12 col-md-5 d-flex">
                <b-row class="d-flex align-items-center" v-if="termd">
                  <label class="col-md-2 m-auto" for="date-from">기간</label>
                  <b-form-input class="col-md-5" id="date-from" v-model="filters.dateFrom" type="date" @input="dateChanged()"></b-form-input>
                  <b-form-input class="col-md-5" id="date-to" v-model="filters.dateTo" type="date" @input="dateChanged()"></b-form-input>
                </b-row>
                <b-row class="d-flex align-items-center" v-if="termm">
                  <v-menu ref="menu_from" v-model="menu_from" :close-on-content-click="false" :return-value.sync="filters.monthFrom" transition="scale-transition" offset-y max-width="290px" min-width="auto" @input="dateChanged()">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field class="col-md-5" style="max-width: 50%;" v-model="filters.monthFrom" label="" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" @input="dateChanged()"></v-text-field>
                    </template>
                    <v-date-picker v-model="filters.monthFrom" type="month" no-title scrollable reactive @change="$refs.menu_from.save(filters.monthFrom)">
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu_from.save(filters.monthFrom)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                  <v-menu ref="menu_to" v-model="menu_to" :close-on-content-click="false" :return-value.sync="filters.monthTo" transition="scale-transition" offset-y max-width="290px" min-width="auto" @input="dateChanged()">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field class="col-md-5" style="max-width: 50%;" v-model="filters.monthTo" label="" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" @input="dateChanged()"></v-text-field>
                    </template>
                    <v-date-picker v-model="filters.monthTo" type="month" no-title scrollable reactive @change="$refs.menu_from.save(filters.monthTo)">
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu_to.save(filters.monthTo)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </b-row>
              </div>
              <div class="col-sm-12 col-md-2">
                <b-button variant="secondary" class="form-control ml-2" @click="search()">Search</b-button>
              </div>
              <!-- End search -->
            </div>
            <div class="row">
              <div class="col-sm-6"><h2>{{title}}</h2></div>
              <div class="col-sm-6"><v-btn class="float-right" rounded color="primary" dark @click="download()">Download</v-btn></div>
            </div>
            <DailyView ref="dataView" v-if="termd" :filters="filters" />
            <MonthlyView ref="dataView" v-if="termm" :filters="filters" />
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
import MonthlyView from "./service-monthly";
import DailyView from "./service-daily";

export default {
  page: {
    title: "Analytics Service",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, MonthlyView, DailyView },
  data() {
    return {
      title: "Analytics Service",
      items: [{ text: "Analytics", href: "/analytics/service" }, { text: "Content", href: "/analytics/service" }],
      filters: { provider: null, game: null, term: null, dateFrom: null, dateTo: null, monthFrom: null, monthTo: null },
      termsOptions: [
        { value: 'd', text: 'Daily' },
        { value: 'm', text: 'Monthly' },
      ],
      menu_from: false,
      menu_to: false,
    };
  },
  filters: {
  },
  computed: {
    termd() { return this.filters.term == 'd' },
    termm() { return this.filters.term == 'm' },
  },
  mounted() {
    console.log(this.$route.params);
    var { filters } = this.$route.params;
    if(filters) {
      this.filters.term = filters.term;
    }
    if(!this.filters.term) this.filters.term = "d";
    this.daysChanged();
  },
  methods: {
    async load() {
    },
    async search() {
      if(!this.filters.term) { this.$store.commit("ERROR", { error: "Error", message: "Invalid Filter Values" }); return; };
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
</script>
