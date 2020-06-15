import React, {useState} from 'react';
import s from './styles';

import {Block, TextView} from '../../components';
import VideoPlayer from 'react-native-video-controls';

const VideoView = ({route}) => {
  const {category} = route.params;

  return (
    <Block block>
      <Block middle flex={0.4}>
        <VideoPlayer
          source={{
            uri:
              'http://live.cdn.mobifonetv.vn/motv/myhtv1_hls.smil/chunklist_b1200000.m3u8',
          }}
        />
      </Block>
      <Block style={s.title}>
        <TextView bold h1>
          {category.title}
        </TextView>
        <TextView h2>Infomation</TextView>
      </Block>
    </Block>
  );
};

export default VideoView;
