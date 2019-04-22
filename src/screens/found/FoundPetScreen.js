import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

import PickedLocation from "../../components/map/PickedLocation";
import ShowImage from "../../components/image/ShowImage";
import { Ionicons } from '@expo/vector-icons';
import userService from '../../services/api/UserService';
import { bindActionCreators } from "redux";
import { fetchPetComments } from "../../store/pet/actions";

class FoundPetScreen extends Component {
  state = {
    showMap: false,
    user: null
  };

  async componentDidMount() {
    const response = await userService.getById(this.props.navigation.state.params.userId);
    this.setState({
      user: response.data[0]
    });

    setTimeout(() => {
      this.setState({
        showMap: true
      });
    }, 250);
  }

  openComments = petId => {
    this.props.fetchPetComments(petId);
  };

  render() {
    const pet = this.props.navigation.state.params;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.row}>
          {
            this.state.showMap ?
              <PickedLocation
                focusedLocation={pet.location}
              />
              :
              <View>
                <View style={styles.mapPlaceHolder}/>
              </View>
          }
          <ShowImage image={pet.image}/>
          <View style={styles.info}>
            <View style={styles.infoItemPair}>
              <View style={styles.infoItem}>
                <Ionicons name='ios-navigate' size={18} color={'#26A69A'}/>
                <Text style={styles.infoText}>
                  {`${pet.locationInfo.street} ${pet.locationInfo.name}`}
                </Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons name='md-map' size={18} color={'#26A69A'}/>
                <Text style={styles.infoText}>
                  {`${pet.locationInfo.city}, ${pet.locationInfo.country}`}
                </Text>
              </View>
            </View>
            <View style={styles.infoItemPair}>
              <View style={styles.infoItem}>
                <Ionicons name='ios-time' size={18} color={'#26A69A'}/>
                <Text style={styles.infoText}>
                  {pet.createdAt}
                </Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons name='md-contact' size={18} color={'#26A69A'}/>
                <Text style={styles.infoText}>
                  {this.state.user && this.state.user.username}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>{pet.description}</Text>
          </View>
          <TouchableOpacity
            style={styles.commentsButton}
            onPress={() => this.openComments(pet.id)}
          >
            <Text style={styles.commentsText}>Comments (4)</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  row: {
    width: '80%'
  },
  mapPlaceHolder: {
    width: '100%',
    height: 180,
    marginTop: 20,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: '#d9d9d9',
  },
  info: {
    flexDirection: 'column',
    marginTop: 15,
  },
  infoText: {
    color: '#8c8c8c',
    fontSize: 12,
    textAlign: 'center',
  },
  infoItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    padding: 5,
    width: '48%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  infoItemPair: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  description: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    minHeight: 80
  },
  descriptionText: {
    color: '#8c8c8c',
    fontSize: 15
  },
  commentsButton: {
    width: '100%',
    height: 40,
    marginBottom: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2'
  },
  commentsText: {
    color: '#8c8c8c',
    fontSize: 14,
    textAlign: 'center'
  }
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchPetComments
  },
  dispatch,
);

export default connect(null, mapDispatchToProps)(FoundPetScreen);
