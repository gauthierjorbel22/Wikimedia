import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from "axios";


axios.defaults.baseURL = "https://auth.enterprise.wikimedia.com/v1";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// Add a request interceptorhttps://auth.enterprise.wikimedia.com/v1
export const interceptors = axios.interceptors.request.use(function (config) {
    // Do something before request is senthttps://auth.enterprise.wikimedia.com/v1
    const access_token = localStorage.getItem("access_token");
    if (access_token != undefined || access_token != null) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        config.headers['Authorization'] = 'Bearer ' + access_token;
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
createApp(App).use(router).mount("#app");
