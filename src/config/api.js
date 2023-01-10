import axios from "axios";

const axiosInstance = axios.create({
    headers: {
        'Content-type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem("token"))
    }
});

export default axiosInstance;