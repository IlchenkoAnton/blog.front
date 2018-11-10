import VueRouter from 'vue-router';

import ListPage from './pages/list/list.vue';
import PostPage from './pages/post/post.vue';
import NotFoundPage from './pages/not-found/not-found.vue';

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