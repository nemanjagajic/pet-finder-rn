import { NavigationActions } from 'react-navigation';

let exploreNavigator;

export const setExploreNavigator = navigationRef => exploreNavigator = navigationRef;

export const exploreNavigate = (routeName, params) => {
    if (exploreNavigator && routeName) {
        console.log('here2');
        exploreNavigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params
            })
        );
    }
};