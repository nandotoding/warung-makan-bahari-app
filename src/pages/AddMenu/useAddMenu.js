import {useEffect, useState} from "react";
import {onChangeText} from "../../utils/EventHandlers";

const useAddMenu = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [isDisable, setDisable] = useState(true);

    const getter = {name, price, isDisable};
    const setter = {
        name: onChangeText(setName),
        price: onChangeText(setPrice)
    }

    useEffect(() => {
        if (name && price) {
            setDisable(false)
        } else setDisable(true)
    }, [name, price])

    return {
        getter, setter
    }
}

export default useAddMenu;
