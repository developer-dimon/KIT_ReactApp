import axios from "axios";

const API_URL = "http://127.0.0.1:8000";


const register = (username, email, password) => {
    return axios.post(API_URL + "/auth/register", {
            username: username,
            email: email,
            password: password,
        },
        {
            headers: {
                "Content-Type": "application/json"

            },
        })
};

const login = (username, password) => {
    const formData = new FormData();
    formData.set('username', username);
    formData.set('password', password);
    return axios.post(API_URL + "/auth/jwt/login", formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
        // console.log(response)
        if (response.data.access_token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};
const logout = () => {
    localStorage.removeItem("user");
};
export default {
    register,
    login,
    logout,
};