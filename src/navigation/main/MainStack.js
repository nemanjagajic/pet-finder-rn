import {createStackNavigator} from "react-navigation";
import AddFoundPetScreen from "../../screens/found/AddFoundPetScreen";
import FoundPetScreen from "../../screens/found/FoundPetScreen";
import MainTabNavigation from "./MainTabNavigation";

const MainStack = createStackNavigator(
    {
        MainTabNavigation: {
            screen: MainTabNavigation,
            navigationOptions: {
                title: 'Pet found',
                headerStyle: {
                    backgroundColor: '#009688'
                },
                headerTintColor: '#fff'
            }
        },
        AddPet: {
            screen: AddFoundPetScreen,
            navigationOptions: {
                title: 'Add found pet',
                headerStyle: {
                    backgroundColor: '#009688'
                },
                headerTintColor: '#fff'
            }
        },
        FoundPet: {
            screen: FoundPetScreen,
            navigationOptions: {
                title: 'Found pet',
                headerStyle: {
                    backgroundColor: '#009688'
                },
                headerTintColor: '#fff'
            }
        }
    },
    {
        initialRoute: MainTabNavigation
    }
);

export default MainStack;