<template>
  <div id="layout-wrapper">
    <MainHeader :breadcrumb="breadcrumb" />
    <!-- <LoadingOverlay /> -->
    <main>
      <SideNav />
      <div
        :class="[`mainArea`, mainAreaClass]"
        :style="[
          {
            width: rightPanelVisible
              ? `calc(100% - 660px)`
              : `calc(100% - 210px)`,
          },
        ]"
      >
        <slot />
      </div>
      <slot v-if="rightPanelVisible" name="right" />
      <PasswordResetModal />
      <AffiliateModal />
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
      default: false,
    },
    breadcrumb: {
      default() {
        return [];
      },
    },
  },
  components: {
    SideNav,
    SideBar,
    RightBar,
    Footer,
    DatePicker,
    PasswordResetModal,
    AffiliateModal,
    AccountRegistrationModal,
    CommissionsSaveModal,
    ErrorModal,
    BonusLogModal,
    GameLogModal,
    CashLogModal,
    TipLogModal,
    TipModal,
    LoadingOverlay,
    MainHeader,
  },
  data() {
    return {
      isMenuCondensed: false,
      defaultdate: '',
    };
  },
  computed: {
    ...mapState({
      rightPanelVisible: state =>
        state.rightPanel && state.rightPanel.isVisible,
      rightPanelSize: state => state.rightPanel && state.rightPanel.size,
      mainAreaClass: state => state.mainAreaClass || '',
    }),
  },
  created: () => {
    document.body.classList.remove('bg-primary');
  },
  mounted() {
    hideRightPanel();
  },
  methods: {
    toggleMenu() {
      document.body.classList.toggle('sidebar-enable');

      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove('sidebar-enable');
          document.body.classList.remove('vertical-collpsed');
        });
        document.body.classList.toggle('vertical-collpsed');
      } else {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove('sidebar-enable');
        });
        document.body.classList.remove('vertical-collpsed');
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },
    toggleRightSidebar() {
      document.body.classList.toggle('right-bar-enabled');
    },
    hideRightSidebar() {
      document.body.classList.remove('right-bar-enabled');
    },
    showMenu() {
      $('nav').addClass('show');
    },
  },
};
import $ from 'jquery';

$(function () {
  $('html').click(function (e) {
    if ($(e.target).parents('.select').length < 1) {
      $('.select label').removeClass('on');
    }
  });
});

$(function () {
  $('header .menuBtn').click(function () {
    $('nav').addClass('show');
  });
  $('nav .xBtn').click(function () {
    $('nav').removeClass('show');
  });
});

$(function () {
  $('main .mainArea .scrollBox .tableBox table td').click(function () {
    if ($(this).children().hasClass('refBtn') == false) {
      $('.detailArea').hide();
      $('.detailTable').show();
    }
  });
  $('.detailArea .xBtn').click(function () {
    $('.detailArea').hide();
  });
});

import { showRightPanel, hideRightPanel } from '@/utils';
import { mapState } from 'vuex';
import router from '@/router';
import SideNav from '@/components/side-nav';
import SideBar from '@/components/side-bar';
import RightBar from '@/components/right-bar';
import ErrorModal from '@/components/error-modal';
import LoadingOverlay from '@/components/loading-overlay';
import DatePicker from 'vue2-datepicker';
import Footer from './footer';
import PasswordResetModal from '@/components/password-reset-modal';
import AffiliateModal from '@/components/affiliate-modal';
import AccountRegistrationModal from '@/components/account-registration-modal';
import CommissionsSaveModal from '@/components/commissions-save-modal';
import BonusLogModal from '@/components/bonus-log-modal';
import GameLogModal from '@/components/game-log-modal';
import CashLogModal from '@/components/cash-log-modal';
import TipLogModal from '@/components/tip-log-modal';
import TipModal from '@/components/tip-modal';
import '@/../public/css/style.css';
import MainHeader from './MainHeader.vue';
</script>
