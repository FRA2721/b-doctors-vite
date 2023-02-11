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
            meta: {
                title: 'Home'
            }
        },

        {
            path: "/about-us",
            name: "about-us",
            component: AppAboutUs,
            meta: {
                title: 'About Us',
            }
        },

        {
            path: "/services",
            name: "services",
            component: AppServices,
            meta: {
                title: 'Our Servicer',
            }
        },

        {
            path: "/contact",
            name: "contact",
            component: AppContact,
            meta: {
                title: 'Our Contacts',
            }
        },

        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: AppNotFound,
            meta: {
                title: 'Error 404!',
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
});

export { router }; 