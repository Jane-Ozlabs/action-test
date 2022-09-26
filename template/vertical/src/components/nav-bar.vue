
<script>
import simplebar from "simplebar-vue";

/**
 * Nav-bar Component
 */
export default {
  components: { simplebar },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    }
  }
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <div class="navbar-brand-box">
          <a href="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-dark.png" alt height="17" />
            </span>
          </a>

          <a href="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-light.png" alt height="16" />
            </span>
          </a>
        </div>
        <button
          type="button"
          class="btn btn-sm px-3 font-size-24 header-item"
          id="vertical-menu-btn"
          @click="toggleMenu"
        >
          <i class="mdi mdi-menu"></i>
        </button>

        <div class="d-none d-sm-block">
          <b-dropdown variant="light" class="pt-3 d-inline-block">
            <template v-slot:button-content>
              Create
              <i class="mdi mdi-chevron-down"></i>
            </template>
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else here</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Separated link</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div class="d-flex">
        <!-- App Search-->
        <form class="app-search d-none d-lg-block ml-2">
          <div class="position-relative">
            <input type="text" class="form-control" placeholder="Search..." />
            <span class="fa fa-search"></span>
          </div>
        </form>

        <b-dropdown variant="white" right class="d-none d-md-block ml-2" toggle-class="header-item">
          <template v-slot:button-content>
            <img
              class="mr-2"
              src="@/assets/images/flags/us_flag.jpg"
              alt="Header Language"
              height="16"
            />
            English
            <i class="mdi mdi-chevron-down"></i>
          </template>
          <b-dropdown-item class="notify-item">
            <img
              src="@/assets/images/flags/germany_flag.jpg"
              alt="user-image"
              class="mr-1"
              height="12"
            />
            <span class="align-middle">German</span>
          </b-dropdown-item>
          <!-- item-->
          <b-dropdown-item class="notify-item">
            <img
              src="@/assets/images/flags/italy_flag.jpg"
              alt="user-image"
              class="mr-1"
              height="12"
            />
            <span class="align-middle">Italian</span>
          </b-dropdown-item>

          <!-- item-->
          <b-dropdown-item class="notify-item">
            <img
              src="@/assets/images/flags/french_flag.jpg"
              alt="user-image"
              class="mr-1"
              height="12"
            />
            <span class="align-middle">French</span>
          </b-dropdown-item>

          <!-- item-->
          <b-dropdown-item class="notify-item">
            <img
              src="@/assets/images/flags/spain_flag.jpg"
              alt="user-image"
              class="mr-1"
              height="12"
            />
            <span class="align-middle">Spanish</span>
          </b-dropdown-item>

          <!-- item-->
          <b-dropdown-item class="notify-item">
            <img
              src="@/assets/images/flags/russia_flag.jpg"
              alt="user-image"
              class="mr-1"
              height="12"
            />
            <span class="align-middle">Russian</span>
          </b-dropdown-item>
        </b-dropdown>

        <div class="dropdown d-none d-lg-inline-block">
          <button type="button" class="btn header-item noti-icon" @click="initFullScreen">
            <i class="ion ion-md-qr-scanner"></i>
          </button>
        </div>
        <b-dropdown
          right
          menu-class="dropdown-menu-lg p-0"
          toggle-class="header-item noti-icon"
          variant="black"
          class="d-inline-block ml-2"
        >
          <template v-slot:button-content>
            <i class="ion ion-md-notifications"></i>
            <span class="badge badge-danger badge-pill">3</span>
          </template>

          <div class="p-3">
            <div class="row align-items-center">
              <div class="col">
                <h5 class="m-0 font-size-16">Notifications (258)</h5>
              </div>
            </div>
          </div>
          <simplebar style="max-height: 230px;">
            <a href="javascript:void(0);" class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs mr-3">
                  <span class="avatar-title bg-success rounded-circle font-size-16">
                    <i class="mdi mdi-cart-outline"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Your order is placed</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">Dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="javascript:void(0);" class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs mr-3">
                  <span class="avatar-title bg-warning rounded-circle font-size-16">
                    <i class="mdi mdi-message-text-outline"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">New Message received</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">You have 87 unread messages</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="javascript:void(0);" class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs mr-3">
                  <span class="avatar-title bg-info rounded-circle font-size-16">
                    <i class="mdi mdi-glass-cocktail"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Your item is shipped</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">It is a long established fact that a reader will</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="javascript:void(0);" class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs mr-3">
                  <span class="avatar-title bg-primary rounded-circle font-size-16">
                    <i class="mdi mdi-cart-outline"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Your order is placed</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">Dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="javascript:void(0);" class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs mr-3">
                  <span class="avatar-title bg-danger rounded-circle font-size-16">
                    <i class="mdi mdi-message-text-outline"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">New Message received</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">You have 87 unread messages</p>
                  </div>
                </div>
              </div>
            </a>
          </simplebar>
          <div class="p-2 border-top">
            <a
              class="btn btn-sm btn-link font-size-14 btn-block text-center"
              href="javascript:void(0)"
            >View all</a>
          </div>
        </b-dropdown>

        <b-dropdown right variant="white" class="d-inline-block ml-2" toggle-class="header-item">
          <template v-slot:button-content>
            <img
              class="rounded-circle header-profile-user"
              src="@/assets/images/users/avatar-1.jpg"
              alt="Header Avatar"
            />
          </template>

          <!-- item-->
          <b-dropdown-item>
            <i class="mdi mdi-account-circle font-size-17 align-middle mr-1"></i> Profile
          </b-dropdown-item>
          <b-dropdown-item>
            <i class="mdi mdi-wallet font-size-17 align-middle mr-1"></i> My Wallet
          </b-dropdown-item>
          <b-dropdown-item class="d-block">
            <span class="badge badge-success float-right">11</span>
            <i class="mdi mdi-settings font-size-17 align-middle mr-1"></i> Settings
          </b-dropdown-item>
          <b-dropdown-item>
            <i class="mdi mdi-lock-open-outline font-size-17 align-middle mr-1"></i> Lock screen
          </b-dropdown-item>
          <b-dd-divider></b-dd-divider>
          <b-dropdown-item class="text-danger">
            <i class="bx bx-power-off font-size-17 align-middle mr-1 text-danger"></i> Logout
          </b-dropdown-item>
        </b-dropdown>

        <div class="dropdown d-inline-block">
          <button
            type="button"
            class="btn header-item noti-icon right-bar-toggle toggle-right"
            @click="toggleRightSidebar"
          >
            <i class="mdi mdi-spin mdi-settings toggle-right"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
