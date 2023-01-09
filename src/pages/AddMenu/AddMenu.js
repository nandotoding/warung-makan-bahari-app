import useAddMenu from "./useAddMenu";
import {useNavigate} from "react-router-dom";
import StyledContainer from "../../components/StyledContainer/StyledContainer";
import {StyledTitle} from "./styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import FormInput from "../../components/FormInput/FormInput";
import constants from "../../constants/constants";

const FORM_LIST = [
    { id: "name", label: "Name", type: "text", placeholder: "Enter menu name" },
    { id: "price", label: "Price", type: "text", placeholder: "Enter menu price" }
];

const AddMenu = () => {
    const { getter, setter } = useAddMenu();
    const navigate = useNavigate();
    // const {fetchMutation, loading} = useFetchMutation(addCourse, () => navigate(constants.ROUTES.COURSE));
    // const {data: courseTypeData} = useFetchQuery(getCourseTypes);

    const submitHandler = () => {
        const payload = new FormData();
        payload.append('name', getter.name);
        payload.append('price', getter.price);
        // fetchMutation(payload);
    };

    return (
        <StyledContainer>
            <StyledTitle>Add Menu</StyledTitle>
            <Form>
                { FORM_LIST.map(item => (
                    <FormInput
                        label={item.label}
                        type={item.type}
                        value={getter[item.id]}
                        onChange={setter[item.id]}
                        placeholder={item.placeholder}
                        key={item.id}
                    />
                )) }
                <ButtonGroup>
                    <Button variant="success" onClick={submitHandler} disabled={getter.isDisable}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => navigate(constants.ROUTES.MENU)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddMenu;