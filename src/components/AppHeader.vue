<!-- script section -->
<script>
import { RouterLink } from 'vue-router';
import AppJumbotron from './AppJumbotron.vue';

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
    components: { RouterLink, AppJumbotron }
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
                        <img src="../assets/imgs/stethoscope.png" alt="logo">
                    </a>
                    <span>B Doctors</span>
                    <!-- /logo -->

                    <!-- hambunger menu -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <!-- /hamburger menu -->

                    <!-- navbar link -->
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav links">
                            <a class="nav-link justify-content-end" v-for="( item, index ) in links">
                                <router-link :to="{ name: item.routeName }">{{ item.label }}</router-link>
                            </a>
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

header {
    background-color: rgb(195, 222, 231);
}

// img general formatting section
img {
    width: 50px;
}

// links general formatting section
.links {

    a {
        color: white;

        &:after {
            display: block;
            content: '';
            border-bottom: solid 3px white;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
        }

        &:hover:after {
            transform: scaleX(1);
        }

        &.fromRight:after {
            transform-origin: 100% 50%;
        }

        &.fromLeft:after {
            transform-origin: 0% 50%;
        }

        &:hover {
            transition-duration: .5s;
            color: rgb(65, 200, 215);
        }

        &:active {
            color: lightgrey;
        }
    }
}
</style>