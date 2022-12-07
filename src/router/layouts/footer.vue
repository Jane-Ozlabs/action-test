<template>
    <footer>
    	<div class="center">
            <ul class="footer_nav">
                <li>
                    <p>COMPANY</p>
                    <a :href="VUE_APP_LINK_ABOUT" target="_blank">About US</a>
                    <a :href="VUE_APP_LINK_FAQ" target="_blank">FAQ</a>
                    <a :href="VUE_APP_LINK_SUPPORT" target="_blank">Contact US</a>
                    <a :href="VUE_APP_LINK_PARTNERSHIP" target="_blank">Partnership</a>
                    <a :href="VUE_APP_LINK_PROMOTION" target="_blank">Promotion</a>
                </li>
                <li>
                    <p>INFORMATION</p>
                    <a :href="VUE_APP_LINK_TERMS" target="_blank">Terms & Conditions</a>
                    <a :href="VUE_APP_LINK_COOKIES" target="_blank">Cookies Policy</a>
                    <a :href="VUE_APP_LINK_PRIVACY" target="_blank">Privacy Policy</a>
                    <a :href="VUE_APP_LINK_RESPONSIBLE" target="_blank">Responsible Gambling</a>
                </li>
                <li>
                    <p>PLAY NOW</p>
                    <a :href="VUE_APP_LINK_CASINO" target="_blank">Casino</a>
                    <a :href="VUE_APP_LINK_SPORTS" target="_blank">Sports</a>
                </li>
            </ul>
            <div class="footer_info">
                <div class="logo"><img :src="iconURL.logoF"></div>
                <div class="info_text">
                    Bettingspoon is owned and operated by Bellona N.V., a company registered <br class="pc_only">
                    and established under Law of Curacao, with registration number 120860 and <br class="pc_only">
                    registered address at Heelsumstraat 51, E-commerce park, Curacao.<br><br>
                     
                    Bellona NV is licensed and regulated by Antillephone N.V, under License <br class="pc_only">
                    No 8048/JAZ2010-010. In certain jurisdictions, Bellona NV is using Arzella Limited <br class="pc_only">
                    (a company incorporated under the laws of Cyprus with <br class="pc_only">
                    registered address at Chytron 30, 2nd floor, Office A22, 1075 Nicosia, Cyprus) <br class="pc_only">
                    as a payment agent. All payments related to Paysafe will be processed by <br class="pc_only">
                    Bellona N.V. Licence No 8048/JAZ
                </div>
                <div class="logo_gc"><img :src="iconURL.logoGC"></div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  props: {},
  components: {},
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
      iconURL: this.$store.getters.iconURL
    }
  },
  computed: {
    ...mapState({
      me: (state) => state.user.user,
    }),
  },
  mounted() {
    console.log("me", this.me)
  },
  methods: {
  }
};

import { mapState } from 'vuex';
import '@/../public/css/style.css';

</script>
