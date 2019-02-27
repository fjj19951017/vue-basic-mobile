import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
    routes: []
})

//拦截路由设置标题
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next();
});

export default router;