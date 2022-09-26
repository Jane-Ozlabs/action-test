
<script>
import { projectData } from "./data";

export default {
  data() {
    return {
      projectData: projectData
    };
  }
};
</script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive project-list">
            <table class="table project-table table-centered table-nowrap">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Projects</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Team</th>
                  <th scope="col">Progress</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="project of projectData" :key="project.id">
                  <th scope="row">{{project.id}}</th>
                  <td>{{project.name}}</td>
                  <td>{{project.startdate}}</td>
                  <td>
                    <span
                      class="font-12"
                      :class="{
                        'text-success': `${project.status}` === 'Completed',
                        'text-primary': `${project.status}` === 'Pending'
                    }"
                    >
                      <i class="mdi mdi-checkbox-blank-circle mr-1"></i>
                      {{project.status}}
                    </span>
                  </td>
                  <td>
                    <div class="team">
                      <a
                        href="javascript: void(0);"
                        class="team-member"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Roger Drake"
                      >
                        <img :src="`${project.team}`" class="rounded-circle avatar-xs" alt />
                      </a>
                    </div>
                  </td>
                  <td>
                    <p class="mb-0">
                      Progress
                      <span class="float-right">{{project.progressvalue}}%</span>
                    </p>

                    <b-progress
                      class="mt-2"
                      height="5px"
                      :value="project.progressvalue"
                      :variant="project.color"
                    />
                  </td>

                  <td>
                    <div class="action">
                      <a
                        href="javascript: void(0);"
                        class="text-success mr-4"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit"
                        v-b-tooltip.hover
                      >
                        <i class="dripicons-pencil h5 m-0"></i>
                      </a>
                      <a
                        href="javascript: void(0);"
                        class="text-danger"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Close"
                        v-b-tooltip.hover
                      >
                        <i class="dripicons-cross h5 m-0"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- end project-list -->

          <div class="pt-3">
            <ul class="pagination justify-content-end mb-0">
              <li class="page-item disabled">
                <a
                  class="page-link"
                  href="javascript: void(0);"
                  tabindex="-1"
                  aria-disabled="true"
                >Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">1</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="javascript: void(0);">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>