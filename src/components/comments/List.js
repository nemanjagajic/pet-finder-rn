import React from 'react';
import { FlatList, StyleSheet, Dimensions, View, Text } from 'react-native';
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import { Ionicons } from '@expo/vector-icons';

const CommentsList = props => (
  <View>
    {props.comments.length > 0 ? (
      <FlatList
        contentContainerStyle={styles.container}
        data={props.comments}
        renderItem={comment => <Comment {...comment} />}
        keyExtractor={comment => comment.id.toString()}
      />
    ) : (
      <View style={styles.container}>
        <Ionicons name="ios-chatbubbles" color="#bfbfbf" size={40}/>
        <Text style={styles.emptyListText}>No comments added yet</Text>
      </View>
    )}
    <CommentInput
      petId={props.petId}
      isPetAd={props.isPetAd}
      disabled={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingTop: 160,
    paddingBottom: 15,
    alignItems: 'center'
  },
  emptyListText: {
    color: '#b3b3b3',
  }
});

export default CommentsList;
