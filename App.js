import React, {Component} from "react";
import {Provider} from 'react-redux';
import {createAppContainer} from "react-navigation";

import store from './src/store/index';
import RootNavigation from "./src/navigation";

const AppNavigation = createAppContainer(RootNavigation);

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


