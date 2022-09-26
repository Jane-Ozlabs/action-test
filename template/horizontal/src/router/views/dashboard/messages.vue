<script>
export default {};
</script>


<template>
  <div class="card message">
    <div class="card-body">
      <h4 class="card-title mb-4">Latest Messages</h4>
      <b-tabs nav-class="messages-tabs tab-wid nav-justified" content-class="p-2 mt-1">
        <b-tab active>
          <template v-slot:title class="nav-link">
            <h5 class="mt-0 font-size-18 date">10</h5>
            <p class="text-muted mb-0">June</p>
          </template>
          <ul class="list-unstyled latest-message-list mb-0">
            <li class="message-list-item">
              <a href="javascript: void(0);">
                <div class="media">
                  <img
                    class="mr-3 avatar-sm rounded-circle"
                    src="@/assets/images/users/avatar-2.jpg"
                    alt
                  />
                  <div class="media-body">
                    <p class="float-right font-size-12 text-muted">Just Now</p>
                    <h6 class="mt-0">Mary Frye</h6>
                    <p class="text-muted mb-0">Hey! there I'm available...</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="message-list-item">
              <a href="javascript: void(0);">
                <div class="media">
                  <img
                    class="mr-3 avatar-sm rounded-circle"
                    src="@/assets/images/users/avatar-3.jpg"
                    alt
                  />
                  <div class="media-body">
                    <p class="float-right font-size-12 text-muted">11:42am</p>
                    <h6 class="mt-0">David Smith</h6>
                    <p class="text-muted mb-0">I've finished it! See you so...</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="message-list-item">
              <a href="javascript: void(0);">
                <div class="media">
                  <img
                    class="mr-3 avatar-sm rounded-circle"
                    src="@/assets/images/users/avatar-4.jpg"
                    alt
                  />
                  <div class="media-body">
                    <p class="float-right font-size-12 text-muted">01:56pm</p>
                    <h6 class="mt-0">Troy Long</h6>
                    <p class="text-muted mb-0">This theme is awesome!</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div class="text-center mt-2">
            <a href="javascript: void(0);" class="btn btn-primary btn-sm">Load more</a>
          </div>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <h5 class="mt-0 font-size-18 date">12</h5>
            <p class="text-muted mb-0">June</p>
          </template>
          <ul class="list-unstyled latest-message-list mb-0">
            <li class="message-list-item">
              <a href="javascript: void(0);">
                <div class="media">
                  <img
                    class="mr-3 avatar-sm rounded-circle"
                    src="@/assets/images/users/avatar-1.jpg"
                    alt
                  />
                  <div class="media-body">
                    <p class="float-right font-size-12 text-muted">09:42am</p>
                    <h6 class="mt-0">John Carle</h6>
                    <p class="text-muted mb-0">Hey! there I'm available...</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="message-list-item">
              <a href="javascript: void(0);">
                <div class="media">
                  <img
                    class="mr-3 avatar-sm rounded-circle"
                    src="@/assets/images/users/avatar-2.jpg"
                    alt
                  />
                  <div class="media-body">
                    <p class="float-right font-size-12 text-muted">11:07am</p>
                    <h6 class="mt-0">Jerry Carter</h6>
                    <p class="text-muted mb-0">I've finished it! See you so...</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="message-list-item">
              <a href="javascript: void(0);">
                <div class="media">
                  <img
                    class="mr-3 avatar-sm rounded-circle"
                    src="@/assets/images/users/avatar-3.jpg"
                    alt
                  />
                  <div class="media-body">
                    <p class="float-right font-size-12 text-muted">01:17pm</p>
                    <h6 class="mt-0">Shane Hill</h6>
                    <p class="text-muted mb-0">This theme is awesome!</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div class="text-center mt-2">
            <a href="javascript: void(0);" class="btn btn-primary btn-sm">Load more</a>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>