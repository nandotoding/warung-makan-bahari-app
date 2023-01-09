import useToken from "../../hooks/useToken";
import {NavLink, useNavigate} from "react-router-dom";
import constants from "../../constants/constants";
import {Button, Col, Container, Navbar} from "react-bootstrap";
import {StyledNav} from "./styles";

const menu = [
    { path: constants.ROUTES.TABLE, menuName: "Table" },
    { path: constants.ROUTES.MENU, menuName: "Menu" },
    { path: constants.ROUTES.DASHBOARD, menuName: "Dashboard" }
]

const NavBarComp = () => {
    const {removeToken} = useToken();
    const navigate = useNavigate();
    const onLogout = () => {
        removeToken();
        navigate(constants.ROUTES.LOGIN);
    }

    return (
        <Navbar bg="light" expand="light" sticky={"top"}>
            <Container>
                <Col>
                    <Navbar.Brand>Warung Makan Bahari</Navbar.Brand>
                </Col>
                <Col className="col-2">
                    <StyledNav>
                        {menu?.map((item, index) => (
                            <NavLink
                                to={item.path}
                                className="nav-link mx-3"
                                key={index}
                            >
                                {item.menuName}
                            </NavLink>
                        ))}
                    </StyledNav>
                </Col>
                <Col className="col-1">
                    <Button variant="outline-danger" onClick={onLogout}>
                        Logout
                    </Button>
                </Col>
            </Container>
        </Navbar>
    )
}

export default NavBarComp;