<!-- script section -->
<script>



import { store } from "../store";
import axios from 'axios';
export default {

    name: "AppDoctorDetails",
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            doctor: [],
            name: '',
            email: '',
            text: '',
            vote: null,
            review: '',
            reviewer: '',
            success: false,
            errors: {}
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



        sendMessage() {
            const data = {
                name: this.name,
                email: this.email,
                text: this.text,
                user_id: this.doctor.id
            };

            axios.post(`${this.baseUrl}/api/messages`, data).then(resp => {
                this.success = resp.data.success;

                this.name = "";
                this.email = "";
                this.text = "";

            })
        },

        sendFeedback() {
            const data = {
                vote: this.vote,
                reviewer_name: this.reviewer,
                review: this.review,
                user_id: this.doctor.id
            }

            axios.post(`${this.baseUrl}/api/feedback` , data).then( resp => {
                this.vote = ''
                this.reviewer = ''
                this.review = ''
            })
        }
    },
}

</script>


<!-- template section -->
<template>
    <div class="container">
        <h1>Details of: {{ doctor.name }}</h1>


        <div class="col-6 mx-auto mt-5 p-3 border rounded">
            <h2>leave a message</h2>
            <form @submit.prevent="sendMessage()">
                <div>
                    <label class="form-label" for="name">Name</label>
                    <input class="form-control" required id="name" name="name" v-model="name" type="text">
                </div>

                <div>
                    <label class="form-label" for="email">email</label>
                    <input class="form-control" required id="email" name="email" v-model="email" type="email">
                </div>

                <div>
                    <label class="form-label" for="text">message:</label>
                    <textarea required class="form-control" name="text" id="text" cols="30" v-model="text"></textarea>
                </div>

                <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary mt-3">Send!</button>
                </div>
            </form>
        </div>
        <div class="col-6 mx-auto mt-5 p-3 border rounded">
            <h2>Feedback</h2>
            <form @submit.prevent="sendFeedback()">

                <div>
                    <label class="form-label" for="reviewer_name">Name</label>
                    <input class="form-control" required id="reviewer_name" name="reviewer_name" v-model="reviewer" type="text">
                </div>

                <div>
                    <label for="vote">vote:</label>
                    <select required class="form-select" v-model="vote" name="vote" id="vote">
                        <option value="0">0 - very bad</option>
                        <option value="1">1 - bad</option>
                        <option value="2">2 - not bad</option>
                        <option value="3">3 - good</option>
                        <option value="4">4 - very good</option>
                        <option value="5">5 - perfect</option>
                    </select>
                </div>

                <div>
                    <label for="review">review</label>
                    <textarea required class="form-control" v-model="review" name="review" id="review" cols="30"></textarea>
                </div>


                <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary mt-3">Send!</button>
                </div>
            </form>
        </div>

</div>
</template>

<!-- style section -->
<style lang="scss"></style>