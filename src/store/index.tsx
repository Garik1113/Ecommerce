import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { CategoryInitialState, categoryReducer } from './reducers/categories';
import { AppInitialState, appReducer } from './reducers/app';
import { CartInitialState, cartReducer } from './reducers/cart';
import { createBrowserHistory } from 'history';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
export const history = createBrowserHistory();

export interface State  {
    categories: CategoryInitialState,
    app: AppInitialState,
    cart: CartInitialState
}

const rootReducer = combineReducers({ categories:  categoryReducer, app: appReducer, cart: cartReducer });
const middleWare:Array<ThunkMiddleware> = [routerMiddleware(history), thunk];
const store = createStore(rootReducer,
        compose(applyMiddleware(...middleWare)
    )
);

export default store;