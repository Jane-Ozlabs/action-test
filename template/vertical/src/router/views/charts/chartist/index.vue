<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import {
  smilAnimationChart,
  simpleLineChart,
  polarBarChart,
  areaLineChart,
  lineSmoothingChart,
  overlappingBarChart,
  stackBarChart,
  horizontalBarChart,
  donutAnimateChart,
  simplePieChart,
  distributedSeries,
  labelPlacementChart,
  extremeConfiguration,
  lineAreaChart
} from "./data";

/**
 * Chartist-chart component
 */
export default {
  page: {
    title: "Chartist Chart",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      smilAnimationChart: smilAnimationChart,
      simpleLineChart: simpleLineChart,
      polarBarChart: polarBarChart,
      areaLineChart: areaLineChart,
      lineSmoothingChart: lineSmoothingChart,
      overlappingBarChart: overlappingBarChart,
      stackBarChart: stackBarChart,
      horizontalBarChart: horizontalBarChart,
      donutAnimateChart: donutAnimateChart,
      simplePieChart: simplePieChart,
      distributedSeries: distributedSeries,
      labelPlacementChart: labelPlacementChart,
      extremeConfiguration: extremeConfiguration,
      lineAreaChart: lineAreaChart,
      title: "Chartist Chart",
      items: [
        {
          text: "Charts",
          href: "/"
        },
        {
          text: "Chartist Chart",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Overlapping bars on mobile</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">86541</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">2541</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">102030</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Overlapping bars on mobile -->
            <chartist
              ratio="ct-chart"
              :data="overlappingBarChart.data"
              :options="overlappingBarChart.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Stacked bar chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">5241</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">65411</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">51654</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Stacked bar chart -->
            <chartist
              ratio="ct-chart"
              :data="stackBarChart.data"
              :options="stackBarChart.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Advanced Smil Animations</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">45410</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">4442</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">3201</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Advanced Smil Animations -->
            <chartist
              ratio="ct-chart"
              :data="smilAnimationChart.data"
              :options="smilAnimationChart.options"
              type="Line"
            ></chartist>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Simple Line Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">44242</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">75221</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">65212</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Simple line chart -->
            <chartist
              ratio="ct-chart"
              :data="simpleLineChart.data"
              :options="simpleLineChart.options"
              type="Line"
            ></chartist>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Line Chart With Area</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">4234</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">64521</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">94521</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Line chart with area -->
            <chartist
              ratio="ct-chart"
              :data="areaLineChart.data"
              :options="areaLineChart.options"
              type="Line"
            ></chartist>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Bi-polar Line Chart Wth Area Only</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">8741</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">54871</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">85417</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Bi-polar Line chart -->
            <chartist
              ratio="ct-chart"
              :data="lineAreaChart.data"
              :options="lineAreaChart.options"
              type="Line"
            ></chartist>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Line Interpolation / Smoothing</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">8741</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">25481</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">23541</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Line Interpolation / Smoothing chart -->
            <chartist
              ratio="ct-chart"
              type="Line"
              :data="lineSmoothingChart.data"
              :options="lineSmoothingChart.options"
            ></chartist>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Horizontal Bar Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">8741</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">25417</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">87541</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Horizontal bar chart -->
            <chartist
              ratio="ct-chart"
              :data="horizontalBarChart.data"
              :options="horizontalBarChart.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Distributed Series</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">7541</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">25412</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">87451</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Distributed series -->
            <chartist
              ratio="ct-chart"
              :data="distributedSeries.data"
              :options="distributedSeries.options"
              type="Bar"
            ></chartist>
          </div>
          <!-- end card-body -->
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Label Placement</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">8741</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">25417</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">87412</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Label placement chart -->
            <chartist
              ratio="ct-chart"
              :data="labelPlacementChart.data"
              :options="labelPlacementChart.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Extreme Responsive Configuration</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">78541</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">2584</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">21578</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <chartist
              ratio="ct-chart"
              :data="extremeConfiguration.data"
              :options="extremeConfiguration.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Bi-polar Bar Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">87412</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">9857</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">110254</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Bi-polar bar -->
            <chartist
              ratio="ct-chart"
              :data="polarBarChart.data"
              :options="polarBarChart.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Donut Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">748949</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">5181</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">101025</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Animating a Donut with Svg.animate -->
            <chartist
              ratio="ct-chart"
              :data="donutAnimateChart.data"
              :options="donutAnimateChart.options"
              type="Pie"
            ></chartist>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Simple Pie Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">48484</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">48652</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0 font-size-20">85412</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Simple pie chart -->
            <chartist
              ratio="ct-chart"
              :data="simplePieChart.data"
              :options="simplePieChart.options"
              type="Pie"
            ></chartist>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
