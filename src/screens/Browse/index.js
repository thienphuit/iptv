import React, {Component} from 'react';
import {Block, TextView, Button, Card} from '../../components';
import styles from './styles';
import {Image, TouchableOpacity, ScrollView} from 'react-native';
import {mocks} from '../../constants';
import {getDataFromFile} from '../../actions/updateChannel';
import {connect} from 'react-redux';

// const channelJson = require('../../assets/channels/channel.json');
const CHANNEL_TABS = ['Channel', 'Vod', 'VodNew'];

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Channel',
      categories: [],
      channels: [],
    };
  }
  componentDidMount() {
    this.props.getDataFromFile();
    this.filteredChannel(CHANNEL_TABS[0]);
  }

  filteredChannel = async tab => {
    const filtered = await this.props.channels.filter(category =>
      category.tags.includes(tab.toLowerCase()),
    );
    this.setState({channels: filtered});
  };

  handleTab = tab => {
    this.setState({active: tab});
  };
  renderTab = tab => {
    const {active} = this.state;
    const isActive = active === tab;
    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}>
        <TextView size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </TextView>
      </TouchableOpacity>
    );
  };

  render() {
    const {profile, navigation} = this.props;
    const {channels} = this.state;

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <TextView h1 bold>
            Browse
          </TextView>
          <Button onPress={() => navigation.navigate('Settings')}>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>
        <Block flex={false} row style={styles.tabs}>
          {CHANNEL_TABS.map(tab => this.renderTab(tab))}
        </Block>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.scollView}>
          <Block flex={false} row space="between" style={styles.categories}>
            {channels.map(category => (
              // TODO: link to others page
              // navigation.navigate('Explore',{category})}
              <TouchableOpacity
                key={category.number}
                onPress={() => navigation.navigate('VideoView', {category})}>
                <Card center middle shadow style={styles.category}>
                  <TextView primary center>
                    {category.name}
                  </TextView>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const mapStateToProps = ({updateChannel}) => {
  return {
    channels: updateChannel.channels,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDataFromFile: () => dispatch(getDataFromFile()),
  };
};

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Browse);
