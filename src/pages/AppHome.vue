<!-- script section -->
<script>
import axios from "axios";
import { store } from "../store";
import { RouterLink } from "vue-router";
import AppJumbotron from "../components/AppJumbotron.vue";
import AppCard from "../components/AppCard.vue";

export default {
  name: "AppHome",
  components: { AppJumbotron, RouterLink, AppCard },
  data() {
    return {
      store,
      label: "Search",
      docSearch: "",
      routeName: "doctorslist",
      baseUrl: "http://127.0.0.1:8000",
      doctors: [],
      loading: false,
    };
  },

  created() {
    this.getDoctors();
  },

  methods: {
    getDoctors() {
      this.loading = true;
      axios
        .get(`${this.baseUrl}/api/profiles`, {
          params: {
            ...(this.docSearch && {
              specialization_id: this.docSearch,
            }),
          },
        })
        .then((resp) => {
          this.doctors = resp.data.results.user;
          this.store.specializations = resp.data.results.specializations;
          console.log(this.doctors);
          this.loading = false;
          if (this.docSearch) {
            this.$router.push({
              name: "doctorslist",
              query: { spec: this.docSearch },
            });
          }
          this.loading = false;
        });
    },
  },
};
</script>

<template>
  <div>
    <AppJumbotron />
  </div>
  <main>
    <div class="container pt-3">
      <div class="row">
        <div class="searchbar m-auto mt-3 col-12 col-md-8 col-lg-6">
          <select
            class="form-select"
            @change="getDoctors"
            v-model="docSearch"
            placeholder="test">
            <option value="">Choose a specialization</option>
            <option
              v-for="spec in store.specializations"
              :value="spec.slug"
              :key="spec.id">
              {{ spec.title }}
            </option>
          </select>
        </div>
      </div>

      <div class="container mt-5 bg-light pt-5">
        <div class="evidenza">
          <h2 class="text-center our-doctors">Our Doctors</h2>
          <div class="row pt-5 g-5">
            <div v-if="loading">Wait a minute</div>
            <div
              v-else
              v-for="doctor in this.doctors"
              class="col-12 col-md-6 col-lg-4 mb-5"
              :key="doctor.id">
              <AppCard :doctor="doctor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<!-- /template section -->

<style lang="scss" scoped>
.col-card {
  height: 100% !important;
}

.our-doctors {
  color: #20254c;

  &::before {
    content: "";
    display: inline-block;
    width: 5%;
    height: 3px;
    background-color: #20254c9e;
    margin-right: 10px;
    vertical-align: middle;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 5%;
    height: 3px;
    background-color: #20254c9e;
    margin-left: 10px;
    vertical-align: middle;
  }
}

.evidenza {
  min-height: 200px;
}
</style>
