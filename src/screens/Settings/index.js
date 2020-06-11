import React, {Component} from 'react';
import {Block, TextView, Button, Divider} from '../../components';
import s from './styles';
import {Image, ScrollView, TextInput, Switch} from 'react-native';
import Slider from '@react-native-community/slider';
import {theme, mocks} from '../../constants';
import userProfile from '../../utils/apiUser';
import {connect} from 'react-redux';
import {fetchUser} from '../../actions/userAction';
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: null,
      budget: 800,
      profile: {},
      monthly: 1700,
      notifications: true,
      newsletter: false,
      user: {},
    };
  }

  componentDidMount() {
    userProfile().then(json => {
      //console.log(json[0]);
      /*   this.setState({
          user: json[0]
      }) */
      this.props.getUser(json[0]);
    });
    // this.setState({profile: this.props.profile});
  }
  toggleEdit(name) {
    const {editing} = this.state;
    this.setState({editing: !editing ? name : null});
  }
  handleEdit(name, text) {
    const {profile} = this.props;
    profile[name] = text;
    this.setState({profile});
  }
  renderEdit(name) {
    const {editing} = this.state;
    const {profile, user} = this.props;
    if (editing === name) {
      return (
        <TextInput
          defaultValue={user.username}
          onChangeText={text => this.handleEdit([name], text)}
        />
      );
    }
  }
  render() {
    const {editing} = this.state;
    const {profile, user} = this.props;
    //console.log('profile',user);
    return (
      <Block>
        <Block flex={false} row center space="between" style={s.header}>
          <TextView h1 bold>
            Setttings
          </TextView>
          <Button>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={s.avatar}
            />
          </Button>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={s.inputs}>
            <Block row space="between" margin={[10, 0]} style={s.inputRow}>
              <Block>
                <TextView gray2 style={{marginBottom: 10}}>
                  UserName
                </TextView>
                {this.renderEdit('username')}
              </Block>
              <TextView
                medium
                secondary
                onPress={() => this.toggleEdit('username')}>
                {editing === 'username' ? 'Save' : 'Edit'}
              </TextView>
            </Block>
            <Block row space="between" margin={[10, 0]} style={s.inputRow}>
              <Block>
                <TextView gray2 style={{marginBottom: 10}}>
                  Location
                </TextView>
                {this.renderEdit('location')}
              </Block>
              <TextView
                medium
                secondary
                onPress={() => this.toggleEdit('location')}>
                {editing === 'location' ? 'Save' : 'Edit'}
              </TextView>
            </Block>
            <Block row space="between" margin={[10, 0]} style={s.inputRow}>
              <Block>
                <TextView gray2 style={{marginBottom: 10}}>
                  E-mail
                </TextView>
                <TextView bold>{user.email}</TextView>
              </Block>
            </Block>
          </Block>
          <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
          <Block style={s.sliders}>
            <Block margin={[10, 0]}>
              <TextView gray2 style={{marginBottom: 10}}>
                Budget
              </TextView>
              <Slider
                minimunValue={0}
                maximunValue={1000}
                style={{height: 19}}
                thumsStyle={s.thumb}
                trackStyle={{height: 6, borderRadius: 6}}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                value={this.state.budget}
                onValueChange={value => this.setState({budget: value})}
              />
              <TextView gray caption right>
                1000
              </TextView>
            </Block>
            <Block margin={[10, 0]}>
              <TextView gray2 style={{marginBottom: 10}}>
                Monthly Cap
              </TextView>
              <Slider
                minimunValue={0}
                maximunValue={1000}
                style={{height: 19}}
                thumsStyle={s.thumb}
                trackStyle={{height: 6, borderRadius: 6}}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                value={this.state.budget}
                onValueChange={value => this.setState({monthly: value})}
              />
              <TextView caption gray right>
                $5000
              </TextView>
            </Block>
          </Block>
          <Divider />
          <Block style={s.toggles}>
            <Block
              row
              center
              space="between"
              style={{marginBottom: theme.sizes.base * 2}}>
              <TextView gray2>Notificaitons</TextView>
              <Switch
                value={this.state.notifications}
                onValueChange={value => this.setState({notifications: value})}
              />
            </Block>
            <Block
              row
              center
              space="between"
              style={{marginBottom: theme.sizes.base * 2}}>
              <TextView gray2>NewLetter</TextView>
              <Switch
                value={this.state.newsletter}
                onValueChange={value => this.setState({newsletter: value})}
              />
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}
const mapStatetoProps = state => {
  return {
    user: state.user,
  };
};
const mapDispathToProp = (dispath, props) => {
  return {
    getUser: user => {
      dispath(fetchUser(user));
    },
  };
};
Settings.defaultProps = {
  profile: mocks.profile,
};
export default connect(
  mapStatetoProps,
  mapDispathToProp,
)(Settings);
