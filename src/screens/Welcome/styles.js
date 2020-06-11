import {StyleSheet} from 'react-native';
import {theme} from '../../constants';

const styles = StyleSheet.create({
  stepContainer: {
    // eslint-disable-next-line prettier/prettier
    position: 'absolute',
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
});
export default styles;
