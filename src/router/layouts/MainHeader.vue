<template>
  <header>
    <img src="img/logo.png" class="logo" @click="goPage('/')" />
    <div class="depth">
      <span v-if="breadcrumb[0]">{{ breadcrumb[0].text }}</span>
      <span v-if="breadcrumb[1]">{{ breadcrumb[1].text }}</span>
      <span v-if="breadcrumb[2]">{{ breadcrumb[2].text }}</span>
    </div>
    <div class="profile" @click="showProfile" v-click-outside="hideProfile">
      <img src="img/profile.png" />
      <span class="name">{{ me && me.username }}</span>
      <span class="logout-btn" :class="{ show: isClicked }" @click="logout">
        Logout</span
      >
    </div>
    <a href="javascript:;" class="menuBtn" @click="showSideNav">
      <img src="img/icon_menu.png" />
    </a>
  </header>
</template>

<script>
import { logout } from '@/services/auth';
import { mapState } from 'vuex';
import { GetAuth } from '@/store';
import Swal from 'sweetalert2';
import commonMixin from '@/mixins/common.js';

export default {
  props: {
    breadcrumb: {
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isClicked: false,
    };
  },
  computed: {
    ...mapState({
      me() {
        let myInfo = GetAuth();
        return myInfo;
      },
    }),
  },
  mixins: [commonMixin],
  methods: {
    logout() {
      Swal.fire({
        title: 'Logout',
        text: 'Are you sure you want to log out?',
        showCancelButton: true,
        confirmButtonColor: '#dc2f00',
        confirmButtonText: `Yes, I'm sure`,
        cancelButtonText: 'No, cancel it!',
      }).then(result => {
        if (result.isConfirmed) {
          logout();
          this.$router.push('/login');
        } else {
          return;
        }
      });
    },
    showProfile() {
      this.isClicked = !this.isClicked;
    },
    hideProfile() {
      this.isClicked = false;
    },
    showSideNav() {
      this.$emit('showSideNav');
    },
  },
};
</script>
