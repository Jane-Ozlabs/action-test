<script>
import DatePicker from "vue2-datepicker";
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
    DatePicker,
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
  data() {
    return {
      title: "Dashboard",
      items: [
        {
          text: "Dashboard",
          href: "/"
        },
        {
          text: "Dashboard",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout :title="title" :items="items">
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
</template>