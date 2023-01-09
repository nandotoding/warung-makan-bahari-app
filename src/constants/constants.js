const constants = {
    ACTION: {
        ADD_MENU: "ADD_MENU",
        DELETE_MENU: "DELETE_MENU",

        ADD_TABLE: "ADD_TABLE",
        DELETE_TABLE: "DELETE_TABLE"
    },
    ROUTES: {
        DASHBOARD: "/",

        AUTH: "/auth",
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",

        MENU: "/menu",
        ADD_MENU: "/menu/add",

        TABLE: "/table",
        ADD_TABLE: "/table/add"
    },
    TABLE_STATUS: {
        AVAILABLE: "Available",
        UNAVAILABLE: "Unavailable"
    }
};

export default constants;