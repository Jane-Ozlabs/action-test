<template>
  <b-container class="m-0 p-0">
    <b-row class="m-0 p-0">
      <b-col cols="12">
        <b-button pill size="sm" variant="primary" @click="today">Today</b-button>
        <b-button pill size="sm" variant="primary" @click="day3">3 days</b-button>
        <b-button pill size="sm" variant="primary" @click="week1">1 week</b-button>
      </b-col>
    </b-row>
    <b-row class="d-flex align-items-center m-0 p-0">
      <b-form-input class="col-md-5" id="day-filter-from" v-model="filters.dateFrom" type="date" @input="dateChanged()"></b-form-input>
      <b-form-input class="col-md-5" id="day-filter-to" v-model="filters.dateTo" type="date" @input="dateChanged()"></b-form-input>
    </b-row>
  </b-container>
</template>

<script>
export default {
  components: { },
  data() {
    return {
      filters: { dateFrom: "", dateTo: "" },
    };
  },
  mounted() {
    this.load();
  },
  computed: {},
  methods: {
    async load() {
      var from = moment().utc().subtract(0, 'days').startOf('day');
      var to = moment().utc().startOf('day');
      this.filters.dateFrom = from.format('YYYY-MM-DD');
      this.filters.dateTo = to.format('YYYY-MM-DD');
    },
    today() {
      var from = moment().utc().startOf('day');
      var to = moment().utc().endOf('day');
      this.filters.dateFrom = from.format('YYYY-MM-DD');
      this.filters.dateTo = to.format('YYYY-MM-DD');
    },
    day3() {
      var from = moment().utc().startOf('day').add(-2, 'days');
      var to = moment().utc().endOf('day');
      this.filters.dateFrom = from.format('YYYY-MM-DD');
      this.filters.dateTo = to.format('YYYY-MM-DD');
    },
    week1() {
      var from = moment().utc().startOf('day').add(-1, 'weeks');
      var to = moment().utc().endOf('day');
      this.filters.dateFrom = from.format('YYYY-MM-DD');
      this.filters.dateTo = to.format('YYYY-MM-DD');
    },
    dateChanged() {
    }
  },
};
const moment = require('moment');
</script>
