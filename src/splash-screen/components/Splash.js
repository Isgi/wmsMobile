import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from '../stylesSplash';

const Splash = () => (
  <View style={styles.container} >
    <Icon name="radio-button-checked" iconStyle={styles.logo} />
  </View>
);

export default Splash;
