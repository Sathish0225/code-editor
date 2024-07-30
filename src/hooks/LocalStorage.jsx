import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedvalue, setStoredvalue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    });
    const setValue = (value) => {
        try {
            setStoredvalue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.log(err);
        }
    }
    return [storedvalue, setValue];
}

export default useLocalStorage
