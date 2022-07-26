import * as api from '../api';

export const getSodas = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSodas();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateSoda = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateSoda(id, post);
        dispatch({ type:'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const selectSoda = (id) => async (dispatch) => {
    try {
        const { data } = await api.selectSoda(id);
        dispatch({ type:'SELECT', payload: data});
    } catch (error) {
        console.log(error);
    }
}