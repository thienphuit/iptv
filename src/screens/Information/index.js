import React from 'react';
import {Block, TextView, Button} from '../../components';
import styles from './styles';

const Information = () => {
  return (
    <Block style={styles.container}>
      <Block center middle style={styles.header}>
        <TextView h1 bold style={styles.title}>
          App IPTV
        </TextView>
        <TextView primary>Version 1</TextView>
      </Block>
      <Block>
        <TextView center style={styles.des}>
          App play channel free, always update new movies hot,Bring a cool
          experience.
        </TextView>
        <Button onPress={() => {}}>
          <TextView gray right caption style={styles.textDecoration}>
            Link addmin
          </TextView>
        </Button>
      </Block>
    </Block>
  );
};
export default Information;
