
import axios from 'axios';
export const axiosClient = axios.create({ baseURL: 'https://testedu.free.mockoapp.net', timeout: 10000,
});
axiosClient.get('/items')