import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

class AddPet extends Component {
    render() {
        return (
            <Text style={styles.container}>Add Pet</Text>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#f2f2f2'
   }
});

export default AddPet;