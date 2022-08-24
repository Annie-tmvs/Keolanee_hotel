import Vue from 'vue';
import axios from 'axios';


export const normalAxios = axios.create(
    {
        baseURL: "https://2248-183-182-110-174.ap.ngrok.io/api/",
    }
);

Vue.prototype.$axios = normalAxios;