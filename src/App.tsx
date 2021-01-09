import React, {Context, createContext} from 'react';
import Main from 'components/Main/main';
import Routes from 'components/Routes';
import classes from './app.scss';
import Mask from 'components/Mask/mask';
import Navigation from './components/Navigation/navigation';
import MiniCart from './components/MiniCart';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const ContextValue = createContext({cart:"id12345"});


const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache()
});

const App: React.FC = () => {
    return (
        <React.StrictMode>
            <ApolloProvider client={client}>
                <ContextValue.Provider value={{cart: "DARKKKKK"}}>

                
                <Main>
                    <div className={classes["mainContent"]}>
                        <Routes/>  
                    </div>  
                </Main>
                </ContextValue.Provider>
            </ApolloProvider>
            
            <Navigation/>
            <MiniCart/>
            <Mask/>
      </React.StrictMode>
    );
};


export default App;