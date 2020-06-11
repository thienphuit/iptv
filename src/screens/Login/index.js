import React, {Component} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {Block, TextView, Input, Button} from '../../components';
import s from './styles';
import {theme} from '../../constants';

const VALID_EMAIL = 'thienphu';
const VALID_PASSWORD = '123456';

class Login extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false,
  };
  handleLogin = () => {
    const {navigation} = this.props;
    const {email, password} = this.props;
    const errors = [];
    Keyboard.dismiss();
    this.setState({loading: true});

    //check with backend Api
    /*  if (email !== VALID_EMAIL) {
      errors.push('email');
    }
    if (password !== VALID_PASSWORD) {
      errors.push('password');
    } */
    this.setState({errors, loading: false});
    if (!errors.length) {
      // navigation.navigate('Browse');
      Alert.alert('Password sent', 'Please check you mail', [
        {
          text: 'Ok',
          onPress: () => {
            navigation.navigate('Browse');
          },
        },
      ]);
    }
  };
  render() {
    const {loading, errors} = this.state;
    const hasErrors = key => (errors.includes(key) ? s.hastErrors : null);
    const {navigation} = this.props;
    return (
      <KeyboardAvoidingView style={s.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <TextView h1 bold>
            Login
          </TextView>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors('email')}
              style={[s.input, hasErrors('email')]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <Input
              secure
              label="Password"
              error={hasErrors('password')}
              style={[s.input, hasErrors('password')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({password: text})}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <TextView bold white center>
                  Login
                </TextView>
              )}
            </Button>

            <Button onPress={() => navigation.navigate('Forgot')}>
              <TextView gray center caption style={s.textDecoration}>
                Forgot your password
              </TextView>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}
export default Login;
