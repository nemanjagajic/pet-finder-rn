import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BASE } from '../../services/api/constants';

const ShowImage = props => (
  <View style={styles.container}>
    <View style={styles.imagePlaceholder}>
      {
        props.image === null || props.image === ''
          ? <Ionicons name="md-images" color="white" size={50} />
          : (
            <Image
              source={{ uri: `${BASE}/storage/images/${props.image}` }}
              style={styles.image}
            />
          )
      }
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  imagePlaceholder: {
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    width: '100%',
    height: 180,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    borderRadius: 10,
    height: 180,
  },
});

export default ShowImage;
