<template>
  <div id="container">
    <LoadingOverlay />

    <slot />

    <ErrorModal />

    <Footer />

  </div>
</template>
<script>
export default {
  components: { ErrorModal, LoadingOverlay },
  created() {
      document.body.classList.add('bg-primary')
  },
  computed: mapState({
  }),
  data() {
    return {
      VUE_APP_LINK_ABOUT: process.env.VUE_APP_LINK_ABOUT,
      VUE_APP_LINK_FAQ: process.env.VUE_APP_LINK_FAQ,
      VUE_APP_LINK_SUPPORT: process.env.VUE_APP_LINK_SUPPORT,
      VUE_APP_LINK_PARTNERSHIP: process.env.VUE_APP_LINK_PARTNERSHIP,
      VUE_APP_LINK_PROMOTION: process.env.VUE_APP_LINK_PROMOTION,
      VUE_APP_LINK_TERMS: process.env.VUE_APP_LINK_TERMS,
      VUE_APP_LINK_COOKIES: process.env.VUE_APP_LINK_COOKIES,
      VUE_APP_LINK_PRIVACY: process.env.VUE_APP_LINK_PRIVACY,
      VUE_APP_LINK_RESPONSIBLE: process.env.VUE_APP_LINK_RESPONSIBLE,
      VUE_APP_LINK_CASINO: process.env.VUE_APP_LINK_CASINO,
      VUE_APP_LINK_SPORTS: process.env.VUE_APP_LINK_SPORTS,        
    }
  },
  methods: {
  }
};

import Footer from "./footer";
import { mapState } from 'vuex';
import ErrorModal from '@/components/error-modal';
import LoadingOverlay from '@/components/loading-overlay';
</script>
