<script>
/**
 * Email-sent component
 */
export default {
  data() {
    return {
      series: [
        {
          name: "Email Sent",
          data: [42, 56, 40, 64, 26, 42, 56, 35, 62, 46, 32, 26]
        }
      ],
      chartOptions: {
        chart: {
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "14%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        grid: {
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        xaxis: {
          labels: {
            rotate: -90
          },
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        colors: ["#e74c5e"],
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 1,
            gradientToColors: ["#4090cb"],
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [0, 100, 100, 100]
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
      <h4 class="card-title mb-4">Email Sent</h4>
      <apexchart
        class="apex-charts"
        type="bar"
        dir="ltr"
        height="300"
        :series="series"
        :options="chartOptions"
      ></apexchart>
    </div>
  </div>
</template>