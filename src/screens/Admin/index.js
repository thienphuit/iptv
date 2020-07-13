import React, {Component} from 'react';
import {Block, TextView, MyModal, Card} from '../../components';
import {connect} from 'react-redux';
import {updateChannelLocal, saveFileJson} from '../../actions/updateChannel';
import styles from './styles';
import {FlatList, TouchableHighlight, SafeAreaView} from 'react-native';
import {SearchBar} from 'react-native-elements';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendTitle: '',
      modalVisible: false,
      currentChannel: {
        name: '',
        url: '',
        description: '',
        tags: [],
        search: '',
        query: '',
      },
      channels: this.props.channels,
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
        <Block style={{marginBottom: 10, marginTop: 10}}>
          <Card height={24} center>
            <TextView>{item.name}</TextView>
          </Card>
        </Block>
      </TouchableHighlight>
    );
  };
  handleSearch = text => {
    //passing the inserted text in textinput
    const channels = this.props.channels;
    const newData = channels.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    //console.log("newData",newData);
    this.setState({search: text, channels: newData});
  };

  renderHeader = () => {
    return (
      <SearchBar
        value={this.state.search}
        lightTheme
        round
        onChangeText={text => this.handleSearch(text)}
      />
    );
  };
  renderSeparator = () => {
    return <Block style={{height: 1, backgroundColor: '#CED0CE'}} />;
  };

  render() {
    const channels = this.props.channels;
    // const this.state.channels = channels;
    return (
      <Block>
        <Block center style={styles.title}>
          <TextView bold h1>
            Admin
          </TextView>
        </Block>
        <Block padding={10}>
          <SafeAreaView>
            <FlatList
              data={this.state.channels}
              renderItem={item => this.itemChannel(item)}
              keyExtractor={item => item.number}
              extraData={this.state}
              ListHeaderComponent={this.renderHeader}
              ItemSeparatorComponent={this.renderSeparator}
            />
            <MyModal
              modalVisible={this.state.modalVisible}
              setModalVisible={this.setModalVisible}
              channel={this.state.currentChannel}
              saveChannel={this.saveChannel}
            />
          </SafeAreaView>
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
  saveFileJson,
};

export default connect(
  mapStatetoProp,
  mapDispatchToProp,
)(Admin);
