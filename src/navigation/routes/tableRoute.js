import constants from "../../constants/constants";
import TableList from "../../pages/TableList/TableList";
import AddTable from "../../pages/AddTable/AddTable";

const tableRoute = {
    path: constants.ROUTES.TABLE,
    children: [
        { index: true, element: <TableList /> },
        { path: constants.ROUTES.ADD_TABLE, element: <AddTable/> }
    ]
};

export default tableRoute;