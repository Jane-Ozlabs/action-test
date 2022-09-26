<script>
export default {
  props: {
    title: { type: String, default: "" },
    value: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    subtext: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  }
};
</script>


<template>
  <div class="card mini-stat bg-pattern">
    <div class="card-body mini-stat-img">
      <div class="mini-stat-icon">
        <i :class="`${icon} text-primary float-right h4`"></i>
      </div>
      <h6 class="text-uppercase mb-3 mt-0">{{title}}</h6>
      <h5 class="mb-3 font-size-20">{{value}}</h5>
      <p class="text-muted mb-0">
        <span :class="`text-${color} mr-2`">
          {{subtext}}
          <i
            :class="{ 
              'mdi mdi-arrow-up': `${color}` === 'success',
              'mdi mdi-arrow-down': `${color}` === 'danger'
          }"
          ></i>
        </span> From previous period
      </p>
    </div>
  </div>
</template>