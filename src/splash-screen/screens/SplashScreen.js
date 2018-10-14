import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Splash from '../components/Splash';

type Props = {};
class SplashScreen extends Component<Props> {

  componentDidMount() {
    const { data } = this.props.auth;
    if (!data) {
      this.props.navigation.dispatch({
        type: 'Navigation/NAVIGATE',
        routeName: 'Login'
      });
    } else {
      this.props.navigation.dispatch({
        type: 'Navigation/RESET',
        key: 'AuthorizedStack',
        index: 0,
        actions: [
          { type: 'Navigation/NAVIGATE', routeName: 'ChecksheetStack' }
        ]
      });
    }
    return;
  }

  render() {
    return <Splash />;
  }
}

SplashScreen.propTypes = {
  auth: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SplashScreen);
