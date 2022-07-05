import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://https://smtp-server-dallmad.herokuapp.com//',
})