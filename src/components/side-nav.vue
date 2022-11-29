<template>
  <nav :class="{ show: isNavClicked }">
    <xbtn />
    <div class="dateBox">
      <p>UTC : <ClockUTC /></p>
      <p>KST : <ClockKST /></p>
    </div>
    <ul class="nav_list">
      <li>
        <input type="checkbox" id="nav01" /><label for="nav01"
          >Member Management</label
        >
        <div class="subNav">
          <router-link to="/user/users" class="side-nav-link-ref"
            >All Members</router-link
          >
          <router-link to="/user/emails" class="side-nav-link-ref"
            >Send email</router-link
          >
          <router-link to="/user/groups" class="side-nav-link-ref" v-if="isHQ"
            >Revenue distribution</router-link
          >
        </div>
      </li>
      <li>
        <input type="checkbox" id="nav02" /><label for="nav02"
          >Sales Management</label
        >
        <div class="subNav">
          <router-link to="/revenue/daily" class="side-nav-link-ref"
            >Sales Daily</router-link
          >
          <router-link to="/revenue/monthly" class="side-nav-link-ref"
            >Sales Monthly</router-link
          >
        </div>
      </li>
      <li v-if="isHQ">
        <input type="checkbox" id="nav03" /><label for="nav03"
          >Payment Management</label
        >
        <div class="subNav">
          <router-link to="/settlement/settlements" class="side-nav-link-ref"
            >Payment Management</router-link
          >
        </div>
      </li>
      <li>
        <input type="checkbox" id="nav04" /><label for="nav04"
          >Game User Status</label
        >
        <div class="subNav">
          <router-link to="/analytics/games" class="side-nav-link-ref"
            >Game User Status</router-link
          >
          <router-link to="/analytics/bettings" class="side-nav-link-ref"
            >Betting Status</router-link
          >
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  components: { ClockUTC, ClockKST },
  props: ['isNavClicked'],
  computed: {
    isHQ() {
      var a = GetAuth();
      return a && a.access_token && a.userAgent && a.userAgent.agentLevel <= 1;
    },
  },
  mounted: function () {
    var matchingMenuItem = null;
    var links = document.getElementsByClassName('side-nav-link-ref');
    for (var i = 0; i < links.length; i++) {
      console.log('sidenav:links', window.location.pathname, links[i].pathname);
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }
    if (matchingMenuItem) {
      matchingMenuItem.classList.add('on');
      var parent = matchingMenuItem.parentElement;
      if (parent) {
        var cat = parent.parentElement.querySelector('input[type=checkbox]');
        console.log(parent, parent.parentElement, cat);
        cat.setAttribute('checked', true);
      }
    }
    return;
  },
  methods: {
    lightSidebar() {
      document.body.setAttribute('data-topbar', 'dark');
      document.body.removeAttribute('data-sidebar');
      document.body.removeAttribute('data-layout-size', 'boxed');
      document.body.removeAttribute('data-sidebar-size', 'small');
      document.body.classList.remove('vertical-collpsed');
    },
    compactSidebar() {
      document.body.setAttribute('data-sidebar-size', 'small');
      document.body.setAttribute('data-sidebar', 'dark');
      document.body.removeAttribute('data-layout-size', 'boxed');
      document.body.classList.remove('vertical-collpsed');
      document.body.removeAttribute('data-topbar', 'dark');
    },
    iconSidebar() {
      document.body.setAttribute('data-keep-enlarged', 'true');
      document.body.classList.add('vertical-collpsed');
      document.body.setAttribute('data-sidebar', 'dark');
      document.body.removeAttribute('data-topbar', 'dark');
      document.body.removeAttribute('data-layout-size', 'boxed');
    },
    boxedLayout() {
      document.body.setAttribute('data-keep-enlarged', 'true');
      document.body.classList.add('vertical-collpsed');
      document.body.setAttribute('data-layout-size', 'boxed');
      document.body.setAttribute('data-sidebar', 'dark');
      document.body.removeAttribute('data-topbar', 'dark');
    },
  },
};
import ClockUTC from './clock-utc';
import ClockKST from './clock-kst';
import { GetAuth } from '@/store';
</script>
