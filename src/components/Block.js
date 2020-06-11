import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {theme} from '../constants';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  white: {backgroundColor: theme.colors.white},
});

class Block extends Component {
  handlePaddings = () => {
    const {padding} = this.props;
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding,
      };
    }

    if (typeof padding === 'object') {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0],
          };
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1],
          };
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1],
          };
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3],
          };
      }
    }
  };

  handleMargins = () => {
    const {margin} = this.props;
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin,
      };
    }

    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0],
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1],
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1],
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3],
          };
      }
    }
  };
  render() {
    const {
      paddinghorizontal,
      row,
      space,
      animated,
      wrap,
      flex,
      padingVertical,
      justifyContent,
      middle,
      block,
      center,
      margin,
      padding,
      width,
      height,
      border,
      borderWidth,
      borderColor,
      style,
      borderRadius,
      direction,
      color,
      children,
      shadow,
      ...props
    } = this.props;
    const styleConponent = [
      paddinghorizontal && {paddinghorizontal},
      row && {flexDirection: 'row'},
      flex && {flex},
      wrap && {flexWrap: 'wrap'},
      space && {justifyContent: `space-${space}`},
      flex === false && {flex: 0},
      padingVertical && {padingVertical},
      justifyContent && {justifyContent},
      middle && {justifyContent: 'center'},
      block && styles.block,
      margin && {...this.handleMargins()},
      padding && {...this.handlePaddings()},
      width && {width},
      height && {height},
      center && {alignItems: 'center'},
      border && {borderWidth: 1, borderColor: 'gray'},
      borderWidth && {borderWidth},
      borderColor && {borderColor},
      direction && {flexDirection: direction},
      borderRadius && {borderRadius},
      color && {backgroundColor: color},
      shadow && {
        shadowOpacity: 0.12,
        shadowRadius: 15,
        shadowColor: 'gray',
        shadowOffset: {height: 0, width: 0},
      },
      style,
    ];
    if (animated) {
      return (
        <Animated.View style={styleConponent} {...props}>
          {children}
        </Animated.View>
      );
    }
    return (
      <View style={styleConponent} {...props}>
        {children}
      </View>
    );
  }
}
export default Block;
