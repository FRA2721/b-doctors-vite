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
      sponsoredUsers: []
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
          this.sponsoredUsers = resp.data.results.sponsoredUsers;
          console.log(this.sponsoredUsers);
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


      <div class="container mt-5 bg-light pt-5">
        <div class="evidenza">
          <h2 class="text-center our-doctors mb-3">Our TOP Doctors</h2>

          <div id="carouselExampleCaptions" class="carousel slide">

            <div class="carousel-inner mb-5">
              <div class="carousel-item active" v-for="sponsoredUser in sponsoredUsers">
                <img v-if="sponsoredUser.user_detail.photo" :src="`${baseUrl}/storage/${sponsoredUser.user_detail.photo}`"
                  class="d-block w-100" alt="...">
                <img v-else src="../assets/imgs/4025200.png" alt="">
                <div class="carousel-caption d-block">
                  <h5>{{ sponsoredUser.name }}</h5>
                  <p v-for="spec in sponsoredUser.specializations">{{ spec.title }}</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </div>


      <div class="row">
        <div class="searchbar m-auto mt-3 col-12 col-md-8 col-lg-6">
          <select class="form-select" @change="getDoctors" v-model="docSearch" placeholder="test">
            <option value="">Choose a specialization</option>
            <option v-for="spec in store.specializations" :value="spec.slug" :key="spec.id">
              {{ spec.title }}
            </option>
          </select>
        </div>
      </div>

      <div class="container my-5 bg-light py-5 px-5">
        <div class="evidenza">
          <h2 class="text-center our-doctors">Our Doctors</h2>
          <div class="row pt-5 g-5">
            <div v-if="loading">Wait a minute</div>
            <div v-else v-for="doctor in this.doctors" class="col-12 col-md-6 col-lg-4 mb-5" :key="doctor.id">
              <AppCard :doctor="doctor" />
            </div>
          </div>
        </div>
      </div>


      <!-- CAROUSEL -->



    </div>


  </main>
</template>
<!-- /template section -->

<style lang="scss" scoped>
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

.carousel-item {
  img {
    height: 40rem;
    object-fit: cover;
    object-position: top;
  }
}

.carousel-caption {
  color: black;
  background-color: #d5eaf2c9;
  border-radius: 10px;
}
</style>
