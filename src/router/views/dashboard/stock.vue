<script>
/**
 * Recent Stock component
 */
export default {
  data() {
    return {
      series: [76],
      chartOptions: {
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 0, // margin is in pixels
              shadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: 10,
                fontSize: "20px"
              }
            }
          }
        },
        colors: ["#e74c5e"],
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.4,
            gradientToColors: ["#4090cb"],
            inverseColors: false,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [0, 100]
          }
        }
      }
    };
  }
};
</script>
<template>
  <div class="card messages">
    <div class="card-body">
      <h4 class="card-title mb-4">Recent Stock</h4>

      <b-tabs nav-class="tab-wid recent-stock-widget nav-justified">
        <b-tab active>
          <template v-slot:title>
            <i class="dripicons-device-desktop h4 product-icon"></i>
            <p class="text-muted mb-0">Computer</p>
          </template>
          <div class="text-center">
            <div>
              <apexchart
                type="radialBar"
                dir="ltr"
                height="173"
                :series="series"
                :options="chartOptions"
              ></apexchart>
            </div>
            <h5 class="font-size-18">Computer</h5>
            <p class="text-muted mb-0">Neque porro quisquam est</p>
          </div>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <i class="dripicons-device-desktop h4 product-icon"></i>
            <p class="text-muted mb-0">Laptop</p>
          </template>
          <div class="text-center">
            <apexchart
              type="radialBar"
              dir="ltr"
              height="180"
              :series="series"
              :options="chartOptions"
            ></apexchart>
            <h5 class="font-size-18 mt-3">Laptop</h5>
            <p class="text-muted mb-0">Neque porro quisquam est</p>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>