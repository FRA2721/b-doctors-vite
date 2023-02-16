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
      loading: false
    };
  },

  created() {
    this.getDoctors();
  },

  methods: {
    getDoctors() {
      this.loading = true;
      axios.get(`${this.baseUrl}/api/profiles`, {
        params: {
          ...(this.store.docSearch && {
            specialization_id: this.store.docSearch,
          }),
        },
      }).then((resp) => {
        this.doctors = resp.data.results.user;
        this.store.specializations = resp.data.results.specializations;
        console.log(this.doctors);
        this.loading = false;
        if (this.store.docSearch) {
          this.$router.push({ name: "doctorslist" });
        }
        this.loading = false
      });
    },
  },
};
</script>
<!-- /script section -->

<!-- template section -->
<!-- jumbotron section -->
<template>
  <div>
    <AppJumbotron />
  </div>
  <main>
    <div class="container pt-3">
      <div class="searchbar col-4 m-auto mt-3">
        <select class="form-select" @change="getDoctors" v-model="store.docSearch" placeholder="test">
          <option value="">Choose a specialization</option>
          <option v-for="spec in store.specializations" :value="spec.id" :key="spec.id">
            {{ spec.title }}
          </option>
        </select>
      </div>

      <div class="container mt-5 bg-light pt-5">
        <div class="evidenza">
          <h2 class="text-center our-doctors">Our Doctors</h2>
          <div class="row pt-5 g-5">
            <div v-if="loading"> loading</div>
            <div v-else v-for="doctor in this.doctors" class="col-12 col-md-6 col-lg-4 mb-5 col-card" :key="doctor.id">
              <div class="card bg-body-tertiary rounded">
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
                  <div class="d-flex justify-content-end">
                    <router-link :to="{ path: `doctorslist/${doctor.slug}`, params: { doctor: doctor } }"
                      class="btn btn-send">Details</router-link>
                  </div>
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
.col-card {
  height: 100% !important;
}

.our-doctors {

  color: #20254c;

  &::before {
    content: "";
    display: inline-block;
    width: 10%;
    height: 3px;
    background-color: #20254c9e;
    margin-right: 10px;
    vertical-align: middle;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 10%;
    height: 3px;
    background-color: #20254c9e;
    margin-left: 10px;
    vertical-align: middle;
  }
}

.card {
  height: 100% !important;
  transition: 0.20s;


  &:hover {
    transform: scale(1.05);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  }
}

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

.card-body {
  .card-body-title {
    text-decoration: underline;
  }
}


.evidenza {
  min-height: 200px;
}
</style>

