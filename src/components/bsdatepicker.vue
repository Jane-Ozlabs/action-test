<template>
  <div class="select">
      <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="content" transition="scale-transition" offset-y max-width="290px" min-width="auto" @input="dateChanged()">
        <template v-slot:activator="{ on, attrs }">
          <label @click="!readonly && open($event)">{{text}}&nbsp;</label>
        </template>
        <v-date-picker v-model="content" :type="type" no-title scrollable reactive @change="$refs.menu.save(content)">
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(content)">OK</v-btn>
        </v-date-picker>
      </v-menu>
  </div>
</template>

<script>
export default {
  components: { },
  props: [ "type", "value", "readonly" ],
  data() {
    return {
      content: this.value,
      menu: false,
    };
  },
  mounted() {
    this.update();
  },
  computed: {
    text() { return moment(this.content).format(this.type == 'date' ? 'YYYY-MM-DD' : 'YYYY-MM') },
  },
  methods: {
    async update() {
      if(!this.content) this.content = moment().format(this.type == 'date' ? 'YYYY-MM-DD' : 'YYYY-MM');
      console.log(this.content);
    },
    open(e) {
      console.log("open", e)
      $(".select label").removeClass("on");
      $(e.target).addClass("on");
      this.menu = true;
    },
    dateChanged() {
      console.log("dateChanged");
      this.$emit('input', String(this.content));
    }
  },
  watch: {
    value() { console.log("watch", this.value); this.content = this.value }
  }
};
import {showRightPanel, hideRightPanel, agentOptions} from "@/utils";
const moment = require('moment');
</script>
