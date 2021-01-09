export const TOGGLE_CART_DRAWER = 'TOGGLE_CART_DRAWER';

export interface ToggleCartDrawer {
    type: typeof TOGGLE_CART_DRAWER,
    drawer: string
}

export type CartActions = | ToggleCartDrawer;