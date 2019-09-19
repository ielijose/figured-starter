import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import VueRouter from 'vue-router';
import Toasted from 'vue-toasted';

import App from './components/AppComponent.vue';
import routes from './routes';
import { store } from './store/store';

require("./bootstrap");

window.eventBus = new Vue();

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Loading, {
    loader: "bars",
    color: "#16a085"
});
Vue.use(Toasted, {
    position: "bottom-right",
    duration: 3000
});

const router = new VueRouter({
    routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: "login"
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.loggedIn) {
            next({
                name: "home"
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

new Vue({
    el: "#app",
    router: router,
    store: store,
    components: { App },
    template: "<App/>"
});
