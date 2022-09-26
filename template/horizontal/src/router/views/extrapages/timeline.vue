<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Timeline component
 */
export default {
  page: {
    title: "Timeline Page",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Timeline",
      items: [
        {
          text: "Extra Pages",
          href: "/"
        },
        {
          text: "Timeline",
          active: true
        }
      ]
    };
  }
};
</script>
<template>
  <Layout :title="title" :items="items">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-5">Horizontal Timeline</h4>

            <div class="hori-timeline" dir="ltr">
              <ul class="list-inline events">
                <li class="list-inline-item event-list">
                  <div class="px-4">
                    <div class="event-date bg-soft-primary text-primary">2 June</div>
                    <h5 class="font-size-16">Event One</h5>
                    <p
                      class="text-muted"
                    >It will be as simple as occidental in fact it will be Occidental Cambridge friend</p>
                    <div>
                      <a href="javascript: void(0);" class="btn btn-primary btn-sm">Read more</a>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item event-list">
                  <div class="px-4">
                    <div class="event-date bg-soft-success text-success">5 June</div>
                    <h5 class="font-size-16">Event Two</h5>
                    <p
                      class="text-muted"
                    >Everyone realizes why a new common language one could refuse translators.</p>
                    <div>
                      <a href="javascript: void(0);" class="btn btn-primary btn-sm">Read more</a>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item event-list">
                  <div class="px-4">
                    <div class="event-date bg-soft-danger text-danger">7 June</div>
                    <h5 class="font-size-16">Event Three</h5>
                    <p
                      class="text-muted"
                    >If several languages coalesce the grammar of the resulting simple and regular</p>
                    <div>
                      <a href="javascript: void(0);" class="btn btn-primary btn-sm">Read more</a>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item event-list">
                  <div class="px-4">
                    <div class="event-date bg-soft-warning text-warning">8 June</div>
                    <h5 class="font-size-16">Event Four</h5>
                    <p
                      class="text-muted"
                    >Languages only differ in their pronunciation and their most common words.</p>
                    <div>
                      <a href="javascript: void(0);" class="btn btn-primary btn-sm">Read more</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-5">Vertical Timeline</h4>

            <div class="row justify-content-center">
              <div class="col-lg-10">
                <ul class="verti-timeline list-unstyled" dir="ltr">
                  <li class="event-list">
                    <div class="timeline-icon">
                      <i class="mdi mdi-adjust bg-success"></i>
                    </div>
                    <div class="event-content p-4">
                      <h5 class="mt-0 mb-3 font-18">Timeline Event One</h5>
                      <div class="text-muted">
                        <p
                          class="mb-2"
                        >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                        <p
                          class="mb-0"
                        >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                      </div>
                    </div>
                    <div class="event-date bg-primary">
                      <h5 class="mt-0">02</h5>
                      <p class="mb-0 text-white-50">June</p>
                    </div>
                  </li>

                  <li class="event-list">
                    <div class="timeline-icon">
                      <i class="mdi mdi-adjust bg-danger"></i>
                    </div>
                    <div class="event-content p-4">
                      <h5 class="mt-0 mb-3 font-18">Timeline Event Two</h5>
                      <div class="text-muted">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem quia voluptas sit</p>
                        <button type="button" class="btn btn-primary">See more detail</button>
                      </div>
                    </div>
                    <div class="event-date bg-primary">
                      <h5 class="mt-0">05</h5>
                      <p class="mb-0 text-white-50">June</p>
                    </div>
                  </li>

                  <li class="event-list">
                    <div class="timeline-icon">
                      <i class="mdi mdi-adjust bg-primary"></i>
                    </div>
                    <div class="event-content p-4">
                      <h5 class="mt-0 mb-3 font-18">Timeline Event Three</h5>
                      <div class="text-muted">
                        <p
                          class="mb-4"
                        >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                        <img
                          src="@/assets/images/small/img-1.jpg"
                          alt
                          class="rounded m-1"
                          style="width: 120px;"
                        />
                        <img
                          src="@/assets/images/small/img-2.jpg"
                          alt
                          class="rounded m-1"
                          style="width: 120px;"
                        />
                      </div>
                    </div>
                    <div class="event-date bg-primary">
                      <h5 class="mt-0">07</h5>
                      <p class="mb-0 text-white-50">June</p>
                    </div>
                  </li>

                  <li class="event-list">
                    <div class="timeline-icon">
                      <i class="mdi mdi-adjust bg-warning"></i>
                    </div>
                    <div class="event-content p-4">
                      <h5 class="mt-0 mb-3 font-18">Timeline Event Four</h5>
                      <div class="text-muted">
                        <p
                          class="mb-0"
                        >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam sit aspernatur aut odit aut fugit</p>
                      </div>
                    </div>
                    <div class="event-date bg-primary">
                      <h5 class="mt-0">08</h5>
                      <p class="mb-0 text-white-50">June</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>