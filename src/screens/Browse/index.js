import React, {Component} from 'react';
import {Block, TextView, Button, Card, Badge} from '../../components';
import styles from './styles';
import {Image, TouchableOpacity, ScrollView} from 'react-native';
import {mocks} from '../../constants';
import {fetchMovies} from '../../actions/channelAction';
import {fetchTheMovieDb} from '../../actions/themoviedbAction';
import {connect} from 'react-redux';

const channelJson = require('../../assets/channels/channel.json');

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Channel',
      categories: [],
      channels: [],
      channelJson: [],
    };
  }
  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchTheMovieDb();
  }

  handleTab = tab => {
    const filtered =
      channelJson &&
      channelJson.filter(category => category.tags.includes(tab.toLowerCase()));
    this.setState({active: tab, channelJson: filtered});
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
    const {profile, navigation, channels, themovies} = this.props;
    const tabs = ['Channel', 'Vod', 'VodNew'];
    const {channelJson} = this.state;
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
          {tabs.map(tab => this.renderTab(tab))}
        </Block>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.scollView}>
          <Block flex={false} row space="between" style={styles.categories}>
            {channelJson.map(category => (
              // TODO: link to others page
              // navigation.navigate('Explore',{category})}
              <TouchableOpacity
                key={category.number}
                onPress={() => navigation.navigate('VideoView', {category})}>
                <Card center middle shadow style={styles.category}>
                  {/* <Badge
                    margin={[0, 0, 15]}
                    size={50}
                    color="rgba(41,216,143,0.20">
                    <Image
                      style={{width: 50, height: 50}}
                      source={{
                        uri: domainImage + category.backdrop_path,
                      }}
                    />
                  </Badge> */}
                  <TextView primary center>
                    {category.name}
                  </TextView>
                  {/* <TextView gray caption>
                    {category.title}
                  </TextView> */}
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const mapStateToProps = ({channels, themovies}) => {
  return {
    channels: channels.link,
    themovies: themovies.themovies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchTheMovieDb: () => dispatch(fetchTheMovieDb()),
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
