<!-- script section -->
<script>
import { store } from "../store";
import axios from 'axios';
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
    created() {
        this.getDoctors();
    },
    methods: {
        getDoctors() {
            axios.get(`${this.baseUrl}/api/profiles`, {
                params: {
                    ...this.store.docSearch && { specialization_id: this.store.docSearch },
                    ...this.store.voto && { vote: this.store.voto }
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

        <div class="searchbar mt-3 col-4">

            <select class="form-select mb-2" @change="getDoctors()" v-model="store.docSearch" placeholder="test">
                <option value="">choose a specialization</option>
                <option v-for=" spec in store.specializations" :value="spec.id"> {{ spec.title }}</option>
            </select>


            <label for="voto">Media voti</label>
            <select class="ms-1" name="voto" id="voto" v-model="this.store.voto" @change="getDoctors()">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input class="ms-2" type="number" placeholder="Number of feedback" v-model="this.store.feedbackNumber">
        </div>

        <h2 class="text-center my-5">Doctors</h2>

        <div class="row justify-content-center">

            <div class="border d-flex align-items-center p-2 rounded col-8" v-for="(doctor) in this.doctors" :key="doctor.id">
                <div v-if="doctor.user_detail.photo" class="card_img">
                    <img  :src="`${baseUrl}/storage/${doctor.user_detail.photo}`" alt="">
                </div>
                <div v-else class="card_img">
                    <img  src="../assets/imgs/4025200.png" alt="">
                </div>
                <div class="card_body">
                    <h2>
                        <span class="me-1">{{ doctor.name }} </span>
                        <span>{{ doctor.surname }}</span>
                    </h2>
                    <p>{{ doctor.email }}</p>

                    <span class="me-2" v-for="spec in doctor.specializations">{{ spec.title }}</span>

                    <p>{{ doctor.user_detail.phone }}</p>

                    <p>Average vote: {{ doctor.feedback_avg_vote / 1 }}</p>

                    <p>{{ doctor.user_detail.performance }}</p>
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
.card_img {
    width: 35%;
    height: 200px;
    overflow-y: hidden;
    padding: 1rem;

    img {
        object-fit: contain;
        width: 100%;

    }
}

.card_body {
    width: 65%;
    padding: 1rem;
}
</style>