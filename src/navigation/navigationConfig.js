import {createBrowserRouter} from "react-router-dom";
import constants from "../constants/constants";
import authRoutes from "./routes/authRoute";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import menuRoute from "./routes/menuRoute";
import tableRoute from "./routes/tableRoute";

const navigationConfigs = createBrowserRouter([
    { path: "*", element: <PageNotFound /> },
    {
        path: constants.ROUTES.DASHBOARD,
        element: <ProtectedRoutes />,
        children: [{ index: true, element: <Dashboard /> }, menuRoute, tableRoute]
    },
    authRoutes,
]);

export default navigationConfigs;