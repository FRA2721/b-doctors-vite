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
            doctors: [],
        };
    },

    created() {
        this.getDoctors();
    },

    methods: {
        getDoctors() {
            axios.get(`${this.baseUrl}/api/profiles`, {
                params: {
                    ...this.store.docSearch && { specialization_id: this.store.docSearch }
                }
            }).then(resp => {
                this.doctors = resp.data.results.user;
                this.store.specializations = resp.data.results.specializations;
                console.log(this.doctors);
                this.loading = false;
                if(this.store.docSearch){
                    this.$router.push({name: 'doctorslist'})
                }
            })
        }
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
                <select @change="getDoctors" v-model="store.docSearch" placeholder="test">
                    <option value="">choose a specialization</option>
                    <option v-for=" spec in store.specializations" :value="spec.id"> {{ spec.title }}</option>
                </select>
            </div>

            <div class="container mt-5 bg-light pt-5">
                <div class=" evidenza">
                    <h2 class="text-center">Our Doctors</h2>
                    <div class="row row-cols-1 row-cols-md-3 pt-5">
                        <div v-for="doctor in this.doctors" class="col mb-5">
                            <div class="card">
                                <img src="../assets/imgs/doc-7.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{{ doctor.name }} {{ doctor.surname }}</h5>
                                    <p class="card-text">
                                    <h6 v-for="specialization in doctor.specializations">
                                        {{ specialization.title }}
                                    </h6>
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

<!-- style section -->
<style lang="scss" scoped>
// .jumbotron {
//     min-height: 500px;
// }

img {
    max-width: 100%;
}

// .card-img-top {
//     width: 600px;
// }

.evidenza {
    min-height: 200px;
}
</style>
<!-- /style section -->
