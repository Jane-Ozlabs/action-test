<template>
  <a href="javascript:;" class="xBtn" @click="xbtnClose"
    ><img :src="iconURL"
  /></a>
</template>
<script>
export default {
  props: [{ modalKey: '' }, 'isFromSideNav'],
  data(){
    return {
      iconURL: this.$store.getters.iconURL.close_s
    }
  },
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
