<template>
  <div class="select">
    <label @click="!readonly && open($event)">{{text}}&nbsp;</label>
      <ul>
        <li v-for="x of options" :key="x.value" :class="[content == x.value ? `selected` : ``]" @click="!readonly && select($event, x)">{{x.text}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  components: { },
  props: [ "options", "value", "readonly" ],
  data() {
    return {
      content: this.value,
    };
  },
  mounted() {
    this.update();
  },
  computed: {
    text() { var x = this.options.find(x => x.value == this.content); return x && x.text || "" },
  },
  methods: {
    async update() {
      this.onChange && this.onChange(this.content);
    },
    open(e) {
      console.log("open", e)
      $(".select label").removeClass("on");
      $(e.target).addClass("on");
    },
    select(e, x) {
    	var label = $(e.target).parent().prev();
      label.text($(e.target).text());
      label.removeClass("on");
      this.content = x.value
      this.$emit('input', String(this.content));
      console.log("select", e, x, this.options, this.content);
    }
  },
  watch: {
    value() { this.content = this.value }
  }
};
import $ from 'jquery';
import {showRightPanel, hideRightPanel, agentOptions} from "@/utils";
</script>
