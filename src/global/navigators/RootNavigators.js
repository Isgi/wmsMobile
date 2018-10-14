import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";
import {
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { connect } from 'react-redux';

import {
  IconMenu,
  IconSearch,
  IconSaved,
  IconClose,
  IconBack,
  IconAdd
} from '../components/IconNavigator';
import ActionsModal from '../components/ActionsModal';
import SelectNoDr from '../screens/SelectNoDr';

import Login from '../../login/screens/Login';
import SplashScreen from '../../splash-screen/screens/SplashScreen';

import Checksheet from '../../checksheet/screens/Checksheet';
import ChecksheetCreate from '../../checksheet/screens/ChecksheetCreate';
import ChecksheetUpdate from '../../checksheet/screens/ChecksheetUpdate';

const ChecksheetStack = createStackNavigator({
  Checksheets: {
    screen: Checksheet,
    navigationOptions: ({ navigation }) => ({
      title: 'Checksheet',
      headerRight: <IconAdd navigation={navigation} />
    })
  },
  ChecksheetCreate: {
    screen: ChecksheetCreate,
    navigationOptions: ({ navigation }) => ({
      title: 'Create Checksheet',
      headerLeft: <IconBack navigation={navigation} />
    })
  },
  ChecksheetUpdate: {
    screen: ChecksheetUpdate,
    navigationOptions: ({ navigation }) => ({
      title: 'Update Checksheet',
      headerLeft: <IconBack navigation={navigation} />
    })
  }
}, {
  navigationOptions: ({ navigation }) => ({
    headerBackTitle: null,
    headerPressColorAndroid: 'transparent',
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#f7f7f7'
    }
  }),
  transitionConfig: () => ({
    transitionSpec: {
      duration: 50,
      useNativeDriver: true
    },
    screenInterpolator: (props) => {
      return StackViewStyleInterpolator.forHorizontal(props);
    }
  })
});

const GeneralStack = createStackNavigator({
  SelectNoDr: {
    screen: SelectNoDr,
    navigationOptions: ({ navigation }) => ({
      title: 'Select No. DR',
      headerLeft: <IconClose navigation={navigation} />,
      headerTintColor: '#000'
    })
  }
}, {
  navigationOptions: ({ navigation }) => ({
    headerBackTitle: null,
    headerPressColorAndroid: 'transparent',
    headerTintColor: '#000'
  }),
  transitionConfig: () => ({
    transitionSpec: {
      duration: 50,
      useNativeDriver: true
    },
    screenInterpolator: (props) => {
      return StackViewStyleInterpolator.forHorizontal(props);
    }
  })
});

const AuthorizedStack = createStackNavigator({
  ChecksheetStack,
  ActionsModal,
  GeneralStack
}, {
  headerMode: 'none',
  mode: 'modal',
  cardStyle: {
    opacity: 1,
    backgroundColor: 'transparent'
  },
  transitionConfig: () => ({
    screenInterpolator: (props) => {
      const { scenes } = props;
      let routeModal = false;
      scenes.forEach((scene) => {
        if (
          scene.route.routeName === 'ActionsModal' ||
          scene.route.routeName === 'GeneralStack'
        ) {
          routeModal = true;
        }
      });
      if (routeModal) return StackViewStyleInterpolator.forVertical(props);
      // return StackViewStyleInterpolator.forHorizontal(props);
    }
  }),
  navigationOptions: {
    gesturesEnabled: true,
    gestureResponseDistance: {
      vertical: 350
    }
  }
});

const UnauthorizedStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  }
}, {
  navigationOptions: {
    headerTintColor: '#000'
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 50,
      useNativeDriver: true
    },
    screenInterpolator: (props) => {
      return StackViewStyleInterpolator.forHorizontal(props);
    }
  })
});

// root
const RootNavigators = createSwitchNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  UnauthorizedStack,
  AuthorizedStack
});

export default RootNavigators;
