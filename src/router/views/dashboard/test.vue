<template>
  <div>
    <Layout :isDashboard="isDashboard">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="page-title-box">
            <h4 class="font-size-18">Dashboard</h4>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item active">Welcome to Dashbiz Dashboard</li>
            </ol>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="float-right d-none d-md-block">
            <b-dropdown right variant="primary">
              <template v-slot:button-content>
                <i class="mdi mdi-settings mr-2"></i> Settings
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>Separated link</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>

      <Widget />

      <div class="row">
        <div class="col-lg-4">
          <WeeklySales />
        </div>
        <div class="col-xl-8">
          <Emailsent />
        </div>
      </div>

      <div class="row">
        <div class="col-xl-4">
          <Earning />
        </div>
        <div class="col-xl-4">
          <RecentStock />
        </div>
        <div class="col-xl-4">
          <SocialSource />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-8">
          <Transations />
        </div>
        <div class="col-xl-4">
          <LatestMessages />
        </div>
      </div>
    </Layout>
  </div>
</template>
<script>
import appConfig from "@/app.config";

import Layout from "../../layouts/test";
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
    this.$store.dispatch('admin/memberList').then(data => {
      console.log(data);
    });
  },
  data() {
    return {
      title: "Dashboard",
      isDashboard: true
    };
  }
};
</script>
