<template>
    <div class="pageBox">
      <a href="javascript:;" class="first" @click="first"><img :src="iconURL.pgFirst"></a>
      <a href="javascript:;" class="prev" @click="prev"><img :src="iconURL.pgPrev"></a>
      <a href="javascript:;" :class="['number', content == x ? 'on' : '']" :style="x == pages[pages.length - 1] ? { border: 'none' } : {}" @click="page(x)" v-for="x of pages" :key="x">{{ x }}</a>
      <a href="javascript:;" class="next" @click="next"><img :src="iconURL.pgNext"></a>
      <a href="javascript:;" class="last" @click="last"><img :src="iconURL.pgLast"></a>
    </div>
</template>
<script>
export default {
  props: [ "value", "totalRows", "perPage", "limit" ],
  components: { },
  data() {
    return {
      content: this.value,
      start: 1,
      pageTotal: 0,
      pages: [],
      iconURL: this.$store.getters.iconURL
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },  
  mounted() {
    this.update();
  },
  computed: {
    windowWidth() { return window.innerWidth; },
  },
  methods: {
    async update() {
      var limit = this.limit;
      if(this.windowWidth < 1024) limit = 5;

      this.pageTotal = Math.ceil(this.totalRows / this.perPage) || 1
      var p = [];
      for(var i = 0; i < limit; i++) {
        var n = this.start+i;
        if(n > this.pageTotal) break;
        p.push(n);
      }
      this.pages = p;
      this.content = this.content || 0;
      if(this.content > this.pageTotal) this.content = this.pageTotal;
      if(this.content <= 0) this.content = 1;
      console.log("pagination", this.content, this.totalRows, this.pageTotal, p)
    },
    created() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    },
    mounted() {
        this.update();
    },
    computed: {
        windowWidth() {
            return window.innerWidth;
        },
    },
    methods: {
        async update() {
            var limit = this.limit;
            if (this.windowWidth < 1024) limit = 5;

            this.pageTotal = Math.ceil(this.totalRows / this.perPage) || 1;
            let p = [];
            for (let i = 0; i < limit; i++) {
                var n = this.start + i;
                if (n > this.pageTotal) break;
                p.push(n);
            }
            this.pages = p;
            this.content = this.content || 0;
            if (this.content > this.pageTotal) this.content = this.pageTotal;
            if (this.content <= 0) this.content = 1;
            console.log("pagination", this.content, this.totalRows, this.pageTotal, p);
        },
        page(x) {
            this.content = x;
            this.$emit("input", String(this.content));
        },
        first(x) {
            this.content = 1;
            this.start = 1;
            this.$emit("input", String(this.content));
        },
        last(x) {
            var limit = this.limit;
            if (this.windowWidth < 1024) limit = 5;

            this.start = Math.floor(this.pageTotal / limit) * limit + 1;
            this.content = this.pageTotal;
            this.$emit("input", String(this.content));
        },
        prev() {
            this.content = this.content - 1;

             if(this.content % 10 == 0 && this.content > 1 ){
                this.start = this.content - 9;
                this.update();
            }         
            this.$emit("input", String(this.content));
        },
        next() {
            this.content = this.content + 1;
            if(this.content % 10 == 1){
                this.start = this.content;
                this.update();
            }          
            this.$emit("input", String(this.content));
        },
        async handleResize() {
            console.log(window.innerWidth);
            this.update();
        },
    },
    watch: {
        value() {
            this.content = this.value;
            this.update();
        },
        totalRows() {
            this.update();
        },
        perPage() {
            this.update();
        },
        limit() {
            this.update();
        },
    },
};
import { showRightPanel, hideRightPanel, agentOptions } from "@/utils";
</script>
