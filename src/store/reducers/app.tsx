import { AppActions, TOGGLE_DRAWER } from '../types/app';
export interface AppInitialState {
    drawer: string
}

const initialState:AppInitialState = {
    drawer: ""
};

export const appReducer = (state: AppInitialState = initialState, action: AppActions) => {
    switch(action.type){
        case TOGGLE_DRAWER:
            return {...state, drawer: action.drawer};
        default: return state;
    }
}