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
                    ...this.store.docSearch && { specialization_id: this.store.docSearch }
                }
            }).then(resp => {
                this.doctors = resp.data.results.user;
                this.specializations = resp.data.results.specializations;
                console.log(this.doctors);
                this.loading = false;
            })
        },
        searchDoctor() {
            searchingDoctor = this.store.searchKey.toLowerCase();
            console.log(searchingUser);
        },
        calculateCounter() {
            this.counter = this.counter + 1;
        },
        resetCounter() {
            this.counter = 0;
        },
        calculateTotal(i) {
            this.total = this.total + i;
        },
        resetTotal() {
            this.total = 0;
        },
        average() {
            return this.total / this.counter;
        }
    },
}

</script>


<!-- template section -->
<template>


    <div class="container mt-2">

        <div class="searchbar mt-3">

            <select @change="getDoctors()" v-model="store.docSearch" placeholder="test">
                <option value="">choose a specialization</option>
                <option v-for=" spec in store.specializations" :value="spec.id"> {{ spec.title }}</option>
            </select>


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



        <div class="border p-2 rounded" v-for="(doctor) in this.doctors" :key="doctor.id">
            <h2>
                <span class="me-1">{{ doctor.name }} </span>
                <span>{{ doctor.surname }}</span>
            </h2>
            <p>{{ doctor.email }}</p>

            <span class="me-2" v-for="spec in doctor.specializations">{{ spec.title }}</span>

            <p>{{ doctor.user_detail.phone }}</p>

            <p>{{ doctor.user_detail.performance }}</p>
        </div>
    </div>


</template>

<!-- style section -->
<style lang="scss">

</style>