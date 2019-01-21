import {createStackNavigator} from "react-navigation";
import AddFoundPetScreen from "../../screens/found/AddFoundPetScreen";
import AddLostPetScreen from '../../screens/lost/AddLostPetScreen';
import FoundPetScreen from "../../screens/found/FoundPetScreen";
import MainTabNavigation from "./MainTabNavigation";
import LostPetScreen from "../../screens/lost/LostPetScreen";

const MainStack = createStackNavigator(
    {
        MainTabNavigation: {
            screen: MainTabNavigation,
            navigationOptions: {
                title: 'Pet finder',
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
        },
        AddLostPet: {
            screen: AddLostPetScreen,
            navigationOptions: {
                title: 'Add lost pet',
                headerStyle: {
                    backgroundColor: '#009688'
                },
                headerTintColor: '#fff'
            }
        },
        LostPet: {
            screen: LostPetScreen,
            navigationOptions: {
                title: 'Lost pet',
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