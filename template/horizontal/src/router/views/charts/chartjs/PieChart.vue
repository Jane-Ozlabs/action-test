<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  mounted() {
    this.renderChart(
      {
        labels: ["Desktops", "Tablets"],
        datasets: [
          {
            data: [300, 180],
            backgroundColor: ["#e74c5e", "#ebeff2"],
            hoverBackgroundColor: ["#e74c5e", "#ebeff2"],
            hoverBorderColor: "#fff"
          }
        ]
      },
      {
        maintainAspectRatio: true,
        responsive: true
      }
    );
  }
};
</script>