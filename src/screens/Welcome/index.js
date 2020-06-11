import React, {Component} from 'react';
import {
  Image,
  Modal,
  Animated,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import Block from '../../components/Block';
import TextView from '../../components/TextView';
import {theme} from '../../constants';
import s from './styles';
import Button from '../../components/Button';
const {width, height} = Dimensions.get('window');

class Welcome extends Component {
  state = {
    showTerms: false,
  };
  scrollX = new Animated.Value(0);
  renderTermService() {
    return (
      <Modal animationType="slide" visible={this.state.showTerms}>
        <Block
          padding={[theme.sizes.padding * 2, theme.sizes.padding]}
          space="between">
          <TextView h2 light>
            {' '}
            Term of Service
          </TextView>
          <ScrollView style={{marginVertical: theme.sizes.padding}}>
            <TextView
              caption
              gray
              height={24}
              style={{marginBottom: theme.sizes.base}}>
              Lorem insum dolor sit consectetur adipisicing elit. Quas
              volumtalem alias est fugiat at
            </TextView>
            <TextView
              caption
              gray
              height={24}
              style={{marginBottom: theme.sizes.base}}>
              Lorem insum dolor sit consectetur adipisicing elit. Quas
              volumtalem alias est fugiat at
            </TextView>
            <TextView caption gray height={18}>
              Lorem insum dolor sit consectetur adipisicing elit. Quas
              volumtalem alias est fugiat at
            </TextView>
            <TextView caption gray height={18}>
              Lorem insum dolor sit consectetur adipisicing elit. Quas
              volumtalem alias est fugiat at
            </TextView>
            <TextView caption gray height={18}>
              Lorem insum dolor sit consectetur adipisicing elit. Quas
              volumtalem alias est fugiat at
            </TextView>
          </ScrollView>
          <Block middle center padding={[theme.sizes.base / 2, 0]}>
            <Button gradient onPress={() => {}}>
              <TextView>I understand</TextView>
            </Button>
          </Block>
        </Block>
      </Modal>
    );
  }
  renderIllustration = () => {
    const {illustrations} = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={illustrations}
        extraData={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({item}) => (
          <Image source={item.source} resizeMode="contain" style={s.image} />
        )}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: this.scrollX}}}],
          {useNativeDriver: false},
        )}
      />
    );
  };
  renderSteps = () => {
    const {illustrations} = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block center row middle style={s.stepContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });
          return (
            <Block
              animated
              flex={false}
              key={`step- ${index}`}
              style={[s.steps, {opacity}]}
            />
          );
        })}
      </Block>
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <Block flex={1}>
        <Block center flex={0.4} middle>
          <TextView h1 center bold>
            Your Home.
            <TextView h1 primary>
              Greener.
            </TextView>
          </TextView>
          <TextView h3 gray2 style={{marginTop: theme.sizes.padding / 2}}>
            Enjoy the experience
          </TextView>
        </Block>
        <Block center middle>
          {this.renderIllustration()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
          <Button gradient onPress={() => navigation.navigate('Login')}>
            <TextView center semibold white>
              Login
            </TextView>
          </Button>
          <Button shadow onPress={() => navigation.navigate('SignUp')}>
            <TextView center semibold>
              Signup
            </TextView>
          </Button>
          <Button onPress={() => this.setState({showTerms: true})}>
            <TextView center caption gray>
              Term of service
            </TextView>
          </Button>
        </Block>
        {this.renderTermService()}
      </Block>
    );
  }
}
Welcome.defaultProps = {
  illustrations: [
    {id: 1, source: require('../../assets/images/illustration_1.png')},
    {id: 2, source: require('../../assets/images/illustration_2.png')},
    {id: 3, source: require('../../assets/images/illustration_3.png')},
  ],
};
export default Welcome;
