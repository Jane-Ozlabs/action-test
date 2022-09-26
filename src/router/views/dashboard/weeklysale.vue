<script>
/**
 * Weekly sales component
 */
export default {
  data() {
    return {
      series: [
        {
          name: "Series 1",
          data: [22, 54, 42, 84, 48]
        },
        {
          name: "Series 2",
          data: [11, 32, 60, 32, 34]
        }
      ],
      chartOptions: {
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
          width: 2
        },
        colors: ["#4090cb", "#e74c5e"],
        grid: {
          yaxis: {
            lines: {
              show: false
            }
          }
        }
      }
    };
  }
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title mb-4">Weekly Sales</h4>
      <apexchart
        class="apex-charts"
        type="area"
        dir="ltr"
        height="285"
        :series="series"
        :options="chartOptions"
      ></apexchart>
    </div>
  </div>
</template>