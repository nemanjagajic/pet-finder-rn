import {createMaterialTopTabNavigator} from "react-navigation";
import {Dimensions} from 'react-native';

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
                width: Dimensions.get('window').width / 2
            },
            tabStyle: {
                width: Dimensions.get('window').width / 2
            },
            style: {
                backgroundColor: '#009688',
                width: Dimensions.get('window').width
            },
            indicatorStyle: {
                backgroundColor: '#fff',
                height: 2,
                borderRadius: 10,
                marginBottom: 1
            }
        }
    }
);

export default MainTabNavigation;