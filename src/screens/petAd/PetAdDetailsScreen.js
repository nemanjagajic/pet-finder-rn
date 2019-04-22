import React, { Component } from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';

import ShowImage from "../../components/image/ShowImage";
import { Ionicons } from '@expo/vector-icons';
import userService from '../../services/api/UserService';

class PetAdDetailsScreen extends Component {
  state = {
    user: null
  };

  async componentDidMount() {
    const response = await userService.getById(this.props.navigation.state.params.userId);
    this.setState({
      user: response.data[0]
    });
  }

  render() {
    const pet = this.props.navigation.state.params;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.row}>
          <ShowImage image={pet.image}/>
          <View style={styles.infoFullLine}>
            <Text
              style={[styles.infoText, {fontSize: 14}]}
            >
              {pet.type === 1 ? 'Lost pet' : 'Pet to adopt'}
            </Text>
          </View>
          <View style={styles.info}>
            <View style={styles.infoItemPair}>
              <View style={styles.infoItem}>
                <Ionicons name='md-map' size={18} color={'#26A69A'}/>
                <Text style={styles.infoText}>
                  {pet.locationInfo}
                </Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons name='ios-call' size={18} color={'#26A69A'}/>
                <Text style={styles.infoText}>
                  {pet.phoneNumber}
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
          <TouchableOpacity style={styles.commentsButton}>
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
    alignItems: 'center'
  },
  row: {
    width: '80%'
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
  infoFullLine: {
    width: '100%',
    marginTop: 15,
    padding: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  description: {
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
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

export default PetAdDetailsScreen;
