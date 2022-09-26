<template>
  <div id="layout-wrapper">
    <header>
        <img src="img/logo.png" class="logo">
        <div class="depth">
            <span v-if="breadcrumb[0]">{{breadcrumb[0].text}}</span>
            <span v-if="breadcrumb[1]">{{breadcrumb[1].text}}</span>
            <span v-if="breadcrumb[2]">{{breadcrumb[2].text}}</span>
        </div>
        <div class="profile" @click="logout">
            <img src="img/profile.png"><span class="name">{{me&&me.username}}</span>
        </div> 
        <a href="javascript:;" class="menuBtn"><img src="img/icon_menu.png"></a>
    </header>
    <LoadingOverlay />
    <main>
      <SideNav />
      <div :class="[`mainArea`, mainAreaClass]" :style="[{ width: (rightPanelVisible ? `calc(100% - 660px)` : `calc(100% - 210px)`) }]">
        <slot />
      </div>
      <slot v-if="rightPanelVisible" name="right"/>

      <PasswordResetModal />
      <ReferralModal />
      <AccountRegistrationModal />
      <CommissionsSaveModal />
      <BonusLogModal />
      <GameLogModal />
      <CashLogModal />
      <TipLogModal />
      <TipModal />
      <ErrorModal />
    </main>
    <Footer />
  </div>
</template>
<script>

export default {
  props: {
    isDashboard: {
      type: Boolean,
      default: false
    },
    breadcrumb: { default() { return []; } }
  },
  components: { SideNav, SideBar, RightBar, Footer, DatePicker, 
    PasswordResetModal, ReferralModal, AccountRegistrationModal, CommissionsSaveModal,
    ErrorModal, BonusLogModal, GameLogModal, CashLogModal, TipLogModal, TipModal,
    LoadingOverlay
  },
  data() {
    return {
      isMenuCondensed: false,
      defaultdate: ""
    };
  },
  computed: {
    ...mapState({
      me() { var a = GetAuth(); return a },
      rightPanelVisible: (state) => state.rightPanel && state.rightPanel.isVisible,
      rightPanelSize: (state) => state.rightPanel && state.rightPanel.size,
      mainAreaClass: state => state.mainAreaClass || "",
    }),
  },
  created: () => {
    document.body.classList.remove("bg-primary");
  },
  mounted() {
    hideRightPanel();
    console.log("me", this.me)
  },
  methods: {
    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");

      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
          document.body.classList.remove("vertical-collpsed");
        });
        document.body.classList.toggle("vertical-collpsed");
      } else {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    logout() {
      logout();
      this.$router.push("/login");
    },
  }
};
import $ from 'jquery';

$(function(){
	$('html').click(function(e){
    console.log("html")
		if($(e.target).parents('.select').length < 1){
			$(".select label").removeClass("on");
		}
	});
});

$(function(){
	$('header .menuBtn').click(function(){
		$("nav").addClass("show");
	});
	$('nav .xBtn').click(function(){
		$("nav").removeClass("show");
	});
});

$(function(){
	$('main .mainArea .scrollBox .tableBox table td').click(function(){
		if($(this).children().hasClass("refBtn") == false){
			$(".detailArea").hide();
			$(".detailTable").show();
		}
	});
	$('.detailArea .xBtn').click(function(){
		$(".detailArea").hide();
	});
});

import {logout} from "@/services/auth";
import {showRightPanel,hideRightPanel} from "@/utils";
import { mapState } from 'vuex';
import router from "@/router";
import SideNav from "@/components/side-nav";
import SideBar from "@/components/side-bar";
import RightBar from "@/components/right-bar";
import ErrorModal from '@/components/error-modal';
import LoadingOverlay from '@/components/loading-overlay';
import DatePicker from "vue2-datepicker";
import Footer from "./footer";
import PasswordResetModal from "@/components/password-reset-modal";
import ReferralModal from "@/components/referral-modal";
import AccountRegistrationModal from "@/components/account-registration-modal";
import CommissionsSaveModal from "@/components/commissions-save-modal";
import BonusLogModal from '@/components/bonus-log-modal';
import GameLogModal from '@/components/game-log-modal';
import CashLogModal from '@/components/cash-log-modal';
import TipLogModal from '@/components/tip-log-modal';
import TipModal from '@/components/tip-modal';
import '@/../public/css/style.css';
import { GetAuth } from "@/store";
</script>
