import axiosInstance from "../config/api";

export const login = (data) => {
    return axiosInstance.post("/auth/login", data);
};