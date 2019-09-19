import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
axios.defaults.baseURL = BASE_URL;

export const store = new Vuex.Store({
    modules: {}
});
