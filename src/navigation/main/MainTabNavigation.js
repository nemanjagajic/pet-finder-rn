import {createMaterialTopTabNavigator} from "react-navigation";
import {Dimensions} from 'react-native';

import FoundPetsScreen from "../../screens/found/FoundPetsScreen";
import AdoptScreen from "../../screens/adopt/AdoptScreen";
import LostPetsScreen from "../../screens/lost/LostPetsScreen";

const MainTabNavigation = createMaterialTopTabNavigator(
    {
        Found: FoundPetsScreen,
        Lost: LostPetsScreen,
        Adopt: AdoptScreen
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 12,
                color: "#009688",
                width: Dimensions.get('window').width / 3
            },
            tabStyle: {
                width: Dimensions.get('window').width / 3
            },
            style: {
                backgroundColor: '#fff',
                width: Dimensions.get('window').width
            },
            indicatorStyle: {
                backgroundColor: '#009688',
                borderRadius: 10,
            },
        }
    }
);

export default MainTabNavigation;