import constants from "../../constants/constants";
import MenuList from "../../pages/MenuList/MenuList";
import AddMenu from "../../pages/AddMenu/AddMenu";

const menuRoute = {
    path: constants.ROUTES.MENU,
    children: [
        { index: true, element: <MenuList /> },
        { path: constants.ROUTES.ADD_MENU, element: <AddMenu/> }
    ]
};

export default menuRoute;