<script>
export default {
  mounted() {
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
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
        }
        const parent3 = parent2.parentElement;
        if (parent3) {
          parent3.classList.add("active");
          var childAnchor = parent3.querySelector(".has-dropdown");
          if (childAnchor) childAnchor.classList.add("active");
        }

        const parent4 = parent3.parentElement;
        if (parent4) parent4.classList.add("active");
        const parent5 = parent4.parentElement;
        if (parent5) parent5.classList.add("active");
      }
    }
  },
  methods: {
    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextSibling;
      if (nextEl && !nextEl.classList.contains("show")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("show");
        }
        nextEl.classList.add("show");
      } else if (nextEl) {
        nextEl.classList.remove("show");
      }
      return false;
    },

    boxedLayout() {
      document.body.setAttribute("data-layout-size", "boxed");
    }
  }
};
</script>
<template>
  <div class="topnav">
    <div class="container-fluid">
      <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
        <div id="topnav-menu-content" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link tag="a" class="nav-link side-nav-link-ref" to="/">
                <i class="ion ion-md-speedometer mr-2"></i>Dashboard
              </router-link>
            </li>

            <li class="nav-item dropdown">
              <a
                id="topnav-components"
                class="nav-link dropdown-toggle arrow-none"
                href="javascript: void(0);"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="ion ion-md-help-buoy mr-2"></i>UI Elements
                <div class="arrow-down"></div>
              </a>
              <div
                class="dropdown-menu mega-dropdown-menu dropdown-mega-menu-lg"
                aria-labelledby="topnav-components"
              >
                <div class="row">
                  <div class="col-lg-6">
                    <router-link
                      tag="a"
                      to="/ui/alerts"
                      class="dropdown-item side-nav-link-ref"
                    >Alerts</router-link>
                    <router-link
                      tag="a"
                      to="/ui/buttons"
                      class="dropdown-item side-nav-link-ref"
                    >Buttons</router-link>
                    <router-link
                      tag="a"
                      to="/ui/cards"
                      class="dropdown-item side-nav-link-ref"
                    >Cards</router-link>
                    <router-link
                      tag="a"
                      to="/ui/carousel"
                      class="dropdown-item side-nav-link-ref"
                    >Carousel</router-link>
                    <router-link
                      tag="a"
                      to="/ui/general"
                      class="dropdown-item side-nav-link-ref"
                    >General UI</router-link>
                    <router-link tag="a" to="/ui/grid" class="dropdown-item side-nav-link-ref">Grid</router-link>
                  </div>
                  <div class="col-lg-6">
                    <router-link
                      tag="a"
                      to="/ui/images"
                      class="dropdown-item side-nav-link-ref"
                    >Images</router-link>
                    <router-link
                      tag="a"
                      to="/ui/modals"
                      class="dropdown-item side-nav-link-ref"
                    >Modals</router-link>
                    <router-link
                      tag="a"
                      to="/ui/rangeslider"
                      class="dropdown-item side-nav-link-ref"
                    >Range Slider</router-link>
                    <router-link
                      tag="a"
                      to="/ui/sweet-alert"
                      class="dropdown-item side-nav-link-ref"
                    >Sweet-Alert</router-link>
                    <router-link
                      tag="a"
                      to="/ui/tabs-accordions"
                      class="dropdown-item side-nav-link-ref"
                    >Tabs & Accordions</router-link>
                    <router-link
                      tag="a"
                      to="/ui/typography"
                      class="dropdown-item side-nav-link-ref"
                    >Typography</router-link>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                id="topnav-pages"
                class="nav-link dropdown-toggle arrow-none"
                href="javascript: void(0);"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="ion ion-md-grid mr-2"></i>Apps
                <div class="arrow-down"></div>
              </a>
              <div class="dropdown-menu" aria-labelledby="topnav-pages">
                <router-link tag="a" to="/calendar" class="dropdown-item side-nav-link-ref">Calendar</router-link>
                <div class="dropdown">
                  <a
                    id="topnav-email"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="javascript: void(0);"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Email
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-email">
                    <router-link
                      tag="a"
                      to="/email/inbox"
                      class="dropdown-item side-nav-link-ref"
                    >Inbox</router-link>
                    <router-link
                      tag="a"
                      to="/email/read"
                      class="dropdown-item side-nav-link-ref"
                    >Read Email</router-link>
                    <router-link
                      tag="a"
                      to="/email/compose"
                      class="dropdown-item side-nav-link-ref"
                    >Email Compose</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-ecommerce"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="javascript: void(0);"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Ecommerce
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-ecommerce">
                    <router-link
                      tag="a"
                      to="/ecommerce/products"
                      class="dropdown-item side-nav-link-ref"
                    >Products</router-link>
                    <router-link
                      tag="a"
                      to="/ecommerce/products-list"
                      class="dropdown-item side-nav-link-ref"
                    >Products List</router-link>
                    <router-link
                      tag="a"
                      to="/ecommerce/order-history"
                      class="dropdown-item side-nav-link-ref"
                    >Order History</router-link>
                    <router-link
                      tag="a"
                      to="/ecommerce/customers"
                      class="dropdown-item side-nav-link-ref"
                    >Customers</router-link>
                    <router-link
                      tag="a"
                      to="/ecommerce/product-edit"
                      class="dropdown-item side-nav-link-ref"
                    >Product Edit</router-link>
                  </div>
                </div>
                <router-link tag="a" to="/projects" class="dropdown-item side-nav-link-ref">Projects</router-link>
                <a
                  class="dropdown-item"
                  href="javascript: void(0);"
                  @click="boxedLayout()"
                >Boxed Layout</a>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                id="topnav-charts"
                class="nav-link dropdown-toggle arrow-none"
                href="javascript: void(0);"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="ion ion-md-options mr-2"></i>Components
                <div class="arrow-down"></div>
              </a>
              <div class="dropdown-menu" aria-labelledby="topnav-charts">
                <div class="dropdown">
                  <a
                    id="topnav-form"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="javascript: void(0);"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Forms
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-form">
                    <router-link
                      tag="a"
                      to="/form/elements"
                      class="dropdown-item side-nav-link-ref"
                    >Form Elements</router-link>
                    <router-link
                      tag="a"
                      to="/form/validation"
                      class="dropdown-item side-nav-link-ref"
                    >Form Validation</router-link>
                    <router-link
                      tag="a"
                      to="/form/advanced"
                      class="dropdown-item side-nav-link-ref"
                    >Form Advanced</router-link>
                    <router-link
                      tag="a"
                      to="/form/editor"
                      class="dropdown-item side-nav-link-ref"
                    >Form Editor</router-link>
                    <router-link
                      tag="a"
                      to="/form/uploads"
                      class="dropdown-item side-nav-link-ref"
                    >Form File Upload</router-link>
                    <router-link
                      tag="a"
                      to="/form/wizard"
                      class="dropdown-item side-nav-link-ref"
                    >Form Wizard</router-link>
                    <router-link
                      tag="a"
                      to="/form/mask"
                      class="dropdown-item side-nav-link-ref"
                    >Form Mask</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-table"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="javascript: void(0);"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Charts
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-table">
                    <router-link
                      tag="a"
                      to="/charts/apex"
                      class="dropdown-item side-nav-link-ref"
                    >Apex charts</router-link>
                    <router-link
                      tag="a"
                      to="/charts/chartjs"
                      class="dropdown-item side-nav-link-ref"
                    >Chartjs Chart</router-link>
                    <router-link
                      tag="a"
                      to="/charts/chartist"
                      class="dropdown-item side-nav-link-ref"
                    >Chartist Chart</router-link>
                    <router-link
                      tag="a"
                      to="/charts/echart"
                      class="dropdown-item side-nav-link-ref"
                    >E-Chart</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-table"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="javascript: void(0);"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Tables
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-table">
                    <router-link
                      tag="a"
                      to="/tables/basictable"
                      class="dropdown-item side-nav-link-ref"
                    >Basic Tables</router-link>
                    <router-link
                      tag="a"
                      to="/tables/advancedtable"
                      class="dropdown-item side-nav-link-ref"
                    >Advanced Table</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-table"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="javascript: void(0);"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Icons
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-table">
                    <router-link
                      tag="a"
                      to="/icons/materialdesign"
                      class="dropdown-item side-nav-link-ref"
                    >Material Design</router-link>
                    <router-link
                      tag="a"
                      to="/icons/fontawesome"
                      class="dropdown-item side-nav-link-ref"
                    >Font Awesome</router-link>
                    <router-link
                      tag="a"
                      to="/icons/ion"
                      class="dropdown-item side-nav-link-ref"
                    >Ion Icons</router-link>
                    <router-link
                      tag="a"
                      to="/icons/themify"
                      class="dropdown-item side-nav-link-ref"
                    >Themify Icons</router-link>
                    <router-link
                      tag="a"
                      to="/icons/dripicons"
                      class="dropdown-item side-nav-link-ref"
                    >Dripicons</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-map"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="javascript: void(0);"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Maps
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-map">
                    <router-link
                      tag="a"
                      to="/maps/google"
                      class="dropdown-item side-nav-link-ref"
                    >Google Maps</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-emailtemplates"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="javascript: void(0);"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Email Templates
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-emailtemplates">
                    <router-link
                      tag="a"
                      to="/email-template/basic"
                      class="dropdown-item side-nav-link-ref"
                    >Basic Action Email</router-link>
                    <router-link
                      tag="a"
                      to="/email-template/alert"
                      class="dropdown-item side-nav-link-ref"
                    >Alert Email</router-link>
                    <router-link
                      tag="a"
                      to="/email-template/billing"
                      class="dropdown-item side-nav-link-ref"
                    >Billing Email</router-link>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle arrow-none"
                href="javascript: void(0);"
                id="topnav-layout"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="ion ion-md-wifi mr-2"></i>Authenticaion
                <div class="arrow-down"></div>
              </a>
              <div
                class="dropdown-menu mega-dropdown-menu dropdown-mega-menu-lg"
                aria-labelledby="topnav-authentication"
              >
                <div class="row">
                  <div class="col-lg-6">
                    <div>
                      <router-link tag="a" to="/pages/login-1" class="dropdown-item">Login One</router-link>
                      <router-link tag="a" to="/pages/register-1" class="dropdown-item">Register One</router-link>
                      <router-link
                        tag="a"
                        to="/pages/recoverpwd-1"
                        class="dropdown-item"
                      >Recover Password One</router-link>
                      <router-link
                        tag="a"
                        to="/pages/lockscreen-1"
                        class="dropdown-item"
                      >Lock Screen One</router-link>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div>
                      <router-link tag="a" to="/pages/login-2" class="dropdown-item">Login Two</router-link>
                      <router-link tag="a" to="/pages/register-2" class="dropdown-item">Register Two</router-link>
                      <router-link
                        tag="a"
                        to="/pages/recoverpwd-2"
                        class="dropdown-item"
                      >Recover Password Two</router-link>
                      <router-link
                        tag="a"
                        to="/pages/lockscreen-2"
                        class="dropdown-item"
                      >Lock Screen Two</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                id="topnav-pages"
                class="nav-link dropdown-toggle arrow-none"
                href="javascript: void(0);"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="ion ion-md-copy mr-2"></i>Extra pages
                <div class="arrow-down"></div>
              </a>
              <div
                class="dropdown-menu mega-dropdown-menu dropdown-mega-menu-lg"
                aria-labelledby="topnav-pages"
              >
                <div class="row">
                  <div class="col-lg-6">
                    <div>
                      <router-link
                        tag="a"
                        to="/pages/blank"
                        class="dropdown-item side-nav-link-ref"
                      >Blank Page</router-link>
                      <router-link
                        tag="a"
                        to="/pages/timeline"
                        class="dropdown-item side-nav-link-ref"
                      >Timeline</router-link>
                      <router-link
                        tag="a"
                        to="/pages/invoice"
                        class="dropdown-item side-nav-link-ref"
                      >Invoice</router-link>
                      <router-link
                        tag="a"
                        to="/pages/pricing"
                        class="dropdown-item side-nav-link-ref"
                      >Pricing</router-link>
                      <router-link
                        tag="a"
                        to="/pages/maintenance"
                        class="dropdown-item side-nav-link-ref"
                      >Maintenance</router-link>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <router-link
                      tag="a"
                      to="/pages/faqs"
                      class="dropdown-item side-nav-link-ref"
                    >FAQs</router-link>
                    <router-link tag="a" to="/pages/404" class="dropdown-item">Error 404</router-link>
                    <router-link tag="a" to="/pages/500" class="dropdown-item">Error 500</router-link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>