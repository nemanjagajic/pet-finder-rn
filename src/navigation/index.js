import {createSwitchNavigator} from "react-navigation";
import Auth from "../screens/auth/Auth";
import MainStack from "./main/MainStack";

const RootNavigation = createSwitchNavigator(
    {
        Auth: Auth,
        MainStack: MainStack
    },
    {
        initialRoute: Auth
    }
);

export default RootNavigation;