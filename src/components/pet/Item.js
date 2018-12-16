import React from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const PetItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgAndDescWrapper}>
                {
                    props.image
                        ?
                        <Image source={{uri: props.image}} style={styles.image}/>
                        :
                        <View style={styles.imagePlaceholder}>
                            <Ionicons name='md-images' color={'white'} size={40}/>
                        </View>
                }
                <Text style={styles.description}>{props.description}</Text>
            </View>
            <View style={styles.location}>
                <View style={styles.locationItem}>
                    <Ionicons name='ios-navigate' size={18} color={'#26A69A'}/>
                    <Text style={styles.locationStreetText}>
                        {`${Platform.OS === 'android' ? props.locationInfo.street : ''} ${props.locationInfo.name}`}
                    </Text>
                </View>
                <View style={styles.locationItem}>
                    <Ionicons name='md-map' size={18} color={'#26A69A'}/>
                    <Text style={styles.locationCityText}>
                        {`${props.locationInfo.city}, ${props.locationInfo.country}`}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        height: 130,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 10,
        paddingLeft: 10,
        paddingTop: 1,
        marginBottom: 10
    },
    imgAndDescWrapper: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        alignItems: 'center'
    },
    image: {
        width: 120,
        height: '85%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d9d9d9'
    },
    imagePlaceholder: {
        width: 120,
        height: '85%',
        borderRadius: 10,
        backgroundColor: '#d9d9d9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        marginLeft: 10,
        marginRight: 10,
        height: '85%',
        color: '#8c8c8c',
        flex: 1,
    },
    location: {
        flex: 1,
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 2,
    },
    locationStreetText: {
        color: '#8c8c8c',
        marginLeft: 5,
        fontSize: 12
    },
    locationCityText: {
        color: '#8c8c8c',
        marginLeft: 5,
        marginRight: 10,
        fontSize: 12
    },
    locationItem: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default PetItem;
