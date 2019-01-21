import { NavigationActions } from 'react-navigation';

let foundPetsScreenNavigator;

export const setMainStackNavigator = navigationRef => foundPetsScreenNavigator = navigationRef;

export const mainStackNavigate = (routeName, params) => {
    if (foundPetsScreenNavigator && routeName) {
        foundPetsScreenNavigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params
            })
        );
    }
};