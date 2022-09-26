<script>
import Layout from "../../layouts/main";

import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import ProjectTable from "./table";
import Widget from "./widget";

/**
 * Projects component
 */
export default {
  page: {
    title: "Projects",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, ProjectTable, Widget },
  data() {
    return {
      title: "Projects",
      items: [
        {
          text: "Projects",
          href: "/"
        }
      ]
    };
  }
};
</script>

<template>
  <Layout :title="title" :items="items">
    <Widget />
    <ProjectTable />
  </Layout>
</template>