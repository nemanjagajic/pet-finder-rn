import { NavigationActions } from 'react-navigation';

let foundPetsScreenNavigator;

export const setFoundPetsScreenNavigator = navigationRef => foundPetsScreenNavigator = navigationRef;

export const foundPetsNavigate = (routeName, params) => {
    console.log(foundPetsScreenNavigator);
    if (foundPetsScreenNavigator && routeName) {
        foundPetsScreenNavigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params
            })
        );
    }
};