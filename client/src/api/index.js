import axios from 'axios';

const url = 'http://localhost:5000/sodas';

export const fetchSodas = () => axios.get(url);
export const updateSoda = (id, updatedSoda) => axios.patch(`${url}/${id}`, updatedSoda);
export const selectSoda = (id) => axios.patch(`${url}/${id}/selectSoda`);