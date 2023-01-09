import constants from "../../constants/constants";
import Login from "../../pages/Login/Login";

const authRoutes = ({
    path: constants.ROUTES.AUTH,
    children: [
        { index: true, path: constants.ROUTES.LOGIN, element: <Login /> },
        { path: constants.ROUTES.REGISTER, element: <h1>Register Page</h1> }
    ]
})

export default authRoutes;