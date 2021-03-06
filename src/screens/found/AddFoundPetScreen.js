/* eslint-disable react-native/split-platform-components,max-len */
import React, { Component } from 'react';
import { View, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView,
  Platform, Text, ToastAndroid, AlertIOS } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { Location } from 'expo';
import { bindActionCreators } from "redux";

import BottomButton from "../../components/UI/BottomButton";
import PickLocation from "../../components/map/PickLocation";
import AddImage from "../../components/image/AddImage";
import ButtonCustom from "../../components/UI/ButtonCustom";
import { postFoundPet } from "../../store/pet/actions";


class AddFoundPetScreen extends Component {
  state = {
    showMap: false,
    focusedLocation: {
      latitude: 45.2524671,
      longitude: 19.8378565,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121
    },
    locationInfo: {
      street: 'Ulica Jevrejska',
      name: Platform.OS === 'android' ? '38' : 'Ulica Jevrejska 36-42',
      country: 'Serbia',
      city: 'Novi Sad'
    },
    image: null,
    description: ''
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showMap: true
      });
    }, 250);
  }

  handleLocationPicked = coords => {
    this.setState(prevState => ({
      focusedLocation: {
        ...prevState.focusedLocation,
        latitude: coords.latitude,
        longitude: coords.longitude
      }
    }));

    this.setLocationInformation(coords);
  };

  async setLocationInformation(coords) {
    const {latitude, longitude} = coords;
    let locationInfo = await Location.reverseGeocodeAsync({latitude, longitude});

    this.setState({locationInfo: locationInfo[0]});
  }

  handleImageAdded = image => {
    this.setState({image});
  };

  addPet = () => {
    const {focusedLocation, locationInfo, image, description} = this.state;

    if (description === '') {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Description cannot be empty', ToastAndroid.SHORT);
      } else {
        AlertIOS.alert('Empty description', 'Description cannot be empty');
      }
      return;
    }

    const pet = {
      user: this.props.loggedUser,
      location: focusedLocation,
      locationInfo,
      image,
      description,
      date: new Date()
    };

    this.props.postFoundPet(pet);
    this.props.navigation.pop();
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
        keyboardVerticalOffset={100}
      >
        <ScrollView style={{width: '100%'}}>
          <View style={styles.row}>
            <View style={styles.centeredContent}>
              {
                this.state.showMap ?
                  <PickLocation
                    focusedLocation={this.state.focusedLocation}
                    onLocationPicked={this.handleLocationPicked}
                  />
                  :
                  <View>
                    <View style={styles.mapPlaceHolder}/>
                    <ButtonCustom
                      color={'#808080'}
                      width={'100%'}
                      height={50}
                    >
                                          Locate me
                    </ButtonCustom>
                  </View>
              }
              <View style={styles.pickedAddress}>
                <Ionicons name='md-locate' size={18} color={'#26A69A'}/>
                <Text style={{color: '#8c8c8c', marginLeft: 5}}>
                  {`${Platform.OS === 'android' ? this.state.locationInfo.street : ''} ${this.state.locationInfo.name}, ${this.state.locationInfo.city}, ${this.state.locationInfo.country}`}
                </Text>
              </View>
              <AddImage
                onImageAdded={this.handleImageAdded}
              />
              <TextInput
                multiline={true}
                style={styles.description}
                placeholder='Description'
                onChangeText={text => this.setState({description: text})}
              />
              <View style={styles.buttonWrapper}>
                <BottomButton
                  color={'#009688'}
                  icon={'md-checkmark'}
                  onPress={this.addPet}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  row: {
    width: '100%',
    alignItems: 'center'
  },
  centeredContent: {
    width: '80%'
  },
  description: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 150,
    textAlignVertical: 'top',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    color: '#737373'
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
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  pickedAddress: {
    width: '100%',
    padding: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    marginTop: 5,
    flexDirection: 'row',
    backgroundColor: '#e6e6e6',
    alignItems: 'center'
  }
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      postFoundPet
    },
    dispatch
  );

const mapStateToProps = state => ({
  loggedUser: state.auth.loggedUser
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFoundPetScreen);