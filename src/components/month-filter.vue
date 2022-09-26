<template>
  <b-container class="m-0 p-0">
    <b-row class="m-0 p-0" v-if="!noQuick">
      <b-col cols="12">
        <b-button pill size="sm" variant="primary" @click="month1">1M</b-button>
        <b-button pill size="sm" variant="primary" @click="month3">3M</b-button>
        <b-button pill size="sm" variant="primary" @click="month6">6M</b-button>
      </b-col>
    </b-row>
    <b-row class="d-flex align-items-center m-0 p-0">
      <v-menu ref="menu_from" v-model="menu_from" :close-on-content-click="false" :return-value.sync="filters.dateFrom" transition="scale-transition" offset-y max-width="290px" min-width="auto" @input="dateChanged()">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field class="col-md-5" style="max-width: 50%;" v-model="filters.dateFrom" label="" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" @input="dateChanged()"></v-text-field>
        </template>
        <v-date-picker v-model="filters.dateFrom" type="month" no-title scrollable reactive @change="$refs.menu_from.save(filters.dateFrom)">
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu_from.save(filters.dateFrom)">OK</v-btn>
        </v-date-picker>
      </v-menu>
      <v-menu ref="menu_to" v-model="menu_to" :close-on-content-click="false" :return-value.sync="filters.dateTo" transition="scale-transition" offset-y max-width="290px" min-width="auto" @input="dateChanged()">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field class="col-md-5" style="max-width: 50%;" v-model="filters.dateTo" label="" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" @input="dateChanged()"></v-text-field>
        </template>
        <v-date-picker v-model="filters.dateTo" type="month" no-title scrollable reactive @change="$refs.menu_from.save(filters.dateTo)">
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu_to.save(filters.dateTo)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </b-row>
  </b-container>
</template>

<script>
export default {
  components: { },
  props: {
    noQuick: {},
  },
  data() {
    return {
      filters: { dateFrom: "", dateTo: "" },
      menu_from: false,
      menu_to: false,
    };
  },
  mounted() {
    this.load();
  },
  computed: {},
  methods: {
    async load() {
      this.dateChanged();
    },
    month1() {
      var from = moment().utc().startOf('month').add(-1,'months')
      var to = moment().utc().add(-1,'months').endOf('month');
      this.filters.dateFrom = from.format('YYYY-MM');
      this.filters.dateTo = to.format('YYYY-MM');
    },
    month3() {
      var from = moment().utc().startOf('month').add(-3,'months')
      var to = moment().utc().add(-1,'months').endOf('month');
      this.filters.dateFrom = from.format('YYYY-MM');
      this.filters.dateTo = to.format('YYYY-MM');
    },
    month6() {
      var from = moment().utc().startOf('month').add(-6,'months')
      var to = moment().utc().add(-1,'months').endOf('month');
      this.filters.dateFrom = from.format('YYYY-MM');
      this.filters.dateTo = to.format('YYYY-MM');
    },
    dateChanged() {
      if(!moment(this.filters.dateFrom, "YYYY-MM").isValid()) this.filters.dateFrom = moment().utc().startOf('month').format('YYYY-MM');
      if(!moment(this.filters.dateTo, "YYYY-MM").isValid()) this.filters.dateTo = moment().utc().startOf('month').format('YYYY-MM');
      console.log("dateChanged", this.filters.dateFrom, this.filters.dateTo)

      // var from = moment().utc().subtract(0, 'days').startOf('day');
      // var to = moment().utc().startOf('day');
      // this.filters.dateFrom = from.format('YYYY-MM-DD');
      // this.filters.dateTo = to.format('YYYY-MM-DD');
    }
  },
};
const moment = require('moment');
</script>
