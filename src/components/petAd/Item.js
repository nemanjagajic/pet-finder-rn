import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mainStackNavigate } from '../../services/Navigation';
import { BASE } from '../../services/api/constants';

const PetAdItem = props => (
  <TouchableWithoutFeedback
    onPress={() => mainStackNavigate('PetAdDetails', {
      id: props.id,
      userId: props.userId,
      image: props.image,
      locationInfo: props.locationInfo,
      phoneNumber: props.phoneNumber,
      description: props.description,
      createdAt: props.created_at,
      type: props.type,
      fullName: props.fullName
    })}
  >
    <View style={styles.container}>
      <View style={styles.infoAndImgContainer}>
        <View style={styles.info}>
          <View style={styles.infoItem}>
            <Ionicons name="md-map" size={18} color="#26A69A" />
            <Text style={[styles.infoText, { marginLeft: 6 }]}>
              {props.locationInfo}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="ios-call" size={18} color="#26A69A" />
            <Text style={[styles.infoText, { marginLeft: 6 }]}>
              {props.phoneNumber}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="ios-time" size={18} color="#26A69A" />
            <Text style={styles.infoText}>
              {props.created_at.substr(0, props.created_at.length - 3)}
            </Text>
          </View>
        </View>
        {
          props.image
            ? (
              <Image
                source={{ uri: `${BASE}/storage/images/pets/${props.image}` }}
                style={styles.image}
              />
            )
            : (
              <View style={styles.imagePlaceholder}>
                <Ionicons name="md-images" color="white" size={40} />
              </View>
            )
        }
      </View>
      <Text style={styles.description}>
        {props.description}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    height: 130,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 1,
    marginBottom: 10,
  },
  infoAndImgContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: '85%',
    borderRadius: 10,
    marginRight: 10
  },
  imagePlaceholder: {
    width: 120,
    height: '85%',
    borderRadius: 10,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  description: {
    color: '#999999',
    flex: 1,
    maxHeight: 20,
    width: 290
  },
  info: {
    flex: 1,
    height: '85%',
    flexDirection: 'column',
    paddingBottom: 2,
    marginTop: 5,
  },
  infoText: {
    color: '#999999',
    marginLeft: 5,
    marginRight: 5,
    fontSize: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
    marginRight: 30
  },
});

export default PetAdItem;
