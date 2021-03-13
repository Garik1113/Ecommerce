import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { CategoryInitialState, categoryReducer } from './reducers/categories';
import { AppInitialState, appReducer } from './reducers/app';
import { CartInitialState, cartReducer } from './reducers/cart';
import { customerReducer, ICustomerInterface } from './reducers/customer';
import { createBrowserHistory } from 'history';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
export const history = createBrowserHistory();

export interface State  {
    categories: CategoryInitialState,
    app: AppInitialState,
    cart: CartInitialState,
    customer: ICustomerInterface
}

const rootReducer = combineReducers({ 
    categories: categoryReducer, 
    app: appReducer, 
    cart: cartReducer,
    customer: customerReducer 
});
const middleWare:Array<ThunkMiddleware> = [routerMiddleware(history), thunk];
const store = createStore(rootReducer,
        compose(applyMiddleware(...middleWare), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )
);

export default store;