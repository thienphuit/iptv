import React, {useState} from 'react';
import styles from './styles';

import {Block, TextView} from '../../components';
import VideoPlayer from 'react-native-video-controls';

const VideoView = ({route}) => {
  const {category} = route.params;
  return (
    <Block block>
      <Block middle flex={0.4}>
        <VideoPlayer
          source={{
            uri: category.CHANNEL_URL,
          }}
        />
      </Block>
      <Block style={styles.title}>
        <TextView bold h1>
          {category.CHANNEL_NAME}
        </TextView>
        <TextView h2>Infomation</TextView>
      </Block>
    </Block>
  );
};

export default VideoView;
