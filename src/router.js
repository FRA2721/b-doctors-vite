import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppAboutUs from './pages/AppAboutUs.vue';
import AppServices from './pages/AppServices.vue';
import AppContact from './pages/AppContact.vue';
import AppNotFound from './pages/AppNotFound.vue';

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },

        {
            path: "/about-us",
            name: "about-us",
            component: AppAboutUs,
        },

        {
            path: "/services",
            name: "services",
            component: AppServices,
        },

        {
            path: "/contact",
            name: "contact",
            component: AppContact,
        },

        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: AppNotFound,
        },
    ]
});

export { router }; 