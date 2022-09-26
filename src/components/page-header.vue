<template>
  <!-- start page title -->
  <div class="row align-items-center">
    <div class="col-sm-6">
      <div class="page-title-box p-0">
        <h4 v-if="true" class="font-size-18">{{ title }}</h4>
        <b-breadcrumb class="m-0" v-if="false">
          <b-breadcrumb-item>
            <i class="mdi mdi-home-outline"></i>
          </b-breadcrumb-item>
          <b-breadcrumb-item v-for="item of items" :key="item.path" :href="item.href">{{item.text}}</b-breadcrumb-item>
        </b-breadcrumb>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="float-right d-none d-md-block">
      </div>
    </div>
  </div>
  <!-- end page title -->
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>
