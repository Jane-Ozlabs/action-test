<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import Toolbar from "./toolbar";

/**
 * Email Compose component
 */
export default {
  page: {
    title: "Email Compose",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, Toolbar, ckeditor: CKEditor.component },
  data() {
    return {
      title: "Email Compose",
      items: [
        {
          text: "Email",
          href: "/"
        },
        {
          text: "Email Compose",
          active: true
        }
      ],
      editor: ClassicEditor,
      editorData: "<h6>Content</h6>"
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <!-- Right Sidebar -->
      <div class="col-12">
        <div class="email-leftbar card">
          <router-link tag="a" to="/email/inbox" class="btn btn-danger">Inbox</router-link>
          <div class="mail-list mt-4">
            <a href="javascript: void(0);" class="active">
              <i class="mdi mdi-email-outline mr-2"></i> Inbox
              <span class="ml-1 float-right">(18)</span>
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-star-outline mr-2"></i>Starred
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-diamond-stone mr-2"></i>Important
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-file-outline mr-2"></i>Draft
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-email-check-outline mr-2"></i>Sent Mail
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-trash-can-outline mr-2"></i>Trash
            </a>
          </div>

          <h6 class="mt-4">Labels</h6>

          <div class="mail-list mt-1">
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-info float-right"></span>Theme Support
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-warning float-right"></span>Freelance
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-primary float-right"></span>Social
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>Friends
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-success float-right"></span>Family
            </a>
          </div>

          <h6 class="mt-4">Chat</h6>

          <div class="mt-2">
            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/avatar-2.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">Scott Median</p>
                <p class="text-muted">Hello</p>
              </div>
            </a>

            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/avatar-3.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">Julian Rosa</p>
                <p class="text-muted">What about our next..</p>
              </div>
            </a>

            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/avatar-4.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">David Medina</p>
                <p class="text-muted">Yeah everything is fine</p>
              </div>
            </a>

            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/avatar-6.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">Jay Baker</p>
                <p class="text-muted">Wow that's great</p>
              </div>
            </a>
          </div>
        </div>
        <div class="email-rightbar mb-3">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="To" />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Subject" />
                </div>
                <div class="form-group">
                  <ckeditor v-model="editorData" :editor="editor"></ckeditor>
                </div>
                <div class="btn-toolbar form-group mb-0">
                  <div class>
                    <button type="button" class="btn btn-success mr-1">
                      <i class="far fa-save"></i>
                    </button>
                    <button type="button" class="btn btn-success mr-1">
                      <i class="far fa-trash-alt"></i>
                    </button>
                    <button class="btn btn-primary">
                      <span>Send</span>
                      <i class="fab fa-telegram-plane ml-1"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>