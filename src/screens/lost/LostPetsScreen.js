import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, StyleSheet, Text, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { Ionicons } from '@expo/vector-icons';
import PetAdList from '../../components/petAd/List';
import { fetchLostPets } from '../../store/pet/actions';
import FloatingButton from '../../components/UI/FloatingButton';

class FoundPetsScreen extends Component {
  componentDidMount() {
    this.props.fetchLostPets();
  }

  render() {
    return (
      <View style={styles.list}>
        {
          this.props.pets.isAddingPetAd &&
          <View>
            <Text style={styles.processingText}>Processing post...</Text>
            <ActivityIndicator
              size={'small'}
              color={'#808080'}
            />
          </View>
        }
        {
          !this.props.pets.isFetchingLostPets && (
            this.props.pets.lostPets.length > 0
              ? <PetAdList
                pets={this.props.pets.lostPets}
                onRefresh={this.props.fetchLostPets}
              />
              : (
                <TouchableOpacity
                  style={styles.containerCenter}
                  onPress={this.props.fetchLostPets}
                >
                  <Ionicons name="md-paw" color="#bfbfbf" size={40} />
                  <Text style={styles.emptyListText}>No pets added yet</Text>
                  <Text style={styles.emptyListTextDesc}>tap paw to refresh</Text>
                </TouchableOpacity>
              )
          )
        }
        <View style={styles.container}>
          {
            this.props.pets.isFetchingLostPets && (
              <ActivityIndicator
                style={styles.indicator}
                size="large"
                color="#009688"
              />
            )
          }
        </View>
        <FloatingButton
          onPress={() => this.props.navigation.navigate('AddPetAd', { type: 1 })}
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
    marginTop: 120
  },
  emptyListText: {
    color: '#b3b3b3',
  },
  emptyListTextDesc: {
    fontSize: 12,
    color: '#cccccc',
  },
  list: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  indicator: {
    marginTop: 50
  },
  processingText: {
    paddingTop: 20,
    paddingBottom: 5,
    textAlign: 'center',
    color: '#808080'
  }
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchLostPets,
  },
  dispatch,
);

const mapStateToProps = state => ({
  auth: state.auth,
  pets: state.pets,
});

export default connect(mapStateToProps, mapDispatchToProps)(FoundPetsScreen);
