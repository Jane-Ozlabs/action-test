<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    document.body.setAttribute("data-layout", "horizontal");
  }
};
</script>