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
      baseUrl: 'http://127.0.0.1:8000',
      doctorsList: [],
    };
  },

  create: {
    getDoctors() {
      axios.get(`${this.baseUrl}/api/profiles`).then(resp => {
        this.doctors = resp.data.results;
        console.log(this.doctors);
      })
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

      <div class="searchbar">
        <input
          type="text"
          placeholder="Find a Doctor"
          v-model="this.store.searchKey" />
        <router-link :to="{ name: this.routeName }">{{
          this.label
        }}</router-link>
      </div>

      <div class="bg-light pt-5">
        <div class="container evidenza">
          <div class="row row-cols-1 row-cols-md-3 pt-5">
            <div class="col mb-5">
              <div class="card">
                <img src="../assets/imgs/doc-7.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Dentist</h5>
                  <p class="card-text">
                  <h6>Our best dentists..</h6>
                  </p>
                  <p>At MyMediTravel, we're making medical easy. You can search, compare, discuss, and book your medical
                    all in one place. We open the door to the best medical providers worldwide, saving you time and
                    energy along the way, and it's all for FREE, no hidden fees, and no price markups guaranteed. So
                    what are you waiting for?</p>
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

<!-- style section -->
<style lang="scss" scoped>
// .jumbotron {
//     min-height: 500px;
// }

img {
  max-width: 100%;
}

.card-img-top {
  width: 600px;
}

.evidenza {
  min-height: 200px;
}
</style>
<!-- /style section -->
