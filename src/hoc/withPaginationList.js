import {useNavigate} from "react-router-dom";
import {useState} from "react";
import StyledContainer from "../components/StyledContainer/StyledContainer";
import {Button} from "react-bootstrap";
import Pagination from "../components/Pagination/Pagination";
import EmptyState from "../components/EmptyState/EmptyState";
import useFetchQuery from "../hooks/useFetchQuery";

export default (ListComponent, opts) => {
    return (props) => {
        const navigate = useNavigate();
        const { label, routeToAdd, query } = opts;
        const [currentPage, setCurrentPage] = useState(1);
        const {data, loading, error} = useFetchQuery(query, currentPage);

        if (loading) return <h2>Loading...</h2>
        if (error) return <h2>ERROR...</h2>

        if (loading || error) {
            return (
                <StyledContainer>
                    {loading && <h2>Loading...</h2>}
                    {error && <h2>ERROR...</h2>}
                </StyledContainer>
            );
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
                    totalPage={data?.totalPage}
                    onChangeCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </>
        )
    }
}
