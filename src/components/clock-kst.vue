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
    this.date = moment().tz("Asia/Seoul").format("YY-MM-DD")
    this.time = moment().tz("Asia/Seoul").format("HH:mm")
    this.interval = setInterval(() => { 
      this.date = moment().tz("Asia/Seoul").format("YY-MM-DD")
      this.time = moment().tz("Asia/Seoul").format("HH:mm")
    }, 1000)
  }
};
const moment = require('moment-timezone');
</script>
