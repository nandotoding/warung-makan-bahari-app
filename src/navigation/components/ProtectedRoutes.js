import useToken from "../../hooks/useToken";
import constants from "../../constants/constants";
import {Navigate, Outlet} from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";

const ProtectedRoutes = () => {
    const {token} = useToken();
    if (!token) {
        return <Navigate to={constants.ROUTES.LOGIN} replace />
    }

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default ProtectedRoutes;