<template>
  <a href="javascript:;" class="xBtn" @click="xbtnClose"><img src="img/icon_close_s.png"></a>
</template>
<script>
export default {
  props: { modalKey: "", },
  methods: {
    xbtnClose() {
      console.log("xbtnClose")
      if(this.modalKey) hideModal({ self: this, key: this.modalKey });
      else hideRightPanel();
    }
  }
}
import {hideModal,hideRightPanel} from "@/utils";
</script>
