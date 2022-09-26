<script>
export default {
  data() {
    return {
      chartOptions: {
        plotOptions: {
          radialBar: {
            offsetY: 10,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "50%",
              background: "transparent",
              image: undefined
            },

            dataLabels: {
              name: {
                show: false
              },
              value: {
                show: false
              }
            }
          }
        },
        colors: ["#4090cb", "#06c2de", "#eb6776"],
        stroke: {
          lineCap: "round"
        },
        labels: ["Facebook", "Twitter", "Instagram"],
        legend: {
          show: true,
          floating: true,
          fontSize: "12px",
          position: "left",
          offsetX: -30,
          offsetY: 10,
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            horizontal: 3
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false
              }
            }
          }
        ]
      },
      series: [76, 67, 61]
    };
  }
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title mb-4">Social Source</h4>
      <apexchart
        class="apex-charts"
        type="radialBar"
        dir="ltr"
        height="272"
        :series="series"
        :options="chartOptions"
      ></apexchart>
    </div>
  </div>
</template>