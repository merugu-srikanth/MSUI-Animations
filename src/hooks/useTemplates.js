import { useState, useEffect } from 'react';
import api from '../services/api';
import { EMAIL_TEMPLATES } from '../constants/emailTemplates';

const useTemplates = () => {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const data = await api.getAll();
                // Filter only emails
                const emailItems = data.filter(item => item.category === 'email');

                // Map DB structure to Layout expectation if needed
                const mapped = emailItems.map(t => ({
                    ...t,
                    id: t._id,
                    // DB has 'code' object, frontend expects code.html
                }));

                setTemplates(mapped);
                setError(null);
            } catch (err) {
                console.warn('API Fetch Failed, falling back to mock data:', err);
                setTemplates(EMAIL_TEMPLATES);
                setError(null);
            } finally {
                setLoading(false);
            }
        };

        fetchTemplates();
    }, []);

    return { templates, loading, error };
};

export default useTemplates;
