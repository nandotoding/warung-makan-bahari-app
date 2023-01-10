import {useState} from "react";

const TOKEN = "token";

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem(TOKEN);
        const userToken = JSON.parse(tokenString);
        return userToken;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem(TOKEN, JSON.stringify(userToken));
        setToken(userToken.token);
    };

    const removeToken = () => {
        localStorage.removeItem(TOKEN);
    }

    return {
        setToken: saveToken,
        removeToken,
        token
    }
};