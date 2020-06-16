import React, {useState} from 'react';
import styles from './styles';

import {Block, TextView} from '../../components';
import VideoPlayer from 'react-native-video-controls';

const VideoView = ({route}) => {
  const {category} = route.params;
  const linkChannel =
    'http://live.cdn.mobifonetv.vn/motv/myhtv1_hls.smil/chunklist_b1200000.m3u8';
  return (
    <Block block>
      <Block middle flex={0.4}>
        <VideoPlayer
          source={{
            uri: linkChannel,
          }}
        />
      </Block>
      <Block style={styles.title}>
        <TextView bold h1>
          {category.title}
        </TextView>
        <TextView h2>Infomation</TextView>
      </Block>
    </Block>
  );
};

export default VideoView;
