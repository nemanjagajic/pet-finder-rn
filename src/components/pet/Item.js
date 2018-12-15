import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const PetItem = (props) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: props.image}} style={styles.image}/>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 10,
        alignItems: 'center',
        paddingLeft: 10,
        marginBottom: 10
    },
    image: {
        width: 120,
        height: '80%',
        borderRadius: 10
    },
    description: {
        margin: 10,
        height: '80%',
        color: '#8c8c8c'
    }
});

export default PetItem;
