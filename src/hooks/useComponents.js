import { useState, useEffect } from 'react';
import api from '../services/api';
import { COMPONENTS } from '../constants/components';

const useComponents = (initialCategory = 'all') => {
    const [components, setComponents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComponents = async () => {
            try {
                // const data = await api.getAll();
                // For now, let's merge API data with our local constants to ensure 
                // the new buttons show up without DB seeding.
                let data = [];
                try {
                    data = await api.getAll();
                } catch (e) {
                    console.warn("API failed, using local only");
                }

                // Merge strategies: Local + API
                // Filter out duplicates based on ID
                const uniqueComponents = [
                    ...data,
                    ...COMPONENTS.filter(c => !data.some(d => d.id === c.id))
                ];

                setComponents(uniqueComponents);
                setError(null);
            } catch (err) {
                console.warn('Major Error:', err);
                setComponents(COMPONENTS);
                setError(null);
            } finally {
                setLoading(false);
            }
        };

        fetchComponents();
    }, []);

    return { components, loading, error };
};

export default useComponents;
