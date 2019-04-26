import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PetItem from './Item';

const PetList = props => (
  <FlatList
    contentContainerStyle={styles.container}
    data={props.pets}
    renderItem={pet => <PetItem {...pet.item} />}
    keyExtractor={pet => pet.id.toString()}
  />
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center'
  },
});

export default PetList;
