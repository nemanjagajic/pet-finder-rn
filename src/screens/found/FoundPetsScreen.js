import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, StyleSheet, Text, ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { bindActionCreators } from 'redux';
import FloatingButton from '../../components/UI/FloatingButton';
import PetList from '../../components/pet/List';
import { setMainStackNavigator } from '../../services/Navigation';
import { fetchPets } from '../../store/pet/actions';

class FoundPetsScreen extends Component {
  componentDidMount() {
    setMainStackNavigator(this.props.navigation);
    this.props.fetchPets();
  }

  render() {
    return (
      <View style={styles.container}>
        {
          !this.props.pets.isFetchingPets && (
            this.props.pets.items.length > 0
              ? <PetList pets={this.props.pets.items} />
              : (
                <View style={styles.containerCenter}>
                  <Ionicons name="md-paw" color="#bfbfbf" size={40} />
                  <Text style={styles.emptyListText}>No pets added yet</Text>
                </View>
              )
          )
        }
        {
          this.props.pets.isFetchingPets && (
            <ActivityIndicator
              style={styles.containerCenter}
              size="large"
              color="#009688"
            />
          )
        }
        <FloatingButton
          onPress={() => this.props.navigation.navigate('AddPet')}
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
    fetchPets,
  },
  dispatch,
);

const mapStateToProps = state => ({
  auth: state.auth,
  pets: state.pets,
});

export default connect(mapStateToProps, mapDispatchToProps)(FoundPetsScreen);
