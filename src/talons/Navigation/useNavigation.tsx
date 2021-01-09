import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux'

export const useNavigation = () => {
    const isActive:boolean = useSelector((state:any) => state.app.toggleDrawer);
    const dispatch = useDispatch();
    
    return {
        isActive,
    }
}