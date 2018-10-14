import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import styles from './stylesComponents';

export const IconMenu = (props) => {
  const handlePressMenu = () => () => {
    props.navigation.openDrawer('DrawerOpen');
  };
  return (
    <Icon
      name="menu"
      iconStyle={styles.iconNavigator}
      onPress={handlePressMenu()}
    />
  );
};
IconMenu.propTypes = {
  navigation: PropTypes.object.isRequired
};

export const IconSearch = (props) => {
  const handlePressSearch = () => () => {
    // for search button
  };
  return (
    <Icon
      name="search"
      iconStyle={styles.iconNavigator}
      onPress={handlePressSearch(props)}
    />
  );
};

export const IconSaved = (props) => {
  const handlePressSaved = () => () => {
    // for search button
  };
  return (
    <Icon
      name="move-to-inbox"
      iconStyle={styles.iconNavigator}
      onPress={handlePressSaved(props)}
    />
  );
};

export const IconClose = (props) => {
  const handlePressClose = () => () => {
    props.navigation.dispatch({
      type: 'Navigation/BACK'
    });
  };
  return (
    <Icon
      name="close"
      iconStyle={styles.iconNavigator}
      onPress={handlePressClose(props)}
    />
  );
};
IconClose.propTypes = {
  navigation: PropTypes.object.isRequired
};

export const IconBack = (props) => {
  const handlePressBack = () => () => {
    props.navigation.dispatch({
      type: 'Navigation/BACK'
    });
  };
  return (
    <Icon
      name="arrow-back"
      iconStyle={styles.iconNavigator}
      onPress={handlePressBack(props)}
    />
  );
};
IconBack.propTypes = {
  navigation: PropTypes.object.isRequired
};

export const IconCheck = (props) => {
  const handlePressCheck = ({ navigation }) => () => {
    navigation.getParam('handleSubmit')();
  };
  return (
    <Icon
      name="check"
      iconStyle={styles.iconNavigator}
      onPress={handlePressCheck(props)}
    />
  );
};

export const IconAdd = (props) => {
  const handlePressAdd = ({ navigation }) => () => {
    navigation.getParam('handleCreate')();
  };
  return (
    <Icon
      name="add"
      iconStyle={styles.iconNavigator}
      onPress={handlePressAdd(props)}
    />
  );
};

