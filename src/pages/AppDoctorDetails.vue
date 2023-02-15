<!-- script section -->
<script>
import { store } from "../store";
import axios from 'axios';
export default {

    name: "AppDoctorDetails",
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
        }
    },
    created() {
        // this.getDoctors();
    },
    methods: {
        // getDoctors() {
        //     axios.get(`${this.baseUrl}/api/profiles`, {
        //         params: {
        //             ...this.store.docSearch && { specialization_id: this.store.docSearch },
        //             ...this.store.voto && { vote: this.store.voto },
        //             ...this.store.feedback_num && { feedback_num: this.store.feedback_num }
        //         }
        //     }).then(resp => {
        //         this.doctors = resp.data.results.user;
        //         this.store.specializations = resp.data.results.specializations;
        //         console.log(this.doctors);
        //         this.loading = false;
        //     })
        // },
    },
}

</script>


<!-- template section -->
<template>

    <h1>Details of: </h1>


</template>

<!-- style section -->
<style lang="scss">

</style>