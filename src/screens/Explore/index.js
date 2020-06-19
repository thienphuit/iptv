import React, {Component} from 'react';
import {Block, Button, TextView, Input} from '../../components';
import styles from './styles';
import {Dimensions, Image, ScrollView, TouchableOpacity} from 'react-native';
import {theme, mocks} from '../../constants';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import {Animated} from 'react-native';
import LinerGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

class Explore extends Component {
  state = {
    searchFocus: new Animated.Value(0.6),
    searchString: null,
  };
  handleSearchFocus = status => {
    Animated.timing(this.state.searchFocus, {
      toValue: status ? 0.8 : 0.6,
      duration: 150,
    }).start();
  };
  renderSearch = () => {
    const {searchFocus, searchString} = this.state;
    const isEditing = searchFocus && searchString;
    return (
      <Block middle animated flex={searchFocus} style={styles.search}>
        <Input
          placeholder="Search"
          placeholderTextColor={theme.colors.gray2}
          style={styles.searchInput}
          onFocus={() => this.handleSearchFocus(true)}
          onBlur={() => this.handleSearchFocus(false)}
          onChangeText={text => this.setState({searchString: text})}
          value={searchString}
          onRightPress={() =>
            isEditing ? this.setState({searchString: null}) : null
          }
          rightStyle={styles.searchRight}
          rightLabel={
            <FontAweSome
              name={isEditing ? 'close' : 'search'}
              size={theme.sizes.base / 1.6}
              color={theme.colors.gray2}
              style={styles.searchIcon}
            />
          }
        />
      </Block>
    );
  };
  renderImage = (img, index) => {
    const {navigation} = this.props;
    const sizes = Image.resolveAssetSource(img);
    const fullWidth = width - theme.sizes.padding * 2.5;
    const resize = (sizes.width * 100) / fullWidth;
    const imgWidth = resize > 75 ? fullWidth : sizes.width * 1;
    return (
      <TouchableOpacity
        key={`img - ${index}`}
        onPress={() => navigation.navigate('Product')}>
        <Image
          source={img}
          style={[styles.image, {minWidth: imgWidth, maxWidth: imgWidth}]}
        />
      </TouchableOpacity>
    );
  };
  renderExplore = () => {
    const {images} = this.props;
    const mainImage = images[0];

    return (
      <Block style={{marginBottom: height / 3}}>
        <TouchableOpacity
          style={[styles.image, styles.mainImage]}
          //onPress={() => navigation.navigate('Product')}
        >
          <Image source={mainImage} style={[styles.image, styles.mainImage]} />
        </TouchableOpacity>
        <Block row space="between" wrap>
          {images.slice(1).map((img, index) => this.renderImage(img, index))}
        </Block>
      </Block>
    );
  };
  renderFooter = () => {
    return (
      <LinerGradient
        locations={[0.5, 1]}
        style={styles.footer}
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.6)']}>
        <Button gradient style={{width: width / 2.678}}>
          <TextView center white bold>
            Filter
          </TextView>
        </Button>
      </LinerGradient>
    );
  };
  render() {
    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <TextView h1 bold>
            Explore
          </TextView>
          {this.renderSearch()}
        </Block>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.explore}>
          {this.renderExplore()}
        </ScrollView>
        {this.renderFooter()}
      </Block>
    );
  }
}

Explore.defaultProps = {
  images: mocks.explore,
};

export default Explore;
