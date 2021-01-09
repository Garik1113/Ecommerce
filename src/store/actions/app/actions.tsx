import { AppActions, TOGGLE_DRAWER } from '../../types/app';

export const toggleDrawer = (drawer: string):AppActions => ({
    type: TOGGLE_DRAWER,
    drawer
});