import useAddTable from "./useAddTable";
import {useNavigate} from "react-router-dom";
import StyledContainer from "../../components/StyledContainer/StyledContainer";
import {StyledTitle} from "./styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import FormInput from "../../components/FormInput/FormInput";
import constants from "../../constants/constants";
import FormSelect from "../../components/FormSelect/FormSelect";
import useFetchMutation from "../../hooks/useFetchMutation";
import {addTables} from "../../service/tableApi";

const FORM_LIST = [
    { id: "number", label: "Table Number", type: "text", placeholder: "Enter table number" }
];

const AddTable = () => {
    const { getter, setter } = useAddTable();
    const navigate = useNavigate();
    const statusData = [constants.TABLE_STATUS.AVAILABLE, constants.TABLE_STATUS.UNAVAILABLE];
    const {fetchMutation, loading} = useFetchMutation(addTables, () => navigate(constants.ROUTES.TABLE));

    const submitHandler = () => {
        const payload = new FormData();
        payload.append('tableNumber', getter.number);
        payload.append('tableStatus', getter.status);
        fetchMutation(payload);
    };

    return (
        <StyledContainer>
            <StyledTitle>Add Table</StyledTitle>
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
                <FormSelect
                    label='Table Availability'
                    placeholder='Select availability status'
                    onChange={setter.status}
                    value={getter.status}
                    values={
                        statusData?.map((item) => ({
                            label: item
                        }))
                    }
                />
                <ButtonGroup>
                    <Button variant="success" onClick={submitHandler} disabled={getter.isDisable}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => navigate(constants.ROUTES.TABLE)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddTable;