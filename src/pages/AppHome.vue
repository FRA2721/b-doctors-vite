<!-- script section -->
<script>
import axios from "axios";
import { store } from "../store";
import { RouterLink } from "vue-router";
import AppJumbotron from "../components/AppJumbotron.vue";

export default {
  name: "AppHome",
  components: { AppJumbotron, RouterLink },
  data() {
    return {
      store,
      label: "Search",
      routeName: "doctorslist",
      baseUrl: "http://127.0.0.1:8000",
      doctors: [],
    };
  },

  created() {
    this.getDoctors();
  },

  methods: {
    getDoctors() {
      axios
        .get(`${this.baseUrl}/api/profiles`, {
          params: {
            ...(this.store.docSearch && {
              specialization_id: this.store.docSearch,
            }),
          },
        })
        .then((resp) => {
          this.doctors = resp.data.results.user;
          this.store.specializations = resp.data.results.specializations;
          console.log(this.doctors);
          this.loading = false;
          if (this.store.docSearch) {
            this.$router.push({ name: "doctorslist" });
          }
        });
    },
  },
};
</script>
<!-- /script section -->

<!-- template section -->
<template>
  <!-- jumbotron section -->
  <div>
    <AppJumbotron />
  </div>
  <main>
    <div class="container pt-3">
      <div class="searchbar col-4 m-auto mt-3">
        <select class="form-select" @change="getDoctors" v-model="store.docSearch" placeholder="test">
          <option value="">choose a specialization</option>
          <option v-for="spec in store.specializations" :value="spec.id" :key="spec.id">
            {{ spec.title }}
          </option>
        </select>
      </div>

      <div class="container mt-5 bg-light pt-5">
        <div class="evidenza">
          <h2 class="text-center">Our Doctors</h2>
          <div class="row row-cols-1 row-cols-md-3 px-5 g-5 pt-5">
            <div v-for="doctor in this.doctors" class="col mb-5" :key="doctor.id">
              <div class="card">
                <div v-if="doctor.user_detail.photo" class="card_img">
                        <img :src="`${baseUrl}/storage/${doctor.user_detail.photo}`" alt="">
                    </div>
                    <div v-else class="card_img">
                        <img src="../assets/imgs/4025200.png" alt="">
                    </div>
                <div class="card-body">
                  <h5 class="card-title">
                    {{ doctor.name }} {{ doctor.surname }}
                  </h5>
                  <p class="card-text">
                    <span class="fw-bold" v-for="specialization in doctor.specializations" :key="specialization.id">
                      #{{ specialization.title }}
                    </span>
                  </p>
                  <p>{{ doctor.email }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<!-- /template section -->


<style lang="scss" scoped>
.card {
  min-width: 300px;
  height: 100% !important;

  .card_img {
    width: 100%;
    height: 20rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
}

.evidenza {
  min-height: 200px;
}
</style>

