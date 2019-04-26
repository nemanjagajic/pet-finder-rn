import React from 'react';
import { FlatList, StyleSheet, Dimensions } from 'react-native';
import Comment from "./Comment";

const CommentsList = props => (
  <FlatList
    contentContainerStyle={styles.container}
    data={props.comments}
    renderItem={comment => <Comment {...comment} />}
    keyExtractor={comment => comment.id.toString()}
  />
);

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center'
  }
});

export default CommentsList;
