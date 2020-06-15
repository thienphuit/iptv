import React, {Component} from 'react';
import {Block, TextView, Button, Card, Badge} from '../../components';
import s from './styles';
import {Image, TouchableOpacity, ScrollView} from 'react-native';
import {mocks} from '../../constants';
import {fetchMovies} from '../../actions/channelAction';
import {connect} from 'react-redux';

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Product',
      categories: [],
      channels: [],
    };
  }
  componentDidMount() {
    this.props.fetchMovies();
    this.setState({categories: this.props.categories});
  }

  handleTab = tab => {
    const {categories} = this.props;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase()),
    );
    this.setState({active: tab, categories: filtered});
  };
  renderTab = tab => {
    const {active} = this.state;
    const isActive = active === tab;
    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[s.tab, isActive ? s.active : null]}>
        <TextView size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </TextView>
      </TouchableOpacity>
    );
  };

  render() {
    const {profile, navigation, channels} = this.props;
    const {categories} = this.state;
    const tabs = ['Product', 'Inspirations', 'Shop'];
    //console.log('aaaaaa', channels);
    return (
      <Block>
        <Block flex={false} row center space="between" style={s.header}>
          <TextView h1 bold>
            Browse
          </TextView>
          <Button onPress={() => navigation.navigate('Settings')}>
            <Image source={profile.avatar} style={s.avatar} />
          </Button>
        </Block>
        <Block flex={false} row style={s.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </Block>
        <ScrollView showsHorizontalScrollIndicator={false} style={s.scollView}>
          <Block flex={false} row space="between" style={s.categories}>
            {channels.map(category => (
              // TODO: link to others page
              // navigation.navigate('Explore',{category})}
              <TouchableOpacity
                key={category.id}
                onPress={() => navigation.navigate('VideoView', {category})}>
                <Card center middle shadow style={s.category}>
                  <Badge
                    margin={[0, 0, 15]}
                    size={50}
                    color="rgba(41,216,143,0.20">
                    <Image source={category.image} />
                  </Badge>
                  <TextView medium height={20}>
                    {category.name}
                  </TextView>
                  <TextView gray caption>
                    {category.title}
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

const mapStateToProps = ({channels}) => {
  return {
    channels: channels.link,
  };
};

const mapDispatchToProps = {
  fetchMovies,
};

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Browse);
