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
            uri: category.channel_url,
          }}
        />
      </Block>
      <Block style={styles.title}>
        <TextView bold h1>
          {category.channel_name}
        </TextView>
        <TextView h2>Infomation</TextView>
      </Block>
    </Block>
  );
};

export default VideoView;
