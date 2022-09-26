<script>
export default {
  components: {},
  created() {
      document.body.classList.add('bg-primary')
  }
};
</script>

<template>
  <div>
    <slot />
  </div>
</template>
