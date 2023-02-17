<!-- script section -->
<script>
import axios from 'axios';
import { store } from '../store';
export default {
    // name
    name: "AppServices",
    data() {
        return {
            store,
            baseUrl: "http://127.0.0.1:8000",
            loading: false
        };
    },
    methods: {
        getDoctors() {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/profiles`, {
                params: {
                    ...(this.store.docSearch && {
                        specialization_id: this.store.docSearch,
                    }),
                },
            }).then((resp) => {
                this.doctors = resp.data.results.user;
                this.store.specializations = resp.data.results.specializations;
                console.log(this.doctors);
                this.loading = false;
                if (this.store.docSearch) {
                    this.$router.push({ name: "doctorslist" });
                }
                this.loading = false
            });
        },
    },
    created() {
        this.getDoctors();
    },
}

</script>




<!-- template section -->
<template>
    <div class="container">
        <h1 class="mb-5 mt-3 our-services text-center">Our services</h1>

        <div class="row g-4 pb-4">
            <div class="container-spec col-12 col-md-4" v-for="spec in store.specializations" :key="spec.id">
                <h6 class="title-spec text-center">
                    {{ spec.title }}
                </h6>
                <div class="text-spec">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis necessitatibus vel perferendis
                        voluptatum neque quos, ipsa explicabo odio accusantium ducimus repudiandae eius nemo facere ad
                        officiis.
                        Illo pariatur maxime ipsum.
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>



<!-- style section -->
<style lang="scss">
@use '../styles/general.scss' as *;

.our-services{
  color:#20254c;

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

.title-spec{
  &::before {
    content: "";
    display: inline-block;
    width: 3%;
    height: 3px;
    background-color: #20254c9e;
    margin: 10px;
    vertical-align: middle;
  }
}
</style>