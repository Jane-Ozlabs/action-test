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

<template>
  <div>
    <div v-click-outside="config" class="right-bar">
      <simplebar class="h-100">
        <div class="rightbar-title px-3 py-4">
          <a href="javascript:void(0);" class="right-bar-toggle float-right" @click="hide">
            <i class="mdi mdi-close noti-icon"></i>
          </a>
          <h5 class="m-0">Settings</h5>
        </div>

        <!-- Settings -->
        <hr class="mt-0" />
        <h6 class="text-center mb-0">Choose Demo</h6>

        <div class="p-4">
          <div class="mb-2">
            <router-link tag="a" target="_blank" to="//dashbiz-v-light.vuejs.themesbrand.com/">
              <img src="@/assets/images/layouts/layout-1.jpg" class="img-fluid img-thumbnail" alt />
            </router-link>
          </div>

          <div class="mb-2">
            <router-link tag="a" target="_blank" to="//dashbiz-v-dark.vuejs.themesbrand.com/">
              <img src="@/assets/images/layouts/layout-2.jpg" class="img-fluid img-thumbnail" alt />
            </router-link>
          </div>

          <div class="mb-2">
            <router-link tag="a" target="_blank" to="//dashbiz-v-rtl.vuejs.themesbrand.com/">
              <img src="@/assets/images/layouts/layout-3.jpg" class="img-fluid img-thumbnail" alt />
            </router-link>
          </div>
        </div>
      </simplebar>
    </div>

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>

<style lang="scss"></style>
