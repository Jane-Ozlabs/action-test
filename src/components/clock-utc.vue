<template>
  <label>{{date}}<span>{{time}}</span></label>
</template>

<script>
export default {
  data() {
    return { interval: null, date: null, time: null };
  },
  beforeDestroy() { clearInterval(this.interval) },
  created() {
    this.date = moment().utc().format("YY-MM-DD")
    this.time = moment().utc().format("HH:mm")
     this.interval = setInterval(() => { 
      this.date = moment().utc().format("YY-MM-DD")
      this.time = moment().utc().format("HH:mm")
    }, 1000)
  }
};
const moment = require('moment');
</script>
