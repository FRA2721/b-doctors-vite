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
            store
        }
    },
    created() {
        this.getDoctors();
        console.log(this.store.searchKey);
    },
    methods: {
        getDoctors() {
            axios.get(`${this.baseUrl}/api/profiles`).then(resp => { this.doctors = resp.data.results; console.log(this.doctors); this.loading = false; })
        },
        searchDoctor() {
            searchingDoctor = this.store.searchKey.toLowerCase();
            console.log(searchingUser);
        },
    },
}

</script>




<!-- template section -->
<template>


    <div class="container">

        <div class="searchbar mt-3">
            <input class="me-2" type="text" placeholder="Find a Doctor" v-model="this.store.searchKey"
                @keyup="searchDoctor">
            <label for="voto">Media voti</label>
            <select class="ms-1" name="voto" id="voto" v-model="this.store.voto">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input class="ms-2" type="number" placeholder="Number of feedback" v-model="this.store.feedbackNumber">
        </div>

        <h2 class="py-3">Doctors</h2>



        <div v-for="doctor in this.doctors">
            <div
                v-if="doctor.specializations.some(spec => spec.title.toLowerCase() === this.store.searchKey.toLowerCase())">


                <p>{{ doctor.name }}</p>
                <p>{{ doctor.surname }}</p>
                <p> <strong>Specializations:</strong> </p>
                <p v-for="specialization in doctor.specializations">
                    {{ specialization.title }}
                </p>

                <p> <strong>Voti:</strong> </p>
                <p v-for="(feedback, i) in doctor.feedback" :key="i">
                    {{ feedback.vote }}
                </p>

                <p> <strong>Number of Feedback:</strong> </p>
                <p v-for="(feedback, i) in doctor.feedback" :key="i">
                    {{ i + 1 }}
                </p>
                <hr>
            </div>
        </div>
    </div>


</template>



<!-- style section -->
<style lang="scss">

</style>