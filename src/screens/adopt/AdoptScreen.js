import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, StyleSheet, Text, ActivityIndicator,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { Ionicons } from '@expo/vector-icons';
import PetAdList from '../../components/petAd/List';
import { fetchAdoptingPets } from '../../store/pet/actions';
import FloatingButton from '../../components/UI/FloatingButton';

class AdoptScreen extends Component {
  componentDidMount() {
    this.props.fetchAdoptingPets();
  }

  render() {
    return (
      <View style={styles.container}>
        {
          !this.props.pets.isFetchingAdoptingPets && (
            this.props.pets.adoptingPets.length > 0
              ? <PetAdList pets={this.props.pets.adoptingPets} />
              : (
                <View style={styles.containerCenter}>
                  <Ionicons name="md-paw" color="#bfbfbf" size={40} />
                  <Text style={styles.emptyListText}>No pets added yet</Text>
                </View>
              )
          )
        }
        {
          this.props.pets.isFetchingAdoptingPets && (
            <ActivityIndicator
              style={styles.containerCenter}
              size="large"
              color="#009688"
            />
          )
        }
        <FloatingButton
          onPress={() => this.props.navigation.navigate('AddPetAd', { type: 2 })}
          color="#009688"
          icon="md-add"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    color: '#b3b3b3',
  },
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchAdoptingPets,
  },
  dispatch,
);

const mapStateToProps = state => ({
  auth: state.auth,
  pets: state.pets,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdoptScreen);
