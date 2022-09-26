<script>
import router from "@/router";

import Navbar from "@/components/nav-bar";
import Topbar from "@/components/topbar";
import PageHeader from "@/components/page-header";

import RightBar from "@/components/right-bar";
import Footer from "@/components/footer";

export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: { Topbar, RightBar, Footer, PageHeader, Navbar },
  data() {
    return {
      isMenuCondensed: false
    };
  },
  mounted() {

  },
  created: () => {
    document.body.classList.remove("bg-primary");
    document.body.setAttribute("data-layout", "horizontal");
  },
  methods: {
    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");

      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
          document.body.classList.remove("vertical-collpsed");
        });
        document.body.classList.toggle("vertical-collpsed");
      } else {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    }
  }
};
</script>

<template>
  <div id="layout-wrapper">
    <header id="page-topbar">
      <Topbar />
      <Navbar />
      <PageHeader :title="title" :items="items" />
    </header>
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->
    <div class="main-content">
      <div class="page-content">
        <!-- Start Content-->
        <div class="container-fluid">
          <slot />
        </div>
      </div>
    </div>
    <Footer />
    <RightBar />
  </div>
</template>
