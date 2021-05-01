import { AppActions, FETCH_LOCATIONS, TOGGLE_DRAWER } from '../types/app';
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
    locations: Locations
}

const initialState:AppInitialState = {
    drawer: "",
    locations: {
        countries: [],
        cities: [],
        states: []
    }
};

export const appReducer = (state: AppInitialState = initialState, action: AppActions) => {
    switch(action.type){
        case TOGGLE_DRAWER:
            return {...state, drawer: action.drawer};
        case FETCH_LOCATIONS:
            return {...state, locations: action.locations};
        default: return state;
    }
}