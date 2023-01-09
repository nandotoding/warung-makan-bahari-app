import {useNavigate} from "react-router-dom";
import {useState} from "react";
import StyledContainer from "../components/StyledContainer/StyledContainer";
import {Button} from "react-bootstrap";
import Pagination from "../components/Pagination/Pagination";
import EmptyState from "../components/EmptyState/EmptyState";
import menuList from "../fixtures/menuList.json"
import tableList from "../fixtures/tableList.json"

export default (ListComponent, opts) => {
    return (props) => {
        const navigate = useNavigate();
        const { label, routeToAdd } = opts;
        const [currentPage, setCurrentPage] = useState(1);
        let {data, totalPage} = menuList;

        if (label === "Table") {
            ({data, totalPage} = tableList)
        }

        return (
            <>
                <StyledContainer>
                    <Button variant="success" onClick={() => navigate(routeToAdd)}>Add {label}</Button>
                    {data?.length > 0 ? (
                        <ListComponent data={data} {...props} />
                    ): <EmptyState text={`${label} is Empty...`} />}
                </StyledContainer>
                <Pagination
                    totalPage={totalPage}
                    onChangeCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </>
        )
    }
}
