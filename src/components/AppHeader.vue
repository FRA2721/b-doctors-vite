<!-- script section -->
<script>
import { RouterLink } from 'vue-router';
import AppAboutUs from '../pages/AppAboutUs.vue';

export default {
    // name
    name: "AppHeader",
    // data
    data() {
        return {
            links: [
                
                {
                    label: "HOME",
                    routeName: "home"
                },

                {
                    label: "ABOUT US",
                    routeName: "about-us"
                },

                {
                    label: "SERVICES",
                    routeName: "services"
                },

                {
                    label: "CONTACT",
                    routeName: "contact"
                 }
            ]
        };
    },
    components: { RouterLink }
}

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
                    <img src="../assets/imgs/doctor-logo_10250-530.png" alt="logo">
                </a>
                <!-- /logo -->

                <!-- hambunger menu -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <!-- /hamburger menu -->

                <!-- navbar link -->
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <div class="nav-link justify-content-end" v-for="( item, index ) in links">
                            <router-link :to="{ name: item.routeName }">{{ item.label }}</router-link>
                        </div>
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
@use '../styles/general.scss' as *;
img{
    width: 100px;
}
</style>