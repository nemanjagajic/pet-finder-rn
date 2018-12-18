import React from 'react';
import {StyleSheet} from 'react-native';
import {MapView} from 'expo';
import {Marker} from 'react-native-maps';

const PickedLocation = props => {
    return (
        <MapView
            style={styles.map}
            initialRegion={props.focusedLocation}
        >
            <Marker
                coordinate={props.focusedLocation}
            />
        </MapView>
    )
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 180,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        overflow: 'hidden',
        marginBottom: 5
    },
});

export default PickedLocation;
