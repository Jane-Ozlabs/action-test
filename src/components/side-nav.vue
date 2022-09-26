<template>
  <nav>
      <a href="javascript:;" class="xBtn"><img src="img/icon_close.png"></a>
      <div class="dateBox">
          <p>UTC : <ClockUTC /></p>
          <p>KST : <ClockKST /></p>
      </div>
      <ul class="nav_list">
          <li>
              <input type="checkbox" id="nav01"><label for="nav01">Member Management</label>
              <div class="subNav">
                  <router-link tag="a" to="/user/users" class="side-nav-link-ref">All Members</router-link>
                  <router-link tag="a" to="/user/emails" class="side-nav-link-ref">Send email</router-link>
                  <router-link tag="a" to="/user/groups" class="side-nav-link-ref">Revenue distribution</router-link>
              </div>
          </li>
          <li>
              <input type="checkbox" id="nav02"><label for="nav02">Sales Management</label>
              <div class="subNav">
                  <router-link tag="a" to="/revenue/daily" class="side-nav-link-ref">Sales Daily</router-link>
                  <router-link tag="a" to="/revenue/monthly" class="side-nav-link-ref">Sales Monthly</router-link>
              </div>
          </li>
          <li v-if="isHQ">
              <input type="checkbox" id="nav03"><label for="nav03">Payment Management</label>
              <div class="subNav">
                  <router-link tag="a" to="/settlement/settlements" class="side-nav-link-ref">Payment Management</router-link>
              </div>
          </li>
          <li>
              <input type="checkbox" id="nav04"><label for="nav04">Game User Status</label>
              <div class="subNav">
                  <router-link tag="a" to="/analytics/games" class="side-nav-link-ref">Game User Status</router-link>
                  <router-link tag="a" to="/analytics/bettings" class="side-nav-link-ref">Betting Status</router-link>
              </div>
          </li>
      </ul>
  </nav>
</template>
<script>
export default {
  components: { ClockUTC, ClockKST },
  computed: {
    isHQ() { var a = GetAuth(); return a && a.access_token && a.userAgent && a.userAgent.agentLevel <= 1; },
  },
  mounted: function() {
    var matchingMenuItem = null;
    var links = document.getElementsByClassName("side-nav-link-ref");
    for (var i = 0; i < links.length; i++) {
      console.log("sidenav:links", window.location.pathname, links[i].pathname)
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }
    if(matchingMenuItem) {
      matchingMenuItem.classList.add("on")
      var parent = matchingMenuItem.parentElement;
      if (parent) {
        var cat = parent.parentElement.querySelector("input[type=checkbox]");
        console.log(parent, parent.parentElement, cat);
        cat.setAttribute("checked", true);
      }
    }

    return;
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
import { GetAuth } from "@/store";
</script>
