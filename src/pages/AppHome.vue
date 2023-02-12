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
    <div class="bg-light mt-4">
      <div class="container evidenza">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card" style="width: 22rem">
              <img
                src="../assets/imgs/doc-1.png"
                class="card-img-top"
                alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 d-inline-block" style="width: 22rem">
              <img
                src="../assets/imgs/doc-5.png"
                class="card-img-top"
                alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: 22rem">
              <img
                src="../assets/imgs/doc-3.jpg"
                class="card-img-top"
                alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 d-inline-block" style="width: 22rem">
              <img
                src="../assets/imgs/doc-6.png"
                class="card-img-top"
                alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    </div>
  </main>
</template>
<!-- /template section -->

<!-- style section -->
<style lang="scss">
// .jumbotron {
//     min-height: 500px;
// }
.card-img-top {
  width: 600px;
}

.evidenza {
  min-height: 200px;
}
</style>
<!-- /style section -->
