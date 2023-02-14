<!-- script section -->
<script>
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
    };
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
              <div class="card" style="width: 20rem">
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
            <div class="col mb-5">
              <div class="card h-100 d-inline-block" style="width: 20rem">
                <img src="../assets/imgs/doc-8.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Pediatrician</h5>
                  <p class="card-text">
                  <h6>Our best peditricians..</h6>
                  </p>
                  <p>Mission: Encompass the needs of the whole child in his or her physiologic, mental, emotional, and
                    social structure.
                    Pediatrics is an official peer-reviewed journal of the American Academy of Pediatrics (AAP). It has
                    been continuously published by the AAP since January 1948. Pediatrics publishes original research,
                    clinical observations.</p>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100 d-inline-block" style="width: 20rem">
                <img src="../assets/imgs/doc-9.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Dermatologist</h5>
                  <h6 class="card-text">
                    Our best Dermatologists..
                  </h6>
                  <p>The modern digital advertising ecosystem functions on cookies and other data. Cookies and similar
                    tracking technologies allow us to improve your browsing experience, store or access relevant
                    information, customize content and offers, personalize advertising, analyze our traffic, and better
                    understand you. In order to access all of our content and website features. </p>
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
