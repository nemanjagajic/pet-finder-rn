import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import PetAdList from "../../components/petAd/List";
import {bindActionCreators} from "redux";
import {fetchLostPets} from "../../store/pet/actions";
import FloatingButton from "../../components/UI/FloatingButton";

class FoundPetsScreen extends Component {
    componentDidMount() {
        this.props.fetchLostPets();
    }

    render() {
        return (
            <View style={styles.container}>
                {console.log(this.props.lostPets)}
                <PetAdList pets={[]} />
                <FloatingButton
                    onPress={() => this.props.navigation.navigate('AddLostPet')}
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
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchLostPets
        },
        dispatch
    );

const mapStateToProps = state => ({
    auth: state.auth,
    lostPets: state.pets.lostPets
});

export default connect(mapStateToProps, mapDispatchToProps)(FoundPetsScreen);