import constants from "../../constants/constants";
import MenuList from "../../pages/MenuList/MenuList";

const menuRoute = {
    path: constants.ROUTES.MENU,
    children: [
        { index: true, element: <MenuList /> },
        { path: constants.ROUTES.ADD_MENU, element: <h1>ADD MENU FEATURE IS UNDER DEVELOPMENT</h1> }
    ]
};

export default menuRoute;