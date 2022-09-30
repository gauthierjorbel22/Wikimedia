import axios from "axios";

axios.defaults.baseURL = "https://auth.enterprise.wikimedia.com/v1/login";
axios.defaults.headers.common['AUthorization'] = 'Bearer' + localStorage.getItem('access_token');



