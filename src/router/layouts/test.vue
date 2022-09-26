<template>
  <div id="layout-wrapper">
    <NavBar />
    <SideBar :is-condensed="isMenuCondensed" />
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="main-content">
      <div class="page-content" :class="{'dasboard-content': isDashboard === true}">
        <!-- Start Content-->
        <div class="container-fluid">
          <slot />
        </div>
      </div>
      <Footer />
    </div>
    <RightBar />
    <div v-if="isDashboard === true" class="desh-right-sidebar d-none d-xl-block">
      <div class="slimscroll-menu">
        <div class="px-4 pt-4">
          <div class="card user-wid text-center overflow-hidden">
            <div class="p-4 bg-soft-danger"></div>
            <div class="mx-3">
              <div class="user-wid-content p-1 rounded">
                <div class="user-img">
                  <img
                    src="@/assets/images/users/avatar-1.jpg"
                    alt="user-img"
                    title
                    class="rounded-circle avatar-sm img-fluid"
                  />
                </div>
                <h5 class="font-size-14 mb-3">
                  <a href="javascript: void(0);">James Heine</a>
                </h5>
                <p class="text-muted mb-2">
                  <small>Admin Head</small>
                </p>
              </div>
            </div>
          </div>

          <div class="mb-4">
            <h5 class="font-size-14">Calender</h5>
            <date-picker
              class="dashboard-inline"
              v-model="defaultdate"
              type="date"
              lang="en"
              inline
            ></date-picker>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";

import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar-test";
import RightBar from "@/components/right-bar";
import Footer from "@/components/footer";

import DatePicker from "vue2-datepicker";

export default {
  props: {
    isDashboard: {
      type: Boolean,
      default: false
    }
  },
  components: { NavBar, SideBar, RightBar, Footer, DatePicker },
  data() {
    return {
      isMenuCondensed: false,
      defaultdate: ""
    };
  },
  created: () => {
    document.body.classList.remove("bg-primary");
  },
  mounted() {

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
