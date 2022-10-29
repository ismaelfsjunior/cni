import axios from 'axios';

const api = axios.create({
    baseURL: 'http://cninefro.com.br/server/apis/'
});

export default api;