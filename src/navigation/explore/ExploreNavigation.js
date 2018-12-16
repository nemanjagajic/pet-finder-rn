import {createStackNavigator} from "react-navigation";
import Explore from "../../screens/finder/Explore";
import AddPet from "../../screens/finder/AddFoundPet";
import CustomCamera from "../../components/image/CustomCamera";
import FoundPet from "../../screens/finder/FoundPet";

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
        initialRoute: Explore
    }
);

export default ExploreNavigation;