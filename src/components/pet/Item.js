import React from 'react';
import {View, Text, StyleSheet, Image, Platform, TouchableWithoutFeedback} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {exploreNavigate} from '../../services/Navigation';

const PetItem = props => {
    return (
        <TouchableWithoutFeedback
            onPress={() => exploreNavigate('FoundPet', {
                image: props.image,
                location: props.locationInfo,
                description: props.description
            })}
        >
            <View style={styles.container}>
                <View style={styles.infoAndImgContainer}>
                    <View style={styles.location}>
                        <View style={styles.locationItem}>
                            <Ionicons name='ios-navigate' size={18} color={'#26A69A'}/>
                            <Text style={styles.infoText}>
                                {`${Platform.OS === 'android' ? props.locationInfo.street + ' ' + props.locationInfo.name : props.locationInfo.name}`}
                            </Text>
                        </View>
                        <View style={styles.locationItem}>
                            <Ionicons name='md-map' size={18} color={'#26A69A'}/>
                            <Text style={[styles.infoText, {marginLeft: 6}]}>
                                {`${props.locationInfo.city}, ${props.locationInfo.country}`}
                            </Text>
                        </View>
                        <View style={styles.locationItem}>
                            <Ionicons name='ios-time' size={18} color={'#26A69A'}/>
                            <Text style={styles.infoText}>10.12.2018 14:30
                            </Text>
                        </View>
                    </View>
                    {
                        props.image
                            ?
                            <Image source={{uri: props.image}} style={styles.image}/>
                            :
                            <View style={styles.imagePlaceholder}>
                                <Ionicons name='md-images' color={'white'} size={40}/>
                            </View>
                    }
                </View>
                <Text style={styles.description}>
                    {props.description.slice(0, 45)}
                    {props.description.length > 45 ? '...' : ''}
                </Text>
            </View>
        </TouchableWithoutFeedback>
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
        marginBottom: 10,
    },
    infoAndImgContainer: {
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
        borderColor: '#d9d9d9',
        marginRight: 10
    },
    imagePlaceholder: {
        width: 120,
        height: '85%',
        borderRadius: 10,
        backgroundColor: '#d9d9d9',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    description: {
        color: '#8c8c8c',
        flex: 1
    },
    location: {
        flex: 1,
        height: '85%',
        flexDirection: 'column',
        paddingBottom: 2,
        marginTop: 5,
    },
    infoText: {
        color: '#8c8c8c',
        marginLeft: 5,
        fontSize: 12
    },
    locationItem: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default PetItem;
