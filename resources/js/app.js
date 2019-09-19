import Vue from 'vue';

import App from './components/AppComponent.vue';
import routes from './routes';
import { store } from './store/store';

require("./bootstrap");

window.eventBus = new Vue();

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "history"
});

new Vue({
    el: "#app",
    router: router,
    store: store,
    components: { App },
    template: "<App/>"
});
