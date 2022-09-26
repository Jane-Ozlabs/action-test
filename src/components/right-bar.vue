<template>
  <div>
    <div v-click-outside="config" class="right-bar w-30">
      <simplebar class="h-100 w-30">
          <b-container fluid>
            <slot />
          </b-container>
      </simplebar>
    </div>

    <!-- Right bar overlay-->
    <div class="rightbar-overlay" style="width: 0; height: 0;"></div>
  </div>
</template>

<style lang="scss"></style>

<script>
import simplebar from "simplebar-vue";

/**
 * Right sidebar component
 */
export default {
  components: { simplebar },
  data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"]
      }
    };
  },
  methods: {
    hide() {
      this.$parent.toggleRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    handleRightBarClick(e, el) {
      this.$parent.hideRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    middleware(event, el) {
      return !event.target.classList.contains("toggle-right");
    }
  }
};
</script>

