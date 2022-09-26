<script>
import Stat from "@/components/widgets/stat";

/**
 * Widget component
 */
export default {
  components: {
    Stat
  },
  data() {
    return {
      statData: [
        {
          title: "Orders",
          icon: "dripicons-broadcast",
          value: "1,687",
          subtext: "12%",
          color: "success"
        },
        {
          title: "Revenue",
          icon: "dripicons-box",
          value: "$ 48,265",
          subtext: "-26%",
          color: "danger"
        },
        {
          title: "Average Price",
          icon: "dripicons-tags",
          value: "$ 14.6",
          subtext: "-26%",
          color: "danger"
        }
      ]
    };
  }
};
</script>

<template>
  <div class="row">
    <div v-for="stat of statData" :key="stat.icon" class="col-lg-4">
      <Stat
        :icon="stat.icon"
        :title="stat.title"
        :value="stat.value"
        :subtext="stat.subtext"
        :color="stat.color"
      />
    </div>
  </div>
</template>