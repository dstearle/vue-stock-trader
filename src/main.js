import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from "vue-resource";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
//Allows us to use firebase
Vue.use(VueResource);

//Firebase link to test save & load
Vue.http.options.root = "https://vuejs-stock-trader-687d3.firebaseio.com/";

//Applies currency filter to funds (turns 100 to $100)
Vue.filter('currency', (value) => {

    return '$' + value.toLocaleString();

});

const router = new VueRouter ({
    
    mode: 'history',
    
    routes: routes
    
});

new Vue({
    
    el: '#app',
    
    router,
    
    store,
    
    render: h => h(App)
    
})