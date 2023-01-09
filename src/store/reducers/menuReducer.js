import menuList from "../../fixtures/menuList.json"
import constants from "../../constants/constants";

const initialState = {
    menuList: [...menuList.data]
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ACTION.ADD_MENU:
            return {...state, menuList: [...state.menuList, action.payload]}
        case constants.ACTION.DELETE_MENU:
            const menuListCopy = [...state?.menuList];
            const menuWithIdIndex = menuListCopy?.findIndex((menu) => {
                return menu.menuId === action.payload
            });
            menuListCopy.splice(menuWithIdIndex, 1);

            return {...state, menuList: menuListCopy}
        default:
            return {...initialState}
    }
}

export default menuReducer;