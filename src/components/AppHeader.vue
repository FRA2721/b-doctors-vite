<!-- script section -->
<script>
import { RouterLink } from "vue-router";
import { store } from "../store";
import AppJumbotron from "./AppJumbotron.vue";

export default {
  // name
  name: "AppHeader",
  // data
  data() {
    return {
      links: [
        {
          label: "HOME",
          routeName: "home",
        },

        {
          label: "ABOUT US",
          routeName: "about-us",
        },

        {
          label: "SERVICES",
          routeName: "services",
        },

        {
          label: "CONTACT",
          routeName: "contact",
        },
      ],
      store,
    };
  },
  components: {
    RouterLink,
    AppJumbotron,
  },
  methods: {
    cleanInput() {
      this.store.docSearch = "";
    },
  },
};
</script>

<!-- template section -->
<template>
  <!-- header section -->
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <!-- logo -->
          <a href="/">
            <img class="logo" src="../assets/imgs/logo-4.png" alt="logo" />
          </a>
          <!-- <strong><span class="logo">B Doctors</span></strong> -->
          <!-- /logo -->

          <!-- hambunger menu -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- /hamburger menu -->

          <!-- navbar link -->
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup">
            <div class="navbar-nav links text-secondary">
              <router-link
                @click="cleanInput"
                :to="{ name: item.routeName }"
                class="nav-link justify-content-end"
                v-for="(item, index) in links"
                :key="index"
                >{{ item.label }}</router-link
              >
            </div>
          </div>
          <!-- /navbar links -->
          <!-- log in & register -->
        </div>
      </nav>
    </div>
  </header>
  <!-- /header section -->
</template>

<!-- style section -->
<style lang="scss">
@use "../styles/general.scss" as *;

header {
  background-image: linear-gradient(to right, #d4e4fb, #d5f0e9);
  // background-image: linear-gradient(to bottom right, #d4e4fb, #d5f0e9);
}

.logo {
  color: #1f254c;
  width: 4rem;
}

// img general formatting section
img {
  width: 50px;
}

// links general formatting section
.links {
  a {
    color: #606b87;

    &:after {
      display: block;
      content: "";
      border-bottom: solid 3px #606b87;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }

    &:hover:after {
      transform: scaleX(1);
    }

    // &.fromRight:after {
    //   transform-origin: 100% 50%;
    // }

    // &.fromLeft:after {
    //   transform-origin: 0% 50%;
    // }

    &:hover {
      transition-duration: 0.5s;
      color: #606b87;
    }

    .active {
      color: rgb(101, 24, 24);
    }
  }
}
</style>
