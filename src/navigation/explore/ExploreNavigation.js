import {createStackNavigator} from "react-navigation";
import Explore from "../../screens/finder/Explore";
import AddPet from "../../screens/finder/AddPet";
import CustomCamera from "../../components/image/CustomCamera";

const ExploreNavigation = createStackNavigator(
    {
        Explore: {
            screen: Explore,
            navigationOptions: {
                title: 'Explore',
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
        }
    },
    {
        initialRoute: Explore
    }
);

export default ExploreNavigation;