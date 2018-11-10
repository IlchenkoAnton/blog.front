import axios from 'axios';

import postListMock from './post-list.mock';

export default {
    name: 'blog-post-list',
    data: function () {
        return {
            postList: null
        };
    },
    mounted() {
        axios
            .get('url')
            .then((response) => {
                this.postList = response;
            })
            .catch((error) => {
                this.postList = postListMock;
            });
    }
}