import { Dispatch, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'src/store';
import { AppActions } from 'src/store/types/app';
import { CartActions } from 'src/store/types/cart';
import { toggleDrawer as toggleDrawerFn } from '../../store/actions/app/actions';
import { toggleCartDrawer } from '../../store/actions/cart/actions';

export const useMask = () => {
    const dispatch:Dispatch<AppActions | CartActions> = useDispatch();
    const toggleDrawer:boolean = !!useSelector((state: State) => state.app.drawer);
    const toggleCart:boolean = !!useSelector((state: State) => state.cart.cartDrawer);

    const handleClick = useCallback(():void => {
        dispatch(toggleDrawerFn(""));
        dispatch(toggleCartDrawer(""));
        
    }, [dispatch, toggleDrawerFn]);

    return {
        handleClick,
        toggleCart,
        toggleDrawer
    }
}