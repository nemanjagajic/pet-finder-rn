import {createMaterialTopTabNavigator} from "react-navigation";
import Explore from "../../screens/finder/Explore";
import Adopt from "../../screens/adopt/Adopt";

const MainTabNavigation = createMaterialTopTabNavigator(
    {
        Explore: Explore,
        Adopt: Adopt
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 12,
            },
            tabStyle: {
                width: 100
            },
            style: {
                backgroundColor: '#009688',
                paddingTop: 50
            },
        }
    }
);

export default MainTabNavigation;