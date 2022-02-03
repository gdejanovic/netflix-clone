import axios from "../node_modules/axios/";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});


export default instance;