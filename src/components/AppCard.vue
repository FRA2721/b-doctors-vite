<script>

export default {
    name: "AppCard",
    props: {
        doctor: Object,
    },
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
        }
    }

}

</script>



<template>
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
            <router-link :to="{ path: `doctorslist/${doctor.slug}` }" class="btn btn-primary">Details</router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.col-card {
    height: 100% !important;
}

.card {
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

.our-doctors {

    color: #20254c;

    &::before {
        content: "";
        display: inline-block;
        width: 10%;
        height: 3px;
        background-color: #20254c9e;
        margin-right: 10px;
        vertical-align: middle;
    }

    &::after {
        content: "";
        display: inline-block;
        width: 10%;
        height: 3px;
        background-color: #20254c9e;
        margin-left: 10px;
        vertical-align: middle;
    }
}
</style>