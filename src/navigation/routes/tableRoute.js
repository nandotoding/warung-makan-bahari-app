import constants from "../../constants/constants";
import TableList from "../../pages/TableList/TableList";

const tableRoute = {
    path: constants.ROUTES.TABLE,
    children: [
        { index: true, element: <TableList /> },
        { path: constants.ROUTES.ADD_TABLE, element: <h1>ADD TABLE FEATURE IS UNDER DEVELOPMENT</h1> }
    ]
};

export default tableRoute;