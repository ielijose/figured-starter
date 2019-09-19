const PostsModule = {
    state: {
        posts: [],
        post: {},
        page: 1
    },
    getters: {
        postList(state) {
            return state.posts;
        }
    },
    mutations: {
        addPost(state, post) {
            state.posts.unshift(post);
        },
        retrievePosts(state, { posts, page }) {
            state.page = page + 1;
            state.posts = state.posts.concat(posts);
        },
        retrievePostBySlug(state, post) {
            state.post = post;
        },
        updatePost(state, post) {
            const index = state.posts.findIndex(item => item._id == post._id);
            state.posts.splice(index, 1, post);
        },
        deletePost(state, id) {
            const index = state.posts.findIndex(item => item._id == id);
            state.posts.splice(index, 1);
        },
        clearPosts(state) {
            state.posts = [];
            state.page = 1;
        }
    },
    actions: {
        addPost(context, post) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/posts", post)
                    .then(response => {
                        context.commit("addPost", response.data);
                        resolve(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                        reject(error);
                    });
            });
        },
        retrievePosts(context) {
            const { page } = this.state.posts;
            const url = `/api/posts?page=${page}`;
            return new Promise((resolve, reject) => {
                axios
                    .get(url)
                    .then(response => {
                        context.commit("retrievePosts", {
                            posts: response.data.data,
                            page
                        });
                        resolve(response);
                    })
                    .catch(error => {
                        console.error(error);
                        reject(error);
                    });
            });
        },
        retrievePostBySlug(context, slug) {
            const url = `/api/posts/${slug}`;
            return new Promise((resolve, reject) => {
                axios
                    .get(url)
                    .then(response => {
                        context.commit("retrievePostBySlug", response.data);
                        resolve(response);
                    })
                    .catch(error => {
                        console.error(error);
                        reject(error);
                    });
            });
        },
        updatePost(context, post) {
            return new Promise((resolve, reject) => {
                axios
                    .put(`/api/posts/${post._id}`, post)
                    .then(response => {
                        context.commit("updatePost", response.data);
                        resolve(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                        reject(error);
                    });
            });
        },
        deletePost(context, id) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`/api/posts/${id}`)
                    .then(response => {
                        context.commit("deletePost", id);
                        resolve(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                        reject(error);
                    });
            });
        },
        clearPosts(context) {
            context.commit("clearPosts");
        }
    }
};

export default PostsModule;
