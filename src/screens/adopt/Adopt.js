import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Adopt extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Adopt</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       paddingTop: 20
   }
});

export default Adopt;