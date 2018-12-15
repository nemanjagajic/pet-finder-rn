import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import PetItem from "./Item";

const PetList = (props) => {
    return (
        <FlatList
            style={styles.container}
            data={props.pets}
            renderItem={pet => <PetItem {...pet.item} />}
            keyExtractor={pet => pet.description.toString()}
        />
    );
};

const styles = StyleSheet.create({
   container: {
       width: '100%',
       marginTop: 20,
       marginBottom: 20
   }
});

export default PetList;
