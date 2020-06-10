import {StyleSheet} from 'react-native';
import { theme } from '../../constants';


const styles = StyleSheet.create({
    fotgot: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    hasError: {
        borderBottomColor: theme.colors.accent,
    },
    textDeco: {
        textDecorationLine : 'underline',
    }
})
export default styles;
