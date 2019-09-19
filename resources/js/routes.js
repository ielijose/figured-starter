import NotFound from './views/404.vue';
import Login from './views/auth/Login.vue';
import Logout from './views/auth/Logout.vue';
import Register from './views/auth/Register.vue';
import Home from './views/Home.vue';
import Create from './views/posts/Create.vue';
import Post from './views/posts/Post.vue';

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/create",
        name: "create",
        component: Create,
        props: true
    },
    {
        path: "/p/:slug",
        name: "post",
        component: Post,
        props: true
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: { hideNavigation: true }
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        meta: { hideNavigation: true }
    },
    {
        path: "/logout",
        name: "logout",
        component: Logout,
        meta: { hideNavigation: true }
    },
    {
        path: "*",
        component: NotFound
    }
];

export default routes;
