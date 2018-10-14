import React, { Component } from 'react';
import { View, ActivityIndicator, InteractionManager } from 'react-native';

import styles from './stylesComponents';

const renderComponentAfterInteraction = (ReadyComponent) => {
  return class RenderComponentAfterInteraction extends Component {
    constructor() {
      super();
      this.state = {
        didFinishInitialAnimation: false
      };
    }

    componentDidMount() {
      InteractionManager.runAfterInteractions(() => {
        this.setState({
          didFinishInitialAnimation: true
        });
      });
    }

    render() {
      if (!this.state.didFinishInitialAnimation) {
        return <View style={styles.loader}><ActivityIndicator color="#666" size="large" /></View>;
      }
      return <ReadyComponent {...this.props} />;
    }
  };
};

export default renderComponentAfterInteraction;
