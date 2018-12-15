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
                <Ionicons name='ios-navigate' size={20} color={'#009688'}/>
                <Text style={styles.locationText}>
                    {`${Platform.OS === 'android' ? props.locationInfo.street : ''} ${props.locationInfo.name}, ${props.locationInfo.country}`}
                    </Text>
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
        borderRadius: 10
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
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationText: {
        color: '#8c8c8c',
        marginLeft: 5,
        fontSize: 12
    }
});

export default PetItem;
