import VueRouter from 'vue-router';

import ListPage from './pages/list-page/list-page.vue';
import PostPage from './pages/post-page/post-page.vue';
import NotFoundPage from './pages/not-found-page/not-found-page.vue';

const routes = [
    {
        path: '/',
        redirect: '/list'
    }, {
        path: '/list',
        component: ListPage
    }, {
        path: '/post/:postId',
        component: PostPage
    }, {
        path: '*',
        component: NotFoundPage
    }
];

export default new VueRouter({
    routes
});