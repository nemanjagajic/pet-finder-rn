import { createStackNavigator } from 'react-navigation';
import AddFoundPetScreen from '../../screens/found/AddFoundPetScreen';
import AddLostPetScreen from '../../screens/petAd/AddPetAdScreen';
import FoundPetScreen from '../../screens/found/FoundPetScreen';
import MainTabNavigation from './MainTabNavigation';
import PetAdDetailsScreen from '../../screens/petAd/PetAdDetailsScreen';
import CommentsScreen from "../../screens/comments/CommentsScreen";

const MainStack = createStackNavigator(
  {
    MainTabNavigation: {
      screen: MainTabNavigation,
      navigationOptions: {
        title: 'Pet finder',
        headerStyle: {
          backgroundColor: '#009688',
        },
        headerTintColor: '#fff',
      },
    },
    AddPet: {
      screen: AddFoundPetScreen,
      navigationOptions: {
        title: 'Add found pet',
        headerStyle: {
          backgroundColor: '#009688',
        },
        headerTintColor: '#fff',
      },
    },
    FoundPet: {
      screen: FoundPetScreen,
      navigationOptions: {
        title: 'Found pet',
        headerStyle: {
          backgroundColor: '#009688',
        },
        headerTintColor: '#fff',
      },
    },
    AddPetAd: {
      screen: AddLostPetScreen,
      navigationOptions: {
        title: 'Add pet',
        headerStyle: {
          backgroundColor: '#009688',
        },
        headerTintColor: '#fff',
      },
    },
    PetAdDetails: {
      screen: PetAdDetailsScreen,
      navigationOptions: {
        title: 'Pet details',
        headerStyle: {
          backgroundColor: '#009688',
        },
        headerTintColor: '#fff',
      },
    },
    Comments: {
      screen: CommentsScreen,
      navigationOptions: {
        title: 'Comments',
        headerStyle: {
          backgroundColor: '#009688',
        },
        headerTintColor: '#fff',
      },
    }
  },
  {
    initialRoute: MainTabNavigation,
  },
);

export default MainStack;
