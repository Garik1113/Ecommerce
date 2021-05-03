export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const FETCH_LOCATIONS = "FETCH_LOCATIONS";
export const FETCH_CONFIGS = 'FETCH_CONFIGS'

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

export interface FetchConfigs {
    type: typeof FETCH_CONFIGS,
    configs: any
}

export type AppActions = 
    | ToggleDrawer
    | FetchLocations
    | FetchConfigs