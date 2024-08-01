import { useEffect, useState } from "react";

export const useLocalStorageState = (keyName, initialValue) => {
    const [state, setState] = useState(JSON.parse(localStorage.getItem(keyName)) || initialValue);

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state));
    }, [state, keyName]);

    return [state, setState];
};