<template>
    <div class="sortBox">
      <div class="sortBtn">
        <a href="javascript:;" style="background-color:#099b8f" @click="today">Today</a>
        <a href="javascript:;" style="background-color:#0583c5" @click="day3">3 Days</a>
        <a href="javascript:;" style="background-color:#5761e9" @click="week1">1 Week</a>
          
        <a href="javascript:;" class="download" @click="onAction('download')">Download</a>
      </div>
      <div class="selectBox">
        <BSSelect v-model="filters.id1" :options="a1" :readonly="true" />
        <BSSelect v-model="filters.id2" :options="a2" />
        <BSSelect v-model="filters.id3" :options="a3" />
        <BSDatePicker type="date" v-model="filters.dateFrom" />
        <BSDatePicker type="date" v-model="filters.dateTo" />
      </div>
        <div class="searchBox">
            <div class="inputBox">
              <input type="text" id="" name="" placeholder="Username" v-model="filters.username">
                <a href="javascript:;" class="searchBtn" @click="$emit('action', 'search')"><img src="img/icon_search.png"></a>
            </div>
            <a href="javascript:;" class="btn" @click="$emit('action', 'search')">Search</a>
        </div>
    </div>
</template>
<script>
export default {
  props: ["agentLines"],
  components: { BSSelect, BSDatePicker },
  data() {
    return {
      filters: { id1: 0, id2: 0, id3: 0, dateFrom: "", dateTo: "", username: "" },
      a1: [], a2: [], a3: [],
    };
  },
  computed: {
    ag1() { return this.a1[1] && this.a1[1].text || '' },
    ag2() { var x = this.a2.find(x => x.value == this.filters.id2); return x && x.text || "" },
    ag3() { var x = this.a3.find(x => x.value == this.filters.id3); return x && x.text || "" },
  },
  mounted() {
    console.log(this.$route.params, this.agentLines);
    this.update();
  },
  methods: {
    async update() {
      var from = moment().utc().subtract(0, 'days').startOf('day');
      var to = moment().utc().startOf('day');
      if(!this.filters.dateFrom) this.filters.dateFrom = from.format('YYYY-MM-DD');
      if(!this.filters.dateTo) this.filters.dateTo = to.format('YYYY-MM-DD');

      var agentLines = this.agentLines;
      var filters = this.filters;
      var { a1, a2, a3 } = agentOptions({ agentLines, agent1: filters.id1, agent2: filters.id2, agent3: filters.id3 });
      a1 && a1[0] && (this.filters.id1 = a1[0].id);
      this.a1 = a1.map(x => ({ text: x.name, value: x.id })); this.a1.unshift({ text: "Level 1", value: 0 })
      this.a2 = a2.map(x => ({ text: x.name, value: x.id })); this.a2.unshift({ text: "Level 2", value: 0 }) 
      this.a3 = a3.map(x => ({ text: x.name, value: x.id })); this.a3.unshift({ text: "Level 3", value: 0 })
      console.log(this.a1);
      console.log(this.a2);
      console.log(this.a3);
      this.$emit('input', this.filters);
    },
    dateChanged() {
      this.$emit('input', this.filters);
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
  },
  watch: {
    agentLines() {
      this.update();
    },
    filters: {
      deep: true,
      handler(val) {
        console.log("watch:filters", UV(this.filters));
        this.update();
      }
    }
  }
};
import {showRightPanel, hideRightPanel, agentOptions} from "@/utils";
import BSSelect from "@/components/bsselect";
import BSDatePicker from "@/components/bsdatepicker";
const moment = require('moment');
</script>
