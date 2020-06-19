import {StyleSheet} from 'react-native';
import {theme} from '../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.sizes.base,
  },
  header: {
    paddingHorizontal: theme.sizes.base,
  },
  title: {
    marginTop: theme.sizes.base,
  },
  des: {
    marginTop: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
  },
  textDecoration: {
    textDecorationLine: 'underline',
  },
});
export default styles;
