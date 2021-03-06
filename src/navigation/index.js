import { createSwitchNavigator } from 'react-navigation';
import Auth from '../screens/auth/AuthScreen';
import MainStack from './main/MainStack';

const RootNavigation = createSwitchNavigator(
  {
    Auth,
    MainStack,
  },
  {
    initialRoute: Auth,
  },
);

export default RootNavigation;
