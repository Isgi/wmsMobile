import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import styles from '../stylesSplash';

const Splash = () => (
  <View style={styles.container} >
    <Image source={require('../../global/assets/img/logo.jpg')} style={styles.logo} />
  </View>
);

export default Splash;
