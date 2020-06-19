import {StyleSheet} from 'react-native';
import {theme} from '../../constants';

const styles = StyleSheet.create({
  title: {
    marginTop: theme.sizes.base * 2,
  },
  modal: {
      justifyContent:'center',
      shadowRadius: 10,
      width: 300,
      height: 200,
  }
});

export default styles;
