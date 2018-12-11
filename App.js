import React from "react";
import {createSwitchNavigator, createAppContainer} from "react-navigation";

import Auth from './src/screens/auth/Auth';

const RootNavigator = createSwitchNavigator(
    {
        Auth: Auth
    },
    {
        initialRoute: Auth
    }
);

export default createAppContainer(RootNavigator);


