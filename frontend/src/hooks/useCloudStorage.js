import { useState, useEffect } from 'react';
import api from '../api/axios';

const useCloudStorage = (key, initialValue) => {
    const [state, setState] = useState(initialValue);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get(`/storage/${key}`);
                if (res.data !== null) {
                    setState(res.data);
                }
            } catch (err) {
                console.error("Error loading from cloud:", err);
            }
        };
        fetchData();
    }, [key]);

    // Syncing to cloud
    const setValue = async (value) => {
        try {
            setState(value);
            await api.post('/storage', { key, value });
        } catch (err) {
            console.error("Error saving to cloud:", err);
        }
    };

    return [state, setValue];
};

export default useCloudStorage;