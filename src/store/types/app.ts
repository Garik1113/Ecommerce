export const TOGGLE_DRAWER = "TOGGLE_DRAWER";

export interface ToggleDrawer {
    type: typeof TOGGLE_DRAWER;
    drawer: string;
}

export type AppActions = 
    | ToggleDrawer