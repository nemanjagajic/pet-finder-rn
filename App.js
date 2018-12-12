import React, {Component} from "react";
import {Provider} from 'react-redux';
import {createSwitchNavigator, createAppContainer} from "react-navigation";

import store from './src/store/index';

import Auth from './src/screens/auth/Auth';

const RootNavigator = createSwitchNavigator(
    {
        Auth: Auth
    },
    {
        initialRoute: Auth
    }
);

const AppNavigation = createAppContainer(RootNavigator);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation/>
            </Provider>
        );
    }
}

export default App;


