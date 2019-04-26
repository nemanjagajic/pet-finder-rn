import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {bindActionCreators} from "redux";
import {fetchPetComments} from "../../store/pet/actions";

class CommentsScreen extends Component {
  componentDidMount() {
    this.props.fetchPetComments(this.props.navigation.getParam('petId'));
  }

  render() {
    return (
      <View>
        {console.log('isFetching: ' + this.props.isFetching)}
        {console.log(this.props.comments)}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.items,
    isFetching: state.comments.isFetching
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchPetComments
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsScreen);
