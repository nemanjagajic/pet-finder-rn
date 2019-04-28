import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

class Comment extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.user}>{this.props.item.fullName}{'\n'}</Text>
          <Text style={{color: '#666666'}}>{this.props.item.content}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    color: '#666666',
    padding: 15
  },
  user: {
    color: '#26A69A'
  }
});

export default Comment;
