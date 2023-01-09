import {useEffect, useState} from "react";
import {onChangeText} from "../../utils/EventHandlers";

const useAddTable = () => {
    const [number, setNumber] = useState("");
    const [status, setStatus] = useState("");
    const [isDisable, setDisable] = useState(true);

    const getter = {number, status, isDisable};
    const setter = {
        number: onChangeText(setNumber),
        status: onChangeText(setStatus)
    }

    useEffect(() => {
        if (number && status) {
            setDisable(false)
        } else setDisable(true)
    }, [number, status])

    return {
        getter, setter
    }
}

export default useAddTable;