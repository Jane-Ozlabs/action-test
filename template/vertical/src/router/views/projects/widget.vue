<script>
export default {
  data() {
    return {
      statData: [
        {
          icon: "dripicons-archive",
          title: "24",
          value: "Total Projects"
        },
        {
          icon: "dripicons-trophy",
          title: "18",
          value: "Completed Projects"
        },
        {
          icon: "dripicons-hourglass",
          title: "06",
          value: "Pending Projects"
        }
      ]
    };
  }
};
</script>

<template>
  <div class="row">
    <div class="col-xl-3 col-md-6" v-for="stat of statData" :key="stat.title">
      <div class="card bg-pattern">
        <div class="card-body">
          <div class="float-right">
            <i :class="`${stat.icon} text-primary h4 ml-3`"></i>
          </div>
          <h5 class="font-size-20 mt-0 pt-1">{{stat.title}}</h5>
          <p class="text-muted mb-0">{{stat.value}}</p>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card">
        <div class="card-body">
          <form>
            <div class="form-group mb-0">
              <label>Search</label>
              <div class="input-group mb-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                  aria-describedby="project-search-addon"
                />
                <div class="input-group-append">
                  <button class="btn btn-danger" type="button" id="project-search-addon">
                    <i class="mdi mdi-magnify search-icon font-12"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>