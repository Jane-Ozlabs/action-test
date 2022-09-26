<script>
import Multiselect from "vue-multiselect";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Product Edit component
 */
export default {
  page: {
    title: "Product Edit",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, Multiselect },
  data() {
    return {
      title: "Product Edit",
      items: [
        {
          text: "Ecommerce",
          href: "/"
        },
        {
          text: "Product Edit",
          active: true
        }
      ],
      value: null,
      options: [
        "Alaska",
        "Hawaii",
        "California",
        "Nevada",
        "Oregon",
        "Washington"
      ]
    };
  }
};
</script>
<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic Information</h4>
            <p class="card-title-desc">Fill all information below</p>

            <form>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="productname">Product Name</label>
                    <input id="productname" name="productname" type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="manufacturername">Manufacturer Name</label>
                    <input
                      id="manufacturername"
                      name="manufacturername"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="productdesc">Product Description</label>
                    <textarea class="form-control" id="productdesc" rows="5"></textarea>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="manufacturerbrand">Manufacturer Brand</label>
                    <input
                      id="manufacturerbrand"
                      name="manufacturerbrand"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="price">Price</label>
                    <input id="price" name="price" type="text" class="form-control" />
                  </div>

                  <div class="form-group">
                    <label class="control-label">Category</label>
                    <select class="form-control select2">
                      <option>Select</option>
                      <option value="AK">Alaska</option>
                      <option value="HI">Hawaii</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Features</label>
                    <multiselect v-model="value" :options="options" :multiple="true"></multiselect>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Product Image</label>
                    <br />
                    <img
                      src="@/assets/images/products/1.jpg"
                      alt="product img"
                      class="img-fluid rounded"
                      style="max-width: 200px;"
                    />
                    <br />
                    <button type="button" class="btn btn-info mt-2">Change Image</button>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-success mr-1">Save Changes</button>
              <button type="submit" class="btn btn-secondary">Cancel</button>
            </form>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Meta Data</h4>
            <p class="card-title-desc">Fill all information below</p>

            <form>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="metatitle">Meta title</label>
                    <input id="metatitle" name="productname" type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="metakeywords">Meta Keywords</label>
                    <input
                      id="metakeywords"
                      name="manufacturername"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="metadescription">Meta Description</label>
                    <textarea class="form-control" id="metadescription" rows="5"></textarea>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-success mr-1">Save Changes</button>
              <button type="submit" class="btn btn-secondary">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>