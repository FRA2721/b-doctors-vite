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
        }
    },
}

</script>




<!-- template section -->
<template>


    <div class="container">

        <div class="searchbar">
            <input type="text" placeholder="Find a Doctor" v-model="this.store.searchKey" @keyup="searchDoctor">
        </div>

        <h2 class="py-3">Doctors</h2>



        <div v-for="doctor in this.doctors">
            <div v-if="doctor.specializations[0].title.toLowerCase() == (this.store.searchKey).toLowerCase()">
                <p>{{ doctor.name }}</p>
                <p>{{ doctor.surname }}</p>
                <p>Specializations:</p>
                <p v-for="specialization in doctor.specializations">
                    {{ specialization.title }}
                </p>
                <hr>
            </div>
        </div>
    </div>


</template>



<!-- style section -->
<style lang="scss">

</style>