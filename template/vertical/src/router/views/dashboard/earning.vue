<script>
import Earning from "@/components/widgets/stat-earning";

export default {
  components: { Earning },
  data() {
    return {
      statData: [
        {
          value: "$1,452",
          text: "Weekly",
          data: [24, 66, 42, 88, 62, 24, 45, 12, 36, 10],
          chartColor: "#4090cb"
        },
        {
          value: "$4,150",
          text: "Monthly",
          data: [54, 12, 24, 66, 42, 25, 44, 12, 36, 9],
          chartColor: "#e74c5e"
        },
        {
          value: "$38,759",
          text: "Yearly",
          data: [10, 36, 12, 44, 63, 24, 44, 12, 56, 24],
          chartColor: "#47bd9a"
        }
      ]
    };
  }
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Earning</h4>
      <div v-for="stat of statData" :key="stat.value" class>
        <Earning
          :value="stat.value"
          :text="stat.text"
          :chartColor="stat.chartColor"
          :data="stat.data"
        />
      </div>
    </div>
  </div>
</template>