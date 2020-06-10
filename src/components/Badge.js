import React, {Component} from 'react';
import {theme} from '../constants';
import Block from './Block';
import {StyleSheet} from 'react-native';

export default class Badge extends Component {
  render() {
    const {children, style, size, color, ...props} = this.props;
    const badgeStyles = StyleSheet.create([
      styles.badge,
      size && {
        height: size,
        width: size,
        borderRadius: size,
      },
      style,
    ]);
    return (
      <Block flex={false} middle center color={color} style={badgeStyles}>
        {children}
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.boder,
  },
});
