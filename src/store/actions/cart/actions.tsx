import { CartActions, TOGGLE_CART_DRAWER } from '../../types/cart';

export const toggleCartDrawer = (drawer: string):CartActions => ({
    type: TOGGLE_CART_DRAWER,
    drawer
})
