import axiosInstance from "../config/api";

export const getTables = (page) => axiosInstance.get("/tables", {
    headers: {'Authorization': JSON.parse(localStorage.getItem("token"))},
    params: {page}
});

export const addTables = (data) => {
    return axiosInstance.post("/tables", data, {
        headers: {'Authorization': JSON.parse(localStorage.getItem("token"))}
    });
};