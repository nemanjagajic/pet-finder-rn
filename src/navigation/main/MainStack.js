import { createStackNavigator } from 'react-navigation';
import AddFoundPetScreen from '../../screens/found/AddFoundPetScreen';
import AddLostPetScreen from '../../screens/petAd/AddPetAdScreen';
import FoundPetScreen from '../../screens/found/FoundPetScreen';
import MainTabNavigation from './MainTabNavigation';
import PetAdDetailsScreen from '../../screens/petAd/PetAdDetailsScreen';
import CommentsScreen from "../../screens/comments/CommentsScreen";
import { Ionicons } from '@expo/vector-icons';
import React from "react";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import {mainStackNavigate} from "../../services/Navigation";

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
        headerRight: (
          <Ionicons 
            name="md-person" color="#bfbfbf" size={25}
            style={{ marginRight: 20, color: '#fff' }}
            onPress={() => mainStackNavigate('Profile')}
          />
        )
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
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
        headerStyle: {
          backgroundColor: '#009688',
        },
        headerTintColor: '#fff',
      }
    }
  },
  {
    initialRoute: MainTabNavigation,
  },
);

export default MainStack;
