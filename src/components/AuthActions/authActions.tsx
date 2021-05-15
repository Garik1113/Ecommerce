import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { State } from 'src/store';
import classes from './authActions.scss';
import { signOut } from 'src/store/actions/customer/asyncActions';
import { useAxiosClient } from 'src/talons/Axios/useAxiosClient';
import { DELETE_CART } from 'src/store/types/cart';
import Button from '../Button';

interface Props {
    isMobile: boolean
}

const AuthActions = (props: Props) => {
    const { isMobile } = props;
    const isSignedIn = useSelector((state: State) => state.customer.isSignedIn);
    const dispatch = useDispatch();
    const { axiosClient } = useAxiosClient();
    const history = useHistory();
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
                            ?   <Button priority="normal" onClick={() => history.push("/account")} label="account"/>
                            :  <Link to="/account" className={classes.signinLink}>Account</Link> 
                        }
                        { 
                            isMobile 
                            ?   <Button priority="normal" label="sign out" onClick={handleSignOut}/>
                            :   <span onClick={handleSignOut} className={classes.signinLink}>Sign out</span> 
                        }
                    </div> 
                :   <div>
                        <Link to="/signin" className={classes.signinLink}>
                            {   
                                isMobile 
                                ?   <i className="fas fa-user"></i> 
                                :   <span>Sign In</span>
                            }
                        </Link>
                    </div>
            }
        </div>
    )
};

export default AuthActions;