import {useDispatch} from "react-redux";
import {StyledListGroup} from "./styles";
import TableItem from "./components/TableItem/TableItem";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants/constants";
import {deleteTable} from "../../store/actions/tableAction";
import {getTables} from "../../service/tableApi";

const TableList = ({data}) => {
    const dispatch = useDispatch();

    const onDelete = (id) => () => {
        const isOk = window.confirm("Are you sure want to delete this table?");
        if (isOk) {
            dispatch(deleteTable(id));
        }
    };

    console.log('DATA', data);

    return (
        <StyledListGroup>
            {data?.map((item, index) => (
                <TableItem
                    data={item}
                    key={item.tableId}
                    onDelete={onDelete(item.tableId)}
                />
            ))}
        </StyledListGroup>
    );
};

export default withPaginationList(TableList, {
    label: "Table",
    routeToAdd: constants.ROUTES.ADD_TABLE,
    query: getTables
});