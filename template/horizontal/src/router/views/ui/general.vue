<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * General-ui component
 */
export default {
  page: {
    title: "General UI",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "General UI",
      items: [
        {
          text: "UI Elements",
          href: "/"
        },
        {
          text: "General UI",
          active: true
        }
      ],
      defaultvalue: 3,
      currentpage: 3
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
            <div class="row">
              <div class="col-lg-6">
                <div>
                  <h4 class="card-title">Badges</h4>
                  <p
                    class="card-title-desc"
                  >Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                  <div class="mb-5">
                    <b-badge variant="primary">Primary</b-badge>
                    <b-badge variant="success" class="ml-1">Success</b-badge>
                    <b-badge variant="info" class="ml-1">Info</b-badge>
                    <b-badge variant="warning" class="ml-1">Warning</b-badge>
                    <b-badge variant="danger" class="ml-1">Danger</b-badge>
                    <b-badge variant="dark" class="ml-1">Dark</b-badge>
                  </div>
                </div>
                <h5 class="font-14">Badges lighten</h5>
                <p class="text-muted mb-4">
                  Use the
                  <code>badge-soft-*</code> class for badge lighten.
                </p>
                <div>
                  <b-badge class="badge-soft-primary">Primary</b-badge>
                  <b-badge class="badge-soft-success ml-1">Success</b-badge>
                  <b-badge class="badge-soft-info ml-1">Info</b-badge>
                  <b-badge class="badge-soft-warning ml-1">Warning</b-badge>
                  <b-badge class="badge-soft-danger ml-1">Danger</b-badge>
                  <b-badge class="badge-soft-dark ml-1">Dark</b-badge>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mt-4 mt-lg-0">
                  <h4 class="card-title">Pill badges</h4>
                  <p class="card-title-desc">
                    Use the
                    <code>.badge-pill</code> modifier class to make
                    badges more rounded (with a larger
                    <code>border-radius</code>
                    and additional horizontal
                    <code>padding</code>).
                    Useful if you miss the badges from v3.
                  </p>

                  <div>
                    <b-badge pill variant="primary">Primary</b-badge>
                    <b-badge pill variant="success" class="ml-1">Success</b-badge>
                    <b-badge pill variant="info" class="ml-1">Info</b-badge>
                    <b-badge pill variant="warning" class="ml-1">Warning</b-badge>
                    <b-badge pill variant="danger" class="ml-1">Danger</b-badge>
                    <b-badge pill variant="dark" class="ml-1">Dark</b-badge>
                  </div>
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Dropdowns</h4>
            <p
              class="card-title-desc mb-3"
            >The best part is you can do this with any button variant, too:</p>

            <div class>
              <div class="btn-group mr-1 mt-2">
                <b-dropdown variant="primary">
                  <template v-slot:button-content>
                    Primary
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group mr-1 mt-2">
                <b-dropdown variant="success">
                  <template v-slot:button-content>
                    Success
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group mr-1 mt-2">
                <b-dropdown variant="info">
                  <template v-slot:button-content>
                    Info
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group mr-1 mt-2">
                <b-dropdown variant="warning">
                  <template v-slot:button-content>
                    Warning
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group mr-1 mt-2">
                <b-dropdown variant="danger">
                  <template v-slot:button-content>
                    Danger
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>
              <!-- /btn-group -->
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Dropdown Directions</h4>
            <p class="card-title-desc mb-3">
              Trigger dropdown menus at the right of the elements by adding
              <code>dropleft</code> and
              <code>dropright</code> to the parent element.
            </p>
            <div class="dropdown mt-1">
              <b-dropdown dropup variant="primary">
                <template slot="button-content">
                  Dropup
                  <i class="mdi mdi-chevron-up"></i>
                </template>
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here</b-dropdown-item-button>
              </b-dropdown>
              <b-dropdown dropright variant="success" class="m-2">
                <template slot="button-content">
                  Dropright
                  <i class="mdi mdi-chevron-right"></i>
                </template>
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here</b-dropdown-item-button>
              </b-dropdown>
              <b-dropdown dropleft variant="warning" class="m-2">
                <template slot="button-content">
                  <i class="mdi mdi-chevron-left"></i>
                  Dropleft
                </template>
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here</b-dropdown-item-button>
              </b-dropdown>

              <b-dropdown dropdown variant="danger" class="m-2">
                <template slot="button-content">
                  Dropdown
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here</b-dropdown-item-button>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sizing</h4>
            <p class="card-title-desc mb-3">
              Button dropdowns work with buttons of
              all sizes, including default and split dropdown buttons.
            </p>

            <div>
              <!-- Large button groups (default and split) -->
              <div class="mr-1 mt-2">
                <b-dropdown size="lg" class="m-2">
                  <template v-slot:button-content>
                    Large button
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                </b-dropdown>
                <b-dropdown size="sm" class="m-2">
                  <template v-slot:button-content>
                    Small button
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Menu alignment</h4>
            <p class="text-muted">
              Add
              <code>.dropdown-menu-right</code>
              to a
              <code>.dropdown-menu</code> to right
              align the dropdown menu.
            </p>

            <div class="row">
              <div class="col">
                <b-dropdown right>
                  <template v-slot:button-content>
                    Menu is right-aligned
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item>Action</b-dropdown-item>
                  <b-dropdown-item>Another Action</b-dropdown-item>
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
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Popovers</h4>
            <p
              class="card-title-desc"
            >Add small overlay content, like those found in iOS, to any element for housing secondary information.</p>

            <div class="button-items">
              <b-button
                v-b-popover.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                variant="secondary"
              >Popover on top</b-button>

              <b-button
                v-b-popover.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                variant="secondary"
              >Popover on bottom</b-button>
              <b-button
                v-b-popover.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                variant="secondary"
              >Popover on right</b-button>
              <b-button
                v-b-popover.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                variant="secondary"
              >Popover on left</b-button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Tooltips</h4>
            <p class="card-title-desc">Hover over the links below to see tooltips:</p>

            <div class="button-items">
              <b-button id="tooltip-top" variant="primary">Tooltip on top</b-button>
              <b-tooltip target="tooltip-top">Tooltip on top</b-tooltip>
              <b-button id="tooltip-button" variant="primary">Tooltip on bottom</b-button>
              <b-tooltip target="tooltip-button" placement="bottom">Tooltip on bottom</b-tooltip>
              <b-button id="tooltip-left-button" variant="primary">Tooltip on left</b-button>
              <b-tooltip target="tooltip-left-button">Tooltip on left</b-tooltip>
              <b-button id="tooltip-right-button" variant="primary">Tooltip on right</b-button>
              <b-tooltip target="tooltip-right-button" placement="bottom">Tooltip on right</b-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Pagination</h4>

            <div class="row">
              <div class="col-lg-6">
                <h5 class="font-size-14">Default Example</h5>
                <p
                  class="card-title-desc"
                >Pagination links indicate a series of related content exists across multiple pages.</p>
                <b-pagination
                  v-model="defaultvalue"
                  :total-rows="50"
                  :per-page="10"
                  aria-controls="my-table"
                ></b-pagination>
              </div>

              <div class="col-lg-6">
                <div class="mt-4">
                  <h5 class="card-title">Alignment</h5>
                  <p class="card-title-desc">
                    Change the alignment of pagination
                    components with flexbox utilities.
                  </p>

                  <b-pagination
                    :total-rows="50"
                    prev-text="Previous"
                    next-text="Next"
                    align="center"
                  ></b-pagination>

                  <b-pagination
                    :total-rows="50"
                    prev-text="Previous"
                    next-text="Next"
                    align="right"
                  ></b-pagination>
                </div>
              </div>
            </div>
            <!-- end row -->

            <div class="row">
              <div class="col-lg-6">
                <div class="mt-4">
                  <h5 class="font-size-14">Sizing</h5>
                  <p class="card-title-desc">
                    Fancy larger or smaller pagination? Add
                    <code>.pagination-lg</code> or
                    <code>.pagination-sm</code> for additional
                    sizes.
                  </p>
                  <b-pagination size="lg" :total-rows="30" :per-page="10" aria-controls="my-table"></b-pagination>

                  <b-pagination size="sm" :total-rows="30" :per-page="10" aria-controls="my-table"></b-pagination>
                </div>
              </div>
            </div>
            <!-- end row -->
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
            <h4 class="card-title">Breadcrumb</h4>
            <p
              class="text-muted"
            >Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</p>

            <div class="row">
              <div class="col-md-6">
                <div>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-transparent">
                      <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                  </nav>

                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-transparent">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Home</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                  </nav>

                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-transparent">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Home</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Library</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div class="col-md-6">
                <div>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-transparent">
                      <li class="breadcrumb-item active" aria-current="page">
                        <i class="mdi mdi-home-outline"></i>
                      </li>
                    </ol>
                  </nav>

                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-transparent">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">
                          <i class="mdi mdi-home-outline"></i>
                        </a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                  </nav>

                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-transparent">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">
                          <i class="mdi mdi-home-outline"></i>
                        </a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Library</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Border spinner</h4>
            <p class="card-title-desc">Use the border spinners for a lightweight loading indicator.</p>
            <div>
              <b-spinner class="m-2" variant="primary" role="status"></b-spinner>
              <b-spinner class="m-2" variant="secondary" role="status"></b-spinner>
              <b-spinner class="m-2" variant="success" role="status"></b-spinner>
              <b-spinner class="m-2" variant="info" role="status"></b-spinner>
              <b-spinner class="m-2" variant="warning" role="status"></b-spinner>
              <b-spinner class="m-2" variant="danger" role="status"></b-spinner>
              <b-spinner class="m-2" variant="dark" role="status"></b-spinner>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Growing spinner</h4>
            <p
              class="card-title-desc"
            >If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>
            <div>
              <b-spinner type="grow" class="m-2" variant="primary" role="status"></b-spinner>
              <b-spinner type="grow" class="m-2" variant="secondary" role="status"></b-spinner>
              <b-spinner type="grow" class="m-2" variant="success" role="status"></b-spinner>
              <b-spinner type="grow" class="m-2" variant="info" role="status"></b-spinner>
              <b-spinner type="grow" class="m-2" variant="warning" role="status"></b-spinner>
              <b-spinner type="grow" class="m-2" variant="danger" role="status"></b-spinner>
              <b-spinner type="grow" class="m-2" variant="dark" role="status"></b-spinner>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>