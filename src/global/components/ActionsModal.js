import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StatusBar,
  InteractionManager,
  View,
  Dimensions,
  Animated,
  BackHandler,
  TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import styles from './stylesComponents';

const { height } = Dimensions.get('window');

class ActionsModal extends Component {

  constructor(props) {
    super(props);
    this.animated = new Animated.Value(0);
    this.params = props.navigation.state.params;
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    InteractionManager.runAfterInteractions(() => {
      Animated.timing(this.animated, {
        toValue: 0.50,
        duration: 200
      }).start();
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  onBackButtonPressAndroid = () => {
    this.removeAnimated();
  }

  handleSearch = (text) => {
    this.params.action(text);
  }

  removeAnimated() {
    Animated.timing(this.animated, {
      toValue: 0,
      duration: 100
    }).start();
  }

  handleSelect = item => () => {
    this.handleDismiss();
    item.onPress();
  }

  handleDismiss = () => {
    this.removeAnimated();
    this.props.navigation.dispatch({ type: 'Navigation/BACK' });
  }

  _keyExtractor = (item, index) => item.value;

  _renderItem = ({ item, index }) => (
    <ListItem
      key={index}
      title={item.label}
      leftIcon={{
        name: item.icon,
        style: {
          color: item.label === 'Delete'
            ? '#b54b46'
            : '#3f4550'
        }
      }}
      rightIcon={{ color: 'transparent' }}
      titleStyle={{ color: item.label === 'Delete' ? '#b54b46' : '#3f4550' }}
      containerStyle={{
        borderTopWidth: 0,
        borderBottomWidth: 0,
        height: 55,
        justifyContent: 'center'
      }}
      onPress={this.handleSelect(item)}
    />
  );

  render() {
    const animatedStyle = {
      opacity: this.animated
    };
    return [<Animated.View key="animated" style={[styles.containerAction, animatedStyle]} />,
      <TouchableOpacity
        key="touchOverlay"
        activeOpacity={1}
        onPress={this.handleDismiss}
        style={styles.touchOtherModal}
      />,
      <View
        key="modal"
        style={[
          styles.modalAction,
          {
            height: this.params.heightModal
              ? this.params.heightModal
              : height / 2,
            marginTop: this.params.heightModal
              ? height - this.params.heightModal - (StatusBar.currentHeight ? StatusBar.currentHeight : 0)
              : (height - (StatusBar.currentHeight ? StatusBar.currentHeight : 0)) / 2
          }
        ]}
      >
        {this.params.options.map((item, index) => this._renderItem({ item, index }))}
      </View>
    ];
  }
}

export default withNavigation(ActionsModal);

ActionsModal.propTypes = {
  navigation: PropTypes.object.isRequired
};

