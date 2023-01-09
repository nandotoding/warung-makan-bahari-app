import FormText from "../FormText/FormText";
import FormSelect from "../FormSelect/FormSelect";

const FormInput = (props) => {
    let Component;
    switch (props.type){
        case 'select':
            Component = FormSelect;
            break;
        default:
            Component = FormText;
            break;
    }

    return <Component {...props} />
}

export default FormInput;
