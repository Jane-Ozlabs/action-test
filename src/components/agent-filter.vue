<template>
  <div id="agent-filter-user" class="selectBox">
    <BSSelect ref="id1" v-model="filters.id1" :options="a1" :readonly="agentLevel == 0 || agentLevel >= 1" />
    <BSSelect ref="id2" v-model="filters.id2" :options="a2" :readonly="filters.id1 == 0 || agentLevel >= 2" />
    <BSSelect ref="id3" v-model="filters.id3" :options="a3" :readonly="filters.id2 == 0 || agentLevel >= 3" />
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
      console.log("agent-filter", UV(this.filters));
      var agentLines = this.agentLines;
      var filters = this.filters;
      if(filters.id1 == 0) filters.id2 = 0;
      if(filters.id2 == 0) filters.id3 = 0;

      var { a1, a2, a3 } = agentOptions({ agentLines, agent1: filters.id1, agent2: filters.id2, agent3: filters.id3 });
      !a1.find(x => x.id == this.filters.id1) && (this.filters.id1 = 0)
      !a2.find(x => x.id == this.filters.id2) && (this.filters.id2 = 0)
      !a3.find(x => x.id == this.filters.id3) && (this.filters.id3 = 0)
      a1 && a1[0] && (this.filters.id1 = a1[0].id);
      this.agentLevel >= 2 && a2 && a2[0] && (this.filters.id2 = a2[0].id);
      this.agentLevel >= 3 && a3 && a3[0] && (this.filters.id3 = a3[0].id);

      this.a1 = a1.map(x => ({ text: x.name, value: x.id })); this.a1.unshift({ text: "Level 1", value: 0 })
      this.a2 = a2.map(x => ({ text: x.name, value: x.id })); this.a2.unshift({ text: "Level 2", value: 0 }) 
      this.a3 = a3.map(x => ({ text: x.name, value: x.id })); this.a3.unshift({ text: "Level 3", value: 0 })

      console.log(UV(this.a1));
      console.log(UV(this.a2));
      console.log(UV(this.a3));

      this.$emit("input");
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
      handler(v, v0) {
        console.log("watch:filters");
        this.update();
      }
    }
  }
};
import {showRightPanel, hideRightPanel, agentOptions} from "@/utils";
import BSSelect from "@/components/bsselect";
</script>
