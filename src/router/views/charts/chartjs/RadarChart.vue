<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  mounted() {
    this.renderChart(
      {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running',
        ],
        datasets: [
          {
            label: 'Desktops',
            backgroundColor: 'rgba(52, 195, 143, 0.2)',
            borderColor: '#e74c5e',
            pointBackgroundColor: '#e74c5e',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#e74c5e',
            data: [65, 59, 90, 81, 56, 55, 40],
          },
          {
            label: 'Tablets',
            backgroundColor: 'rgba(85, 110, 230, 0.2)',
            borderColor: '#4090cb',
            pointBackgroundColor: '#4090cb',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#4090cb',
            data: [28, 48, 40, 19, 96, 27, 100],
          },
        ],
      },
      {
        maintainAspectRatio: true,
        legend: {
          position: 'top',
        },
      }
    )
  },
}
</script>