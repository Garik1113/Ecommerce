export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const FETCH_LOCATIONS = "FETCH_LOCATIONS";

type Location = {
    id: string,
    name: string
}

type Locations = {
    countries: Location[],
    states: Location[],
    cities: Location[]
}

export interface ToggleDrawer {
    type: typeof TOGGLE_DRAWER;
    drawer: string;
}

export interface FetchLocations {
    type: typeof FETCH_LOCATIONS,
    locations: Locations
}

export type AppActions = 
    | ToggleDrawer
    | FetchLocations