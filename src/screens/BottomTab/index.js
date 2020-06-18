import React, {Component} from 'react';
import {Block} from '../../components';
import {TouchableOpacity, View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
const menus = ['home', 'search1', 'user'];
const BottomTab = () => {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>Home Screen</Text>
    </View>
  );
};
export default BottomTab;
