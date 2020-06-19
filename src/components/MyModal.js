import React from 'react';
import {StyleSheet, Dimensions, Modal} from 'react-native';
import {Block, TextView, Button, Input} from './index';

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  modal: {
    // justifyContent: 'center',
    // borderRadius: Platform.Os === 'ios' ? 30 : 0,
    // shadowRadius: 10,
    // width: screen.width - 80,
    //height: 280,
    // marginTop: 200,
    backgroundColor: '#00000057',
    //marginTop: 30,
    //paddingHorizontal: theme.sizes.base * 2,
    //flexDirection: 'row',
    // marginTop: 100,
    // alignItems: 'center',
  },
  popup: {
    backgroundColor: 'white',
    //padding:100,
    width: screen.width - 80,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupContent: {
    //alignItems: 'center',
    margin: 5,
    height: 250,
  },
  btnClose: {
    height: 20,
    backgroundColor: '#20b2aa',
    padding: 20,
  },
});
const MyModal = ({modalVisible, setModalVisible, channel, saveChannel}) => {
  let channelJson = channel;
  return (
    <Modal transparent={true} visible={modalVisible}>
      <Block center middle flex={1} style={styles.modal}>
        <Block center style={styles.popup}>
          <Block style={styles.popupContent}>
            <TextView>Name</TextView>
            <Input
              defaultValue={channel.name}
              onChangeText={e => (channelJson.name = e)}
            />

            <TextView>Name</TextView>
            <Input
              defaultValue={channel.url}
              onChangeText={e => (channelJson.url = e)}
            />
          </Block>
        </Block>
        <Block>
          <Block row>
            <Button
              style={styles.btnClose}
              onPress={() => saveChannel(channelJson)}>
              <TextView>Save</TextView>
            </Button>
            <Button
              style={styles.btnClose}
              onPress={() => setModalVisible(false)}>
              <TextView>Close</TextView>
            </Button>
          </Block>
        </Block>
      </Block>
    </Modal>
  );
};
export default MyModal;
