import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class FoundPetsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Lost pets</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    }
});

export default FoundPetsScreen;