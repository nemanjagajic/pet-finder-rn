import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {MapView} from 'expo';
import {Marker} from 'react-native-maps';
import ButtonCustom from "../UI/ButtonCustom";

class PickLocation extends Component {

    handlePickLocation = event => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.props.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
        });

        this.props.onLocationPicked(coords);
    };

    handleGetLocation = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            const coordsEvent = {
                nativeEvent: {
                    coordinate: {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude
                    }
                }
            };

            this.handlePickLocation(coordsEvent);
        }, (error) => {
            console.log(error);
            alert('Error occurred fetching location');
        });
    };

    render() {
        return (
            <View>
                <MapView
                    style={styles.map}
                    initialRegion={this.props.focusedLocation}
                    ref={(ref) => this.map = ref}
                    onPress={this.handlePickLocation}
                >
                    <Marker
                        coordinate={this.props.focusedLocation}
                    />
                </MapView>
                <ButtonCustom
                    color={'#808080'}
                    width={'100%'}
                    height={50}
                    onPress={this.handleGetLocation}
                >
                    Locate me
                </ButtonCustom>
            </View>
        )
    }
}

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

export default PickLocation;
