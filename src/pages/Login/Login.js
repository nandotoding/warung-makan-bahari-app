import {useState} from "react";
import useToken from "../../hooks/useToken";
import {useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import FormText from "../../components/FormText/FormText";
import {onChangeText} from "../../utils/EventHandlers";
import StyledContainer from "../../components/StyledContainer/StyledContainer";
import constants from "../../constants/constants";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {setToken} = useToken();
    const [isCorrectUsernamePass, setCorrectUsernamePass] = useState(true);

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailInDb = "admin@example.com";
        const passwordInDb = "12345678"

        if (email === emailInDb && password === passwordInDb) {
            setToken({token: "abdcxyz123"});
            navigate(constants.ROUTES.DASHBOARD);
        } else {
            setCorrectUsernamePass(false);
        }
    }

    const validateEmail = () => {
        return email.length === 0 || (
            email.includes("@")
            && email.includes(".")
            && !email.startsWith("@")
            && !email.startsWith(".")
            && !email.endsWith("@")
            && !email.endsWith(".")
            && !email.includes("@.")
            && !email.includes(".@")
            && email.length > 4
        );
    };

    const validatePass = () => {
        return password.length === 0 || password.length > 5;
    };

    return (
        <StyledContainer>
            <h1>Login</h1>
            <hr />
            {!isCorrectUsernamePass && <p style={{color: 'red'}}>Incorrect Login Username or Password</p>}
            <Form onSubmit={handleSubmit}>
                <FormText
                    label={"Email"}
                    type="email"
                    placeholder={"Enter your email"}
                    value={email}
                    onChange={onChangeText(setEmail)}
                />
                {!validateEmail() && <p style={{color: 'red'}}>Invalid email format</p>}
                <FormText
                    label={"Password"}
                    type="password"
                    placeholder={"Enter your password"}
                    value={password}
                    onChange={onChangeText(setPassword)}
                />
                {!validatePass() && <p style={{color: 'red'}}>6 min length character</p>}
                <Button size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </StyledContainer>
    );
}

export default Login;