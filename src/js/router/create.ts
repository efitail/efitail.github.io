import VueRouter from "vue-router";
import LandingPageComponent from "../components/pages/landing.vue";

const routes = [
    {path: "/", name: "index", redirect: "/landing"},
    {path: "/landing", name: "landing", component: LandingPageComponent},
]

export default function createStore() {
    return new VueRouter({
        linkActiveClass: "active",
        routes
    })
}
