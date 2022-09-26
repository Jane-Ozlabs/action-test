<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/scatter";

import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/polar";

import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import {
  polarChart,
  barChart,
  lineChart,
  pieChart,
  scatterChart,
  doughnutChart
} from "./data";

export default {
  page: {
    title: "E-chart",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, "v-chart": ECharts },
  data() {
    return {
      polarChart: polarChart,
      barChart: barChart,
      lineChart: lineChart,
      pieChart: pieChart,
      scatterChart: scatterChart,
      doughnutChart: doughnutChart,
      title: "E-Chart",
      items: [
        {
          text: "Charts",
          href: "/"
        },
        {
          text: "E-Chart",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout :title="title" :items="items">
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Line Chart</h4>
            <v-chart :options="lineChart" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Bar Chart</h4>
            <v-chart :options="barChart" />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Pie Chart</h4>
            <v-chart :options="pieChart" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Doughnut Chart</h4>
            <v-chart :options="doughnutChart" />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Scatter Chart</h4>
            <v-chart :options="scatterChart" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Polar Chart</h4>
            <v-chart :options="polarChart.polar" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>