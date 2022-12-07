<template>
    <loading :active="isLoading" :can-cancel="false" :is-full-page="true" />
</template>

<script>
import { mapState } from 'vuex';
import Loading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  components: { Loading },
  created() {
  },
  computed: mapState({
    isLoading: state => !!state.loading,
  }),
  methods: {
  }
};
</script>
