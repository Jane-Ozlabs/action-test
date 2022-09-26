<template>
  <div id="container">
    <LoadingOverlay />

    <slot />

    <ErrorModal />

    <footer>
    	<div class="center">
            <ul class="footer_nav">
                <li>
                    <p>COMPANY</p>
                    <a href="">About US</a>
                    <a href="">FAQ</a>
                    <a href="">Contact US</a>
                    <a href="">Partnership</a>
                    <a href="">Promotion</a>
                </li>
                <li>
                    <p>INFORMATION</p>
                    <a href="">Terms & Conditions</a>
                    <a href="">Cookies Policy</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Responsible Gambling</a>
                </li>
                <li>
                    <p>PLAY NOW</p>
                    <a href="">Casino</a>
                    <a href="">Poker</a>
                    <a href="">Sports</a>
                </li>
            </ul>
            <div class="footer_info">
                <div class="logo"><img src="@/assets/images/logo_f.png"></div>
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
                <div class="logo_gc"><img src="@/assets/images/logo_gc.png"></div>
            </div>
        </div>
    </footer>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import ErrorModal from '@/components/error-modal';
import LoadingOverlay from '@/components/loading-overlay';

export default {
  components: { ErrorModal, LoadingOverlay },
  created() {
      document.body.classList.add('bg-primary')
  },
  computed: mapState({
  }),
  methods: {
  }
};
</script>
