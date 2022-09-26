<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Blank component
 */
export default {
  page: {
    title: "Blank Page",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Blank Page",
      items: [
        {
          text: "Extra Pages",
          href: "/"
        },
        {
          text: "Blank Page",
          active: true
        }
      ]
    };
  }
};
</script>
<template>
  <Layout :title="title" :items="items"></Layout>
</template>