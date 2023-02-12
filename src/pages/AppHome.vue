<!-- script section -->
<script>
import { store } from '../store';
import { RouterLink } from 'vue-router';
import AppJumbotron from '../components/AppJumbotron.vue';

export default {

    name: 'AppHome',
    components: { AppJumbotron, RouterLink },
    data() {
        return {
            store,
            label: "Search",
            routeName: "doctorslist"


        }
    },

}
</script>
<!-- /script section -->

<!-- template section -->
<template>
    <!-- jumbotron section -->
    <div>
        <AppJumbotron />
    </div>
    <main>

        <div class="bg-success">
            <div class="container evidenza">
                medici in evidenza
            </div>
        </div>
        <div class="container pt-3">
            <div class="searchbar">
                <input type="text" placeholder="Find a Doctor" v-model="this.store.searchKey">
                <router-link :to="{ name: this.routeName }">{{ this.label }}</router-link>
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

.evidenza {
    min-height: 200px;
}
</style>
<!-- /style section -->