import {StyleSheet} from 'react-native';
import {theme} from '../../constants';
const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hastErrors: {
    borderBottomColor: theme.colors.accent,
  },
  textDecoration: {
    textDecorationLine: 'underline',
  },
});
export default styles;
