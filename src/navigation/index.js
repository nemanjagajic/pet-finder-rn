import {createSwitchNavigator} from "react-navigation";
import Auth from "../screens/auth/Auth";
import ExploreNavigation from "./explore/ExploreNavigation";


const RootNavigation = createSwitchNavigator(
    {
        Auth: Auth,
        ExploreStack: ExploreNavigation
    },
    {
        initialRoute: Auth
    }
);

export default RootNavigation;