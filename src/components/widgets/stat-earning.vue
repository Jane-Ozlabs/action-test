<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    chartColor: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default: ""
    }
  },
  data() {
    return {
      series: [
        {
          data: this.data
        }
      ],
      chartOptions: {
        chart: {
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: "smooth",
          width: 3
        },
        colors: [this.chartColor],
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function(seriesName) {
                return "";
              }
            }
          },
          marker: {
            show: false
          }
        }
      }
    };
  }
};
</script>

<template>
  <div class="wid-earning">
    <div class="row">
      <div class="col-md-6">
        <div>
          <h5 class="mt-0 font-size-18">{{value}}</h5>
          <p class="text-muted mb-md-0">{{text}}</p>
        </div>
      </div>
      <div class="col-md-5">
        <div>
          <apexchart height="60" type="line" :series="series" :options="chartOptions" />
        </div>
      </div>
    </div>
  </div>
</template>