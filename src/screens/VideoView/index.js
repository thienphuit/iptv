import React, {Component} from 'react';
import s from './styles';

import {Block, TextView} from '../../components';
import VideoPlayer from 'react-native-video-controls';

export default class VideoView extends Component {
  renderVideoView = () => {
    return (
      <Block flex={0.4}>
        {/*  <VideoPlayer
            source={{
                uri:
                'https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8',
            }}
            /> */}
      </Block>
    );
  };
  render() {
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
            Talk to you
          </TextView>
          <TextView h2>Infomation</TextView>
        </Block>
      </Block>
    );
  }
}
