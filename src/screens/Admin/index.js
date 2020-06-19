import React, {Component} from 'react';
import {Block, TextView, MyModal} from '../../components';
import {connect} from 'react-redux';
import {updateChannelLocal} from '../../actions/updateChannel';
import styles from './styles';
import {FlatList, TouchableHighlight} from 'react-native';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendTitle: '',
      modalVisible: false,
      currentChannel: {
        name: '',
        url: '',
        tags: [],
      },
    };
    this.getChannel;
    this.saveChannel;
  }

  saveChannel = newChannel => {
    this.props.updateChannelLocal(newChannel);
    this.setModalVisible(false);
  };

  getChannel = item => {
    this.setState({
      modalVisible: true,
      currentChannel: item,
    });
  };
  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  itemChannel = ({item}) => {
    return (
      <TouchableHighlight onPress={() => this.getChannel(item)}>
        <Block>
          <TextView>{item.name}</TextView>
        </Block>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <Block>
        <Block center style={styles.title}>
          <TextView bold h1>
            Admin
          </TextView>
          <FlatList
            data={this.props.channels}
            renderItem={item => this.itemChannel(item)}
            keyExtractor={item => item.number}
            extraData={this.state}
          />
          <MyModal
            modalVisible={this.state.modalVisible}
            setModalVisible={this.setModalVisible}
            channel={this.state.currentChannel}
            saveChannel={this.saveChannel}
          />
        </Block>
      </Block>
    );
  }
}
const mapStatetoProp = ({updateChannel}) => ({
  channels: updateChannel.channels,
});

const mapDispatchToProp = {
  updateChannelLocal,
};

export default connect(
  mapStatetoProp,
  mapDispatchToProp,
)(Admin);
