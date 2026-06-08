import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.15.26:5052/api',
    timeout: 10000,
});