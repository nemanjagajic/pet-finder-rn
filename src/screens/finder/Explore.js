import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text} from 'react-native';
import FloatingButton from "../../components/UI/FloatingButton";
import {Ionicons} from '@expo/vector-icons';

class Explore extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerCenter}>
                    <Ionicons name={'md-paw'} color={'#bfbfbf'} size={40}/>
                    <Text style={styles.emptyListText}>No pets added yet</Text>
                </View>
                <FloatingButton
                    onPress={() => this.props.navigation.navigate('AddPet')}
                    color={'#009688'}
                    icon={'md-add'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyListText: {
        color: '#b3b3b3'
    }
});

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Explore);
