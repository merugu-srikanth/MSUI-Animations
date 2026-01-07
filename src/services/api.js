import axios from 'axios';

const API_URL = 'http://localhost:5000/api/components';

const api = {
    getAll: async () => {
        const response = await axios.get(API_URL);
        return response.data;
    },
    getOne: async (id) => {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    },
    create: async (data, password) => {
        const response = await axios.post(API_URL, { ...data, adminPassword: password });
        return response.data;
    },
    update: async (id, data, password) => {
        const response = await axios.put(`${API_URL}/${id}`, { ...data, adminPassword: password });
        return response.data;
    },
    delete: async (id, password) => {
        const response = await axios.delete(`${API_URL}/${id}`, {
            headers: { 'x-admin-password': password }
        });
        return response.data;
    }
};

export default api;
