<!-- script section -->
<script>
import { store } from "../store";
import axios from 'axios';
import AppDoctorDetails from "./AppDoctorDetails.vue";
export default {

    name: "AppDoctorList",
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            doctors: [],
            loading: true,
            store,
            counter: 0,
            total: 0,
            specializations: []
        }
    },
    components: { AppDoctorDetails },
    created() {
        this.getDoctors();
    },
    methods: {
        getDoctors() {
            axios.get(`${this.baseUrl}/api/profiles`, {
                params: {
                    ...this.store.docSearch && { specialization_id: this.store.docSearch },
                    ...this.store.voto && { vote: this.store.voto },
                    ...this.store.feedback_num && { feedback_num: this.store.feedback_num }
                }
            }).then(resp => {
                this.doctors = resp.data.results.user;
                this.store.specializations = resp.data.results.specializations;
                console.log(this.doctors);
                this.loading = false;
            })
        },
    },
}

</script>


<!-- template section -->
<template>


    <div class="container mt-2">

        <div class="searchbar mt-3 row align-items-center">
            <div class="col-12 col-lg-6">
                <select class="form-select mb-2" @change="getDoctors()" v-model="store.docSearch" placeholder="test">
                    <option value="">choose a specialization</option>
                    <option v-for=" spec in store.specializations" :value="spec.id"> {{ spec.title }}</option>
                </select>
            </div>

            <div class="col-12 col-lg-3">
                <label for="voto">Average vote</label>

                <select class="ms-1" name="voto" id="voto" v-model="this.store.voto" @change="getDoctors()">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div class="col-12 col-lg-3">

                <label for="number_of_feedback">Number of Feedback</label>
                <select class="ms-1" name="number_of_feedback" id="number_of_feedback" v-model="this.store.feedback_num"
                    @change="getDoctors()">
                    <option value="0">0</option>
                    <option value="5">>5</option>
                    <option value="10">>10</option>
                    <option value="15">>15</option>
                    <option value="20">>20</option>
                    <option value="25">>25</option>
                </select>
            </div>
        </div>

        <h2 class="text-center my-5">Doctors</h2>

        <div class="row justify-content-center g-4 pb-5">

            <div class="col-12 col-md-6 col-lg-4 col-card" v-for="(doctor) in this.doctors" :key="doctor.id">

                <div class="card">
                    <div v-if="doctor.user_detail.photo" class="card_img">
                        <img :src="`${baseUrl}/storage/${doctor.user_detail.photo}`" alt="">
                    </div>
                    <div v-else class="card_img">
                        <img src="../assets/imgs/4025200.png" alt="">
                    </div>
                    <div class="card-body">
                        <div class="name-email d-flex justify-content-between flex-column flex-sm-row flex-md-column">
                            <h5 class="card-title">{{ doctor.name }} {{ doctor.surname }}
                            </h5>
                            <span class="doctor-email">{{
                                doctor.email
                            }}</span>
                        </div>
                        <p class="">Phone number: {{ doctor.user_detail.phone }}</p>
                        <p>
                            <span class="card-body-title d-block">Specializations:</span>
                            <span class="me-1" v-for="spec in doctor.specializations">#{{ spec.title }}</span>
                        </p>

                        <p>{{ doctor.user_detail.performance }}</p>

                        <p> <span class="card-body-title">Average vote:</span> {{ doctor.feedback_avg_vote / 1 }}</p>
                        <router-link :to="{ path: `doctorslist/${doctor.slug}`, params: { doctor: doctor } }"
                            class="btn btn-primary">Details</router-link>
                    </div>
                </div>

            </div>
        </div>

        <div class="mt-5" v-if="doctors.length <= 0">
            <h2 class="text-center">No Doctors matched :( </h2>
        </div>
    </div>


</template>

<!-- style section -->
<style lang="scss">
.col-card {
    height: 100% !important;
}

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

    .card-body {
        .card-body-title {
            text-decoration: underline;
        }
    }
}
</style>