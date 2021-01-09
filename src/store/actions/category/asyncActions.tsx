import axios from 'axios';
import { Dispatch } from 'react';
import actions from './actions';


export const getAllCategories = () =>
    async (dispatch: Dispatch<any>, getState: Function) => {
        console.log(getState())
        dispatch(actions.getCategories.request());
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch(actions.getCategories.receive(response.data));
        console.log(response);
};
