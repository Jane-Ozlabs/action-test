<template>
  <div>
    <Layout :isDashboard="isDashboard">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="page-title-box">
            <h4 class="font-size-18">Dashboard</h4>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item active">Welcome to Ozlabs Dashboard</li>
            </ol>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="float-right d-none d-md-block">
          </div>
        </div>
      </div>

    </Layout>
  </div>
</template>
<script>
import appConfig from "@/app.config";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import Widget from "./widget";
import WeeklySales from "./weeklysale";
import Emailsent from "./emailsent";
import RecentStock from "./stock";
import SocialSource from "./social-source";
import Transations from "./transaction";
import LatestMessages from "./messages";
import Earning from "./earning";

/**
 * Dashboard component
 */
export default {
  page: {
    title: "Dashboard",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout,
    PageHeader,
    Widget,
    WeeklySales,
    Emailsent,
    RecentStock,
    SocialSource,
    Transations,
    Earning,
    LatestMessages
  },
  computed: {
    loggedIn() { return this.$store.getters["auth/isAuthenticated"]; }
  },
  mounted() {
    if(!this.loggedIn) this.$router.push("/login");
  },
  data() {
    return {
      title: "Dashboard",
      isDashboard: true
    };
  }
};
</script>
