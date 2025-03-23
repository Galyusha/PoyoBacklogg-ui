import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Basic ${token}`;
    }
    return config;
});

export const getGames = async () => {
    return api.get('/games');
};

export const deleteGame = async (id) => {
    return api.delete(`/games/${id}`);
};

export const addGame = async (game) => {
    return api.post('/games', game);
};

export const updateGame = async (id, game) => {
    return api.put(`/games/${id}`, game);
};