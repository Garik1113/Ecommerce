import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoryContent from '../../rootComponents/Category';
import Home from '../../rootComponents/Home';
import Product from '../../rootComponents/Product';
import CartPage from '../../rootComponents/Cart/cartPage';
import Signin from '../Signin';
import Signup from '../Signup';
import Checkout from '../../rootComponents/Checkout';
import WIshlist from '../../rootComponents/Wishlist';


const Routes:React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/product/:id">
                <Product/>
            </Route>
            <Route path="/category/:id">
                <CategoryContent/>
            </Route>
            <Route path="/signup">
                <Signup/>
            </Route>
            <Route path="/signin">
                <Signin/>
            </Route>
            <Route path="/cart">
                <CartPage/>
            </Route>
            <Route path="/checkout">
                <Checkout/>
            </Route>
            <Route path="/wishlist">
                <WIshlist/>
            </Route>
        </Switch>
    )
}

export default Routes;