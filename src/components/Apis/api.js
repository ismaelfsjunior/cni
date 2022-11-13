import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cninefro.com.br/server/apis/'
});

export default api;