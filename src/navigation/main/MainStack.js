import {createStackNavigator} from "react-navigation";
import AddPet from "../../screens/finder/AddFoundPet";
import CustomCamera from "../../components/image/CustomCamera";
import FoundPet from "../../screens/finder/FoundPet";
import MainTabNavigation from "./MainTabNavigation";

const MainStack = createStackNavigator(
    {
        MainTabNavigation: {
            screen: MainTabNavigation,
            navigationOptions: {
                headerStyle: {
                    display: 'none'
                }
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
            screen: FoundPet,
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