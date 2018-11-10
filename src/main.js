import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './app.router';

const requireComponent = require.context('./components', true, /\.vue$/);

requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const index = fileName.lastIndexOf('/');
    const componentName = fileName.substring(2, index);

    Vue.component(`blog-${componentName}`, componentConfig.default || componentConfig)
});

Vue.use(VueRouter);

new Vue({
        router
    }).$mount('#app');