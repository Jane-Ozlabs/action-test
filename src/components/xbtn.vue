<template>
  <a href="javascript:;" class="xBtn" @click="xbtnClose"
    ><img src="img/icon_close_s.png"
  /></a>
</template>
<script>
export default {
  props: [{ modalKey: '' }, 'isFromSideNav'],
  methods: {
    xbtnClose() {
      if (this.modalKey) {
        hideModal({ self: this, key: this.modalKey });
      } else if (this.isFromSideNav) {
        this.$emit('close');
      } else {
        hideRightPanel();
      }
    },
  },
};
import { hideModal, hideRightPanel } from '@/utils';
</script>
