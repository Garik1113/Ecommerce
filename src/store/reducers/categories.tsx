import { ICategory } from 'src/interfaces/category';
import { CategoryActions, GET_CATEGORIES_RECEIVE, GET_CATEGORIES_REQUEST } from '../types/category';


export interface CategoryInitialState {
    categories: ICategory[],
    loading: boolean
}

const initialState = {
    categories: [],
    loading: false
}

export const categoryReducer = (state: CategoryInitialState = initialState, action: CategoryActions ) => {
    switch(action.type){
        case GET_CATEGORIES_REQUEST:
            return {...state, loading: true};
        case GET_CATEGORIES_RECEIVE:
            return {...state, categories: action.categories, loading: false};
        default: return state;
        
    }
} 
