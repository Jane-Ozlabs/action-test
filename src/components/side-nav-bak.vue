<template>
  <nav>
      <xbtn />
      <div class="dateBox">
          <p>UTC : <ClockUTC /></p>
          <p>KST : <ClockKST /></p>                
      </div>
      <ul class="nav_list">
          <li>
              <input type="checkbox" id="nav01" checked><label for="nav01">Member Management</label>
              <div class="subNav">
                  <a href="allMembers.php">All Members</a>
                  <a href="sendEmail.php">Send email</a>
                  <a href="revenueDistribution.php">Revenue distribution</a>
              </div>
          </li>
          <li>
              <input type="checkbox" id="nav02"><label for="nav02">Sales Management</label>
              <div class="subNav">
                  <a href="salesDaily.php">Sales Daily</a>
                  <a href="salesMonthly.php">Sales Monthly</a>
              </div>
          </li>
          <li>
              <input type="checkbox" id="nav03"><label for="nav03">Payment Management</label>
              <div class="subNav">
                  <a href="paymentManagement.php">Payment Management</a>
              </div>
          </li>
          <li>
              <input type="checkbox" id="nav04"><label for="nav04">Game User Status</label>
              <div class="subNav">
                  <a href="gameUserStatus.php">Game User Status</a>
                  <a href="bettingStatus.php">Betting Status</a>
              </div>
          </li>
      </ul>
  </nav>

  <!-- ========== Left Sidebar Start ========== -->

  <!--- Sidemenu -->
  <div id="sidebar-menu">
    <b-row class="d-flex"><b-col cols="12" class="text-primary d-flex flex-row justify-content-center">UTC: <ClockUTC /></b-col></b-row>
    <b-row class="d-flex"><b-col cols="12" class="text-white d-flex flex-row justify-content-center">KST: <ClockKST /></b-col></b-row>

    <!-- Left Menu Start -->
    <ul id="side-menu" class="metismenu list-unstyled">
      <li>
        <a href="javascript: void(0);" class="has-arrow"><i class="ion ion-md-cart"></i><span>회원 관리</span></a>
        <ul class="sub-menu" aria-expanded="false">
          <li><router-link tag="a" to="/user/users" class="side-nav-link-ref">전체 회원 관리</router-link></li>
          <li><router-link tag="a" to="/user/emails" class="side-nav-link-ref">이메일 발송</router-link></li>
          <li><router-link tag="a" to="/user/commissions" class="side-nav-link-ref">수익 분배 관리</router-link></li>
        </ul>
      </li>
      <li>
        <a href="javascript: void(0);" class="has-arrow"><i class="ion ion-md-cart"></i><span>매출 관리</span></a>
        <ul class="sub-menu" aria-expanded="false">
          <li><router-link tag="a" to="/revenue/daily" class="side-nav-link-ref">일별 매출 현황</router-link></li>
          <li><router-link tag="a" to="/revenue/monthly" class="side-nav-link-ref">월별 매출 현황</router-link></li>
        </ul>
      </li>      
      <li>
        <a href="javascript: void(0);" class="has-arrow"><i class="ion ion-md-cart"></i><span>정산 관리</span></a>
        <ul class="sub-menu" aria-expanded="false">
          <li><router-link tag="a" to="/settlement/settlements" class="side-nav-link-ref">정산 관리</router-link></li>
        </ul>
      </li>      
      <li>
        <a href="javascript: void(0);" class="has-arrow"><i class="ion ion-md-cart"></i><span>게임 이용 현황</span></a>
        <ul class="sub-menu" aria-expanded="false">
          <li><router-link tag="a" to="/analytics/games" class="side-nav-link-ref">게임 이용 현황</router-link></li>
          <li><router-link tag="a" to="/analytics/bettings" class="side-nav-link-ref">회원 베팅 현황</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
  <!-- Sidebar -->
</template>
<script>
export default {
  components: { ClockUTC, ClockKST },
  mounted: function() {
    document.body.setAttribute("data-sidebar", "dark");

    // eslint-disable-next-line no-unused-vars
    var menuRef = new MetisMenu("#side-menu");
    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("mm-active");
        const parent2 = parent.parentElement.closest("ul");
        if (parent2 && parent2.id !== "side-menu") {
          parent2.classList.add("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("mm-active");
            var childAnchor = parent3.querySelector(".has-arrow");
            var childDropdown = parent3.querySelector(".has-dropdown");
            if (childAnchor) childAnchor.classList.add("mm-active");
            if (childDropdown) childDropdown.classList.add("mm-active");

            const parent4 = parent3.parentElement;
            if (parent4) parent4.classList.add("mm-show");
            const parent5 = parent4.parentElement;
            if (parent5) parent5.classList.add("mm-active");
          }
        }
      }
    }
  },
  methods: {
    lightSidebar() {
      document.body.setAttribute("data-topbar", "dark");
      document.body.removeAttribute("data-sidebar");
      document.body.removeAttribute("data-layout-size", "boxed");
      document.body.removeAttribute("data-sidebar-size", "small");
      document.body.classList.remove("vertical-collpsed");
    },
    compactSidebar() {
      document.body.setAttribute("data-sidebar-size", "small");
      document.body.setAttribute("data-sidebar", "dark");
      document.body.removeAttribute("data-layout-size", "boxed");
      document.body.classList.remove("vertical-collpsed");
      document.body.removeAttribute("data-topbar", "dark");
    },
    iconSidebar() {
      document.body.setAttribute("data-keep-enlarged", "true");
      document.body.classList.add("vertical-collpsed");
      document.body.setAttribute("data-sidebar", "dark");
      document.body.removeAttribute("data-topbar", "dark");
      document.body.removeAttribute("data-layout-size", "boxed");
    },
    boxedLayout() {
      document.body.setAttribute("data-keep-enlarged", "true");
      document.body.classList.add("vertical-collpsed");
      document.body.setAttribute("data-layout-size", "boxed");
      document.body.setAttribute("data-sidebar", "dark");
      document.body.removeAttribute("data-topbar", "dark");
    }
  }
};
import ClockUTC from "./clock-utc";
import ClockKST from "./clock-kst";
import MetisMenu from "metismenujs/dist/metismenujs";
</script>
