<!-- script section -->
<script>
import { store } from "../store";
import axios from 'axios';
export default {

    name: "AppDoctorDetails",
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            doctor: []
        }
    },
    created() {
      this.getDoctors();

    },
    methods: {
        getDoctors() {
            axios.get(`${this.baseUrl}/api/profiles/${this.$route.params.slug}`).then(resp => {
                this.doctor = resp.data.user

                console.log(this.doctor);
                this.loading = false;
            })
        },
    },
}

</script>


<!-- template section -->
<template>

    <h1>Details of:  {{doctor.name}}</h1>


</template>

<!-- style section -->
<style lang="scss">

</style>