import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import PetAdItem from "./Item";

const PetAdList = props => {
    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={props.pets}
            renderItem={pet => <PetAdItem {...pet.item} />}
            keyExtractor={pet => pet.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center'
    }
});

export default PetAdList;