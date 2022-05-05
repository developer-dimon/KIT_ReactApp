import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8000/";

const getUserBoard = () => {
    return axios.get(API_URL + "users", { headers: authHeader() });
};

export default {
    getUserBoard,

};