import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class FoundPet extends Component {
    render() {
        const pet = this.props.navigation.state.params;

        return (
            <Text style={styles.container}>
                {pet.description}
            </Text>
        );
    }
}

styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        color: '#333'
    }
});

export default FoundPet;
