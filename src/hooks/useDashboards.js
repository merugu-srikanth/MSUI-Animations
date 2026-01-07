import { useState, useEffect } from 'react';
import api from '../services/api';
import { DASHBOARDS } from '../constants/dashboards';

const useDashboards = () => {
    const [dashboards, setDashboards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDashboards = async () => {
            try {
                const data = await api.getAll();
                const filtered = data.filter(item => item.category === 'dashboard');

                // MAPPING DB Structure to Frontend Structure if needed
                // DB: preview (string), code (obj)
                // Frontend Mock: previewHTML (string), previewCode (obj)
                // We should map this so the page doesn't break.
                const mapped = filtered.map(d => ({
                    ...d,
                    id: d._id, // Mongo ID
                    previewHTML: d.preview,
                    previewCode: d.code
                }));

                setDashboards(mapped);
                setError(null);
            } catch (err) {
                console.warn('API Fetch Failed, falling back to mock data:', err);
                setDashboards(DASHBOARDS);
                setError(null);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboards();
    }, []);

    return { dashboards, loading, error };
};

export default useDashboards;
