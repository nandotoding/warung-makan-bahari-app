import {useDispatch} from "react-redux";
import {deleteMenu} from "../../store/actions/menuAction";
import MenuItem from "./components/MenuItem/MenuItem";
import {StyledListGroup} from "./styles";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants/constants";

const MenuList = ({data}) => {
    const dispatch = useDispatch();

    const onDelete = (id) => () => {
        const isOk = window.confirm("Are you sure want to delete this menu?");
        if (isOk) {
            dispatch(deleteMenu(id));
        }
    };

    return (
        <StyledListGroup>
            {data?.map((item, index) => (
                <MenuItem
                    data={item}
                    key={item.menuId}
                    onDelete={onDelete(item.menuId)}
                />
            ))}
        </StyledListGroup>
    );
};

export default withPaginationList(MenuList, {
    label: "Menu",
    routeToAdd: constants.ROUTES.ADD_MENU
});