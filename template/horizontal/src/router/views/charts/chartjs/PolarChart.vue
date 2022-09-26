<script>
import { PolarArea } from "vue-chartjs";

export default {
  extends: PolarArea,
  mounted() {
    this.renderChart(
      {
        labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
        datasets: [
          {
            data: [11, 16, 7, 18],
            backgroundColor: ["#06c2de", "#e74c5e", "#47bd9a", "#4090cb"],
            label: "My dataset", // for legend
            hoverBorderColor: "#fff"
          }
        ]
      },
      {
        maintainAspectRatio: true,
        legend: {
          position: "top"
        }
      }
    );
  }
};
</script>