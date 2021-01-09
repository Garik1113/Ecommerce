import axios from 'axios';
import { Dispatch } from 'react';
import { CategoryActions, GetCategoriesReceive, GET_CATEGORIES_RECEIVE, GET_CATEGORIES_REQUEST, ICategory } from '../../types/category';

const setCategories = (categories: ICategory[]): GetCategoriesReceive => ({
    type: GET_CATEGORIES_RECEIVE,
    categories
})

export const getCategoriesRequest = () => async(dispatch: Dispatch<CategoryActions>) => {
    dispatch({
        type: GET_CATEGORIES_REQUEST,
    });

    const response = await  axios.get<ICategory[]>('https://jsonplaceholder.typicode.com/todos');
    const categories = response.data;
    dispatch(setCategories(categories))
    
}


export const categories= [
        {
            id: "id1",
            title: "One",
            description: "asas asd asdasd asdas"
        },
        {
            id: "id2",
            title: "two",
            description: "asas asd asdasd asdas"
        },
        {
            id: "id3",
            title: "tree",
            description: "asas asd asdasd asdas"
        },
        {
            id: "id4",
            title: "four",
            description: "asas asd asdasd asdas"
        },
        {
            id: "id5",
            title: "five",
            description: "asas asd asdasd asdas"
        }
    ]
