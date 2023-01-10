import axiosInstance from "../config/api";

export const getTables = (page) => axiosInstance.get("/tables", {
    params: {page}
});

export const addTables = (data) => {
    return axiosInstance.post("/tables", data);
};