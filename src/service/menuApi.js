import axiosInstance from "../config/api";

export const getMenus = (page) => axiosInstance.get("/menus", {
    params: {page}
});

export const addMenu = (data) => {
    return axiosInstance.post("/menus", data);
};