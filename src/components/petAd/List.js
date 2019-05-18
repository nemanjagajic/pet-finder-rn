import React, {Component} from 'react';
import { FlatList, StyleSheet, RefreshControl } from 'react-native';
import PetAdItem from './Item';

class PetAdList extends Component {
  state = {
    refreshing: false
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.onRefresh();
    this.setState({ refreshing: false });
  };

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={this.props.pets}
        renderItem={petAd => <PetAdItem {...petAd.item} />}
        keyExtractor={petAd => petAd.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center'
  },
});

export default PetAdList;
