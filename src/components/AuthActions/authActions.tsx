import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from 'src/store';
import classes from './authActions.scss';
import { signOut } from 'src/store/actions/customer/asyncActions';
import { useAxiosClient } from 'src/talons/Axios/useAxiosClient';
import { DELETE_CART } from 'src/store/types/cart';

interface Props {
    isMobile: boolean
}

const AuthActions = (props: Props) => {
    const { isMobile } = props;
    const isSignedIn = useSelector((state: State) => state.customer.isSignedIn);
    const dispatch = useDispatch();
    const { axiosClient } = useAxiosClient();
    const handleSignOut = useCallback(async() => {
        await axiosClient("PUT", `customers/signout`);
        dispatch(signOut());
        dispatch({
            type: DELETE_CART
        });
    }, []);

    return (
        <div className={classes.root}>
            {
                isSignedIn
                ?   <div className={classes.flex}>
                        { 
                            isMobile 
                            ?  <div className={classes.icon}><i className="fas fa-user"></i></div> 
                            :  <Link to="/account" className={classes.signinLinkAccount}>Հաշիվ</Link> 
                        }
                        { 
                            isMobile
                            ?   <div className={classes.icon}><i className="fas fa-sign-out-alt"></i></div>
                            :   <span onClick={handleSignOut} className={classes.signinLink}>Ելք</span> 
                        }
                    </div> 
                :   <div>
                        <Link to="/signin" className={classes.signinLink}>
                            {   
                                isMobile 
                                ?   <i className="fas fa-user"></i> 
                                :   <span>Մուտք</span>
                            }
                        </Link>
                    </div>
            }
        </div>
    )
};

export default AuthActions;