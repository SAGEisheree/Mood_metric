import { useState, useEffect } from 'react';

function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        if (saved === null) return defaultValue;

        try {
            // Try to parse as JSON
            return JSON.parse(saved);
        } catch (e) {
            // If it's a raw string (like your "bg-lime-500" error), 
            // just return the raw string as-is.
            return saved;
        }
    });

    useEffect(() => {
        // This ensures the NEXT save is proper JSON
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;