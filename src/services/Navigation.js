import { NavigationActions } from 'react-navigation';

let foundPetsScreenNavigator;

export const setFoundPetsScreenNavigator = navigationRef => foundPetsScreenNavigator = navigationRef;

export const exploreNavigate = (routeName, params) => {
    if (foundPetsScreenNavigator && routeName) {
        foundPetsScreenNavigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params
            })
        );
    }
};