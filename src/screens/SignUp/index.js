import React, {Component} from 'react';
import {Button, TextView, Block, Input} from '../../components';
import {theme} from '../../constants';
import s from './styles';
import {
  StyleSheet,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

export default class SignUp extends Component {
  state = {
    errors: [],
    email: null,
    password: null,
    username: null,
  };
  handleSignUp() {
    console.log('SignUp');
    const {navigation} = this.props;
    const {email, username, password} = this.state;
    const errors = [];
    Keyboard.dismiss();
    this.setState({loading: true});

   // if (!email) errors.push('email');
   // if (!username) errors.push('username');
   // if (!password) errors.push('password');

    this.setState({errors, loading: false});

    if (!errors.length) {
      Alert.alert(
        'Success',
        'Your accout has been created',
        [
          {
            text: 'Countinue',
            onPress: () => {
              navigation.navigate('Browse');
            },
          },
        ],
        {cancelable: false},
      );
    }
  }
  render() {
    const {loading, errors} = this.state;
    const hasErrors = key => (errors.includes(key) ? s.hastErrors : null);
    const {navigation} = this.props;
    return (
      <KeyboardAvoidingView style={s.signup} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <TextView h1 bold>
            Sign Up
          </TextView>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors('email')}
              style={s.input}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <Input
              label="Username"
              error={hasErrors('username')}
              style={[s.input, hasErrors('username')]}
              defaultValue={this.state.username}
              onChangeText={text => this.setState({username: text})}
            />
            <Input
              secure
              label="PassWord"
              error={hasErrors('password')}
              style={s.input}
              defaultValue={this.state.password}
            />
            <Button gradient onPress={() => this.handleSignUp()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <TextView bold center white>
                  Sign Up
                </TextView>
              )}
            </Button>

            <Button onPress={() => navigation.navigate('Login')}>
              <TextView gray caption center style={s.textDeco}>
                Back to Login
              </TextView>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}
