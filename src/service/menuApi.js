import axiosInstance from "../config/api";

export const getMenus = (page) => axiosInstance.get("/menus", {
    headers: {'Authorization': JSON.parse(localStorage.getItem("token"))},
    params: {page}
});

export const addMenu = (data) => {
    return axiosInstance.post("/menus", data, {
        headers: {'Authorization': JSON.parse(localStorage.getItem("token"))}
    });
};