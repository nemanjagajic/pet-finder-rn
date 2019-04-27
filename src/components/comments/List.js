import React from 'react';
import { FlatList, StyleSheet, Dimensions, View } from 'react-native';
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentsList = props => (
  <View>
    <FlatList
      contentContainerStyle={styles.container}
      data={props.comments}
      renderItem={comment => <Comment {...comment} />}
      keyExtractor={comment => comment.id.toString()}
    />
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
  }
});

export default CommentsList;
