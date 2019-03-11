import Vue from 'vue';
import App from './App';
import router from './router';
import axios from '../config/axios';
// import Alert from 'vuejs-alert';
// import Toast from 'vuejs-toasts';
// import Loading from 'vuejs-loading';
// import vuexStore from './vuex/store';
// import '../config/share.config';

Vue.config.productionTip = false;

// Vue.use(Alert);
// Vue.use(Toast);
// Vue.use(Loading);

Vue.prototype.$axios = axios;

new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    // store: vuexStore,
    template: '<App/>'
});