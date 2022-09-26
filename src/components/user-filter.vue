<template>
  <b-container class="m-0 p-0">
    <b-row class="m-0 p-0">
      <b-col cols="12">
        <label class="m-0 p-0" for="user-filter-name">Username</label>
      </b-col>
    </b-row>
    <b-row class="d-flex align-items-center m-0 p-0">
      <b-form-input class="col-md-12" id="user-filter-name" v-model="filters.username" type="text"></b-form-input>
    </b-row>
  </b-container>
</template>

<script>
export default {
  components: { },
  data() {
    return {
      filters: { username: "" },
    };
  },
  mounted() {
    this.load();
  },
  computed: {},
  methods: {
    async load() {
    },
  },
};
const moment = require('moment');
</script>
