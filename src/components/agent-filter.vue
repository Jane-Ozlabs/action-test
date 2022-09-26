<template>
  <div id="agent-filter-user" class="selectBox">
    <BSSelect v-model="filters.id1" :options="a1" :readonly="agentLevel == 0 || agentLevel >= 1" />
    <BSSelect v-model="filters.id2" :options="a2" :readonly="agentLevel >= 2" />
    <BSSelect v-model="filters.id3" :options="a3" :readonly="agentLevel >= 3" />
    <a href="javascript:;" class="btn" @click="onAction('search')" v-if="!noSearch">Search</a>
    <a href="javascript:;" class="btn" @click="onAction(action)" v-if="!!action">{{action}}</a>
  </div>
</template>

<script>
export default {
  components: { BSSelect },
  props: [ "agentLines", "noTitle", "noSearch", "onAction", "agentLevel", "action" ],
  data() {
    return {
      filters: { id1: 0, id2: 0, id3: 0, },
      a1: [], a2: [], a3: [],
      id1: 0,
    };
  },
  mounted() {
    this.update();
  },
  computed: {
    ag1() { return this.a1[1] && this.a1[1].text || '' },
    ag2() { var x = this.a2.find(x => x.value == this.filters.id2); return x && x.text || "" },
    ag3() { var x = this.a3.find(x => x.value == this.filters.id3); return x && x.text || "" },
  },
  methods: {
    async update() {
      console.log("agent-filter", JSON.stringify(this.filters));
      var agentLines = this.agentLines;
      var filters = this.filters;
      var { a1, a2, a3 } = agentOptions({ agentLines, agent1: filters.id1, agent2: filters.id2, agent3: filters.id3 });
      a1 && a1[0] && (this.filters.id1 = a1[0].id);
      this.agentLevel >= 2 && a2 && a2[0] && (this.filters.id2 = a2[0].id);
      this.agentLevel >= 3 && a3 && a3[0] && (this.filters.id3 = a3[0].id);
      this.a1 = a1.map(x => ({ text: x.name, value: x.id })); this.a1.unshift({ text: "본사", value: 0 })
      this.a2 = a2.map(x => ({ text: x.name, value: x.id })); this.a2.unshift({ text: "총판", value: 0 }) 
      this.a3 = a3.map(x => ({ text: x.name, value: x.id })); this.a3.unshift({ text: "매장", value: 0 })
      console.log(UV(this.a1));
      console.log(UV(this.a2));
      console.log(UV(this.a3));
      this.onChange && this.onChange();
    },
  },
  watch: {
    agentLines() {
      this.update();
    },
    agentLevel(x) {
      this.update();
    },
    filters: {
      deep: true,
      handler(val) {
        console.log("watch:filters", JSON.stringify(this.filters));
        this.update();
      }
    }
  }
};
import {showRightPanel, hideRightPanel, agentOptions} from "@/utils";
import BSSelect from "@/components/bsselect";
</script>
