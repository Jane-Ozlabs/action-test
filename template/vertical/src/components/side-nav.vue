<script>
import MetisMenu from "metismenujs/dist/metismenujs";

export default {
  components: {},
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
</script>

<template>
  <!-- ========== Left Sidebar Start ========== -->

  <!--- Sidemenu -->
  <div id="sidebar-menu">
    <!-- Left Menu Start -->
    <ul id="side-menu" class="metismenu list-unstyled">
      <li class="menu-title">Overview</li>

      <li>
        <router-link tag="a" to="/" class="side-nav-link-ref">
          <i class="ion ion-md-speedometer"></i>
          <span class="badge badge-pill badge-success float-right">3</span>
          <span>Dashboard</span>
        </router-link>
      </li>

      <li class="menu-title">Apps</li>
      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="ion ion-md-mail"></i>
          <span>Email</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/email/inbox" class="side-nav-link-ref">Inbox</router-link>
          </li>
          <li>
            <router-link tag="a" to="/email/read" class="side-nav-link-ref">Read Email</router-link>
          </li>
          <li>
            <router-link tag="a" to="/email/compose" class="side-nav-link-ref">Email Compose</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link tag="a" to="/calendar" class="side-nav-link-ref">
          <i class="ion ion-md-calendar"></i>
          <span>Calendar</span>
        </router-link>
      </li>
      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="ion ion-md-cart"></i>
          <span>Ecommerce</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/ecommerce/products" class="side-nav-link-ref">Products</router-link>
          </li>
          <li>
            <router-link
              tag="a"
              to="/ecommerce/products-list"
              class="side-nav-link-ref"
            >Products list</router-link>
          </li>
          <li>
            <router-link
              tag="a"
              to="/ecommerce/order-history"
              class="side-nav-link-ref"
            >Order History</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ecommerce/customers" class="side-nav-link-ref">Customers</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ecommerce/product-edit" class="side-nav-link-ref">Product Edit</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link tag="a" to="/projects" class="side-nav-link-ref">
          <i class="ion ion-md-clipboard"></i>
          <span>Projects</span>
        </router-link>
      </li>

      <li class="menu-title">Pages</li>

      <li>
        <a href="javascript: void(0);" class>
          <i class="ion ion-md-wifi"></i>
          <span class="badge badge-pill badge-light float-right">New</span>
          <span>Authentication</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/pages/login-1">Login One</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/login-2">Login Two</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/register-1">Register One</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/register-2">Register Two</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/recoverpwd-1">Recover Password One</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/recoverpwd-2">Recover Password Two</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/lockscreen-1">Lock Screen One</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/lockscreen-2">Lock Screen Two</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="ion ion-md-copy"></i>
          <span>Extra Pages</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/pages/blank" class="side-nav-link-ref">Blank Page</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/timeline" class="side-nav-link-ref">Timeline</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/invoice" class="side-nav-link-ref">Invoice</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/pricing" class="side-nav-link-ref">Pricing</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/maintenance" class="side-nav-link-ref">Maintenance</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/faqs" class="side-nav-link-ref">FAQs</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/404" class="side-nav-link-ref">Error 404</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/500" class="side-nav-link-ref">Error 500</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="ion ion-md-paper-plane"></i>
          <span>Email Templates</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link
              tag="a"
              to="/email-template/basic"
              class="side-nav-link-ref"
            >Basic Action Email</router-link>
          </li>
          <li>
            <router-link tag="a" to="/email-template/alert" class="side-nav-link-ref">Alert Email</router-link>
          </li>
          <li>
            <router-link
              tag="a"
              to="/email-template/billing"
              class="side-nav-link-ref"
            >Billing Email</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="ion ion-md-options"></i>
          <span>Layouts</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <a
              href="javascript: void(0);"
              class="side-nav-link-ref"
              @click="lightSidebar"
            >Light Sidebar</a>
          </li>
          <li>
            <a
              href="javascript: void(0);"
              class="side-nav-link-ref"
              @click="compactSidebar"
            >Compact Sidebar</a>
          </li>
          <li>
            <a
              href="javascript: void(0);"
              class="side-nav-link-ref"
              @click="iconSidebar"
            >Icon Sidebar</a>
          </li>
          <li>
            <a
              href="javascript: void(0);"
              class="side-nav-link-ref"
              @click="boxedLayout"
            >Boxed Layout</a>
          </li>
        </ul>
      </li>
      <li class="menu-title">Components</li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="ion ion-md-infinite"></i>
          <span>UI Elements</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/ui/alerts" class="side-nav-link-ref">Alerts</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/buttons" class="side-nav-link-ref">Buttons</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/cards" class="side-nav-link-ref">Cards</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/carousel" class="side-nav-link-ref">Carousel</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/general" class="side-nav-link-ref">General UI</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/grid" class="side-nav-link-ref">Grid</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/images" class="side-nav-link-ref">Images</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/modals" class="side-nav-link-ref">Modals</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/rangeslider" class="side-nav-link-ref">Range Slider</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/sweet-alert" class="side-nav-link-ref">Sweet-Alert</router-link>
          </li>
          <li>
            <router-link
              tag="a"
              to="/ui/tabs-accordions"
              class="side-nav-link-ref"
            >Tabs & Accordions</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/typography" class="side-nav-link-ref">Typography</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-dropdown">
          <i class="ion ion-md-paper"></i>
          <span class="badge badge-pill badge-info float-right">8</span>
          <span>Forms</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/form/elements" class="side-nav-link-ref">Form Elements</router-link>
          </li>
          <li>
            <router-link tag="a" to="/form/validation" class="side-nav-link-ref">Form Validation</router-link>
          </li>
          <li>
            <router-link tag="a" to="/form/advanced" class="side-nav-link-ref">Form Advanced</router-link>
          </li>
          <li>
            <router-link tag="a" to="/form/editor" class="side-nav-link-ref">Form Editor</router-link>
          </li>
          <li>
            <router-link tag="a" to="/form/uploads" class="side-nav-link-ref">Form File Upload</router-link>
          </li>
          <li>
            <router-link tag="a" to="/form/wizard" class="side-nav-link-ref">Form Wizard</router-link>
          </li>
          <li>
            <router-link tag="a" to="/form/mask" class="side-nav-link-ref">Form Mask</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="ion ion-md-pulse"></i>
          <span>Charts</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/charts/apex" class="side-nav-link-ref">Apex Chart</router-link>
          </li>
          <li>
            <router-link tag="a" to="/charts/chartjs" class="side-nav-link-ref">Chartjs Chart</router-link>
          </li>
          <li>
            <router-link tag="a" to="/charts/echart" class="side-nav-link-ref">E-Chart</router-link>
          </li>
          <li>
            <router-link tag="a" to="/charts/chartist" class="side-nav-link-ref">Chartist Chart</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="ion ion-md-list"></i>
          <span>Tables</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/tables/basictable" class="side-nav-link-ref">Basic Tables</router-link>
          </li>
          <li>
            <router-link tag="a" to="/tables/advancedtable" class="side-nav-link-ref">Advanced Table</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="ion ion-md-bonfire"></i>
          <span>Icons</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link
              tag="a"
              to="/icons/materialdesign"
              class="side-nav-link-ref"
            >Material Design</router-link>
          </li>
          <li>
            <router-link tag="a" to="/icons/fontawesome" class="side-nav-link-ref">Font Awesome</router-link>
          </li>
          <li>
            <router-link tag="a" to="/icons/ion" class="side-nav-link-ref">Ion Icons</router-link>
          </li>
          <li>
            <router-link tag="a" to="/icons/themify" class="side-nav-link-ref">Themify Icons</router-link>
          </li>
          <li>
            <router-link tag="a" to="/icons/dripicons" class="side-nav-link-ref">Dripicons</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="ion ion-md-pin"></i>
          <span>Maps</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/maps/google" class="side-nav-link-ref">Google Maps</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="ion ion-md-funnel"></i>
          <span>Multi Level</span>
        </a>
        <ul class="sub-menu" aria-expanded="true">
          <li>
            <a href="javascript: void(0);">Level 1.1</a>
          </li>
          <li>
            <a href="javascript: void(0);" class="has-arrow">Level 1.2</a>
            <ul class="sub-menu" aria-expanded="true">
              <li>
                <a href="javascript: void(0);">Level 2.1</a>
              </li>
              <li>
                <a href="javascript: void(0);">Level 2.2</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <!-- Sidebar -->
</template>
