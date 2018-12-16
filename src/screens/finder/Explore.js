import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {bindActionCreators} from "redux";

import FloatingButton from "../../components/UI/FloatingButton";
import PetList from "../../components/pet/List";
import {setNavigation} from "../../store/navigation/actions";

class Explore extends Component {
    componentDidMount() {
        this.props.setNavigation(this.props.navigation);
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.pets.items.length > 0
                        ?
                        <PetList pets={this.props.pets.items}/>
                        :
                        <View style={styles.containerCenter}>
                            <Ionicons name={'md-paw'} color={'#bfbfbf'} size={40}/>
                            <Text style={styles.emptyListText}>No pets added yet</Text>
                        </View>
                }
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
    },
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setNavigation
        },
        dispatch
    );

const mapStateToProps = state => ({
    auth: state.auth,
    pets: state.pets
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
