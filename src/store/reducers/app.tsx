import { AppActions, FETCH_CONFIGS, FETCH_LOCATIONS, TOGGLE_DRAWER } from '../types/app';
type Location = {
    id: string,
    name: string
}
type Locations = {
    countries: Location[],
    states: Location[],
    cities: Location[]
}
export interface AppInitialState {
    drawer: string,
    locations: Locations,
    configs: any
}

const initialState:AppInitialState = {
    drawer: "",
    locations: {
        countries: [],
        cities: [],
        states: []
    },
    configs: {}
};

export const appReducer = (state: AppInitialState = initialState, action: AppActions) => {
    switch(action.type){
        case TOGGLE_DRAWER:
            return {...state, drawer: action.drawer};
        case FETCH_LOCATIONS:
            return {...state, locations: action.locations};
        case FETCH_CONFIGS:
            return { ...state, configs: action.configs }
        default: return state;
    }
}