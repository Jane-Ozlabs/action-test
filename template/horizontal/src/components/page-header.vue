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

<template>
  <div class="page-title-box">
    <div class="container-fluid">
      <div class="page-title-content">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <h4 class="font-size-18">{{title}}</h4>
            <b-breadcrumb class="m-0">
              <b-breadcrumb-item>
                <i class="mdi mdi-home-outline"></i>
              </b-breadcrumb-item>
              <b-breadcrumb-item v-for="item of items" :key="item.path">{{item.text}}</b-breadcrumb-item>
            </b-breadcrumb>
          </div>

          <div class="col-sm-6">
            <div class="float-right d-none d-md-block">
              <b-dropdown right variant="danger">
                <template v-slot:button-content>
                  <i class="mdi mdi-settings mr-2"></i> Settings
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
