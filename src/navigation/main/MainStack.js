import {createStackNavigator} from "react-navigation";
import AddPet from "../../screens/finder/AddFoundPetScreen";
import CustomCamera from "../../components/image/CustomCamera";
import FoundPetScreen from "../../screens/finder/FoundPetScreen";
import MainTabNavigation from "./MainTabNavigation";

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
            screen: AddPet,
            navigationOptions: {
                title: 'Add found pet',
                headerStyle: {
                    backgroundColor: '#009688'
                },
                headerTintColor: '#fff'
            }
        },
        Camera: {
            screen: CustomCamera,
            navigationOptions: {
                title: 'Camera',
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