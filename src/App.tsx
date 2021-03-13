import React from 'react';
import Main from 'components/Main/main';
import Routes from 'components/Routes';
import classes from './app.scss';
import Mask from 'components/Mask/mask';
import Navigation from './components/Navigation/navigation';
import MiniCart from './components/MiniCart';
import 'semantic-ui-css/semantic.min.css';
import './app.scss'


const App: React.FC = () => {
    return (
        <React.StrictMode>
            <Main>
                <div className={classes["mainContent"]}>
                    <Routes/>  
                </div>  
            </Main>
            <Navigation/>
            <MiniCart/>
            <Mask/>
      </React.StrictMode>
    );
};


export default App;