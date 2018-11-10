import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './app.router';

Vue.use(VueRouter);

new Vue({
        router
    }).$mount('#app');