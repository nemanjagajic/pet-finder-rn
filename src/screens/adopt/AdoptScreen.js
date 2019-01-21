import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text} from 'react-native';
import PetAdList from "../../components/petAd/List";
import {bindActionCreators} from "redux";
import {fetchAdoptingPets} from "../../store/pet/actions";
import FloatingButton from "../../components/UI/FloatingButton";
import {Ionicons} from '@expo/vector-icons';

class AdoptScreen extends Component {
    componentDidMount() {
        this.props.fetchAdoptingPets();
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.adoptingPets.length > 0
                        ?
                        <PetAdList pets={this.props.adoptingPets} />
                        :
                        <View style={styles.containerCenter}>
                            <Ionicons name={'md-paw'} color={'#bfbfbf'} size={40}/>
                            <Text style={styles.emptyListText}>No pets added yet</Text>
                        </View>
                }
                <FloatingButton
                    onPress={() => this.props.navigation.navigate('AddPetAd')}
                    color={'#009688'}
                    icon={'md-add'}
                />
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
            fetchAdoptingPets
        },
        dispatch
    );

const mapStateToProps = state => ({
    auth: state.auth,
    adoptingPets: state.pets.adoptingPets
});

export default connect(mapStateToProps, mapDispatchToProps)(AdoptScreen);