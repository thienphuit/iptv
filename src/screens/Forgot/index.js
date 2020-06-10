import React, {Component} from 'react';
import {Block, TextView, Input, Button} from '../../components';
import {theme} from '../../constants';
import {
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';
import s from './styles';

const VALID_EMAIL = "thienphu";

export default class Forgot extends Component {
  state = {
    email: VALID_EMAIL,
    errors: [],
    loading: false,
  };
  handleForgot() {
    const {navigation} = this.props;
    const {email} = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({loading: true});

    if (email !== VALID_EMAIL) {
      errors.push('email');
    }
    this.setState({errors, loading: false});

    if (!errors.length) {
      Alert.alert(
        'Password sent',
        'Please check you mail',
        [
          {
            text: 'Ok',
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ],
        {cancelable: false},
      );
    }
  }
  render() {
    const hasErrors = key => (errors.includes(key) ? s.hasError : null);
    const {navigation} = this.props;
    const {loading, errors} = this.state;

    return (
      <KeyboardAvoidingView style={s.fotgot} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <TextView h1 bold>
            Forgot
          </TextView>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors('email')}
              style={[s.input, hasErrors('email')]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <Button gradient onPress={() => this.handleForgot()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ):(
                <TextView bold white center>
                  Forgot
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
