import {StyleSheet,Dimensions} from 'react-native';
import { theme } from '../../constants';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
       
      },
    title:{
        paddingHorizontal: theme.sizes.base,
        marginTop: 10
    }
})
export default styles