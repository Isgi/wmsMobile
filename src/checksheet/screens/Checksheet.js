/**
 * Sample React Native Checksheet
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
  Image,
  Text
} from 'react-native';
import { connect } from 'react-redux';

import styles from '../stylesChecksheet';
import { getChecksheet } from '../../global/redux/actions/actionChecksheet';
import ChecksheetItem from '../components/ChecksheetItem';
import renderComponentAfterInteraction from '../../global/components/renderComponentAfterInteraction';

type Props = {};
class Checksheet extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      selected: (new Map(): Map<string, boolean>)
    };
    props.navigation.setParams({ handleCreate: this.navigateToCreateChecksheet });
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch(getChecksheet());
  }

  navigateToCreateChecksheet = () => {
    this.props.navigation.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'ChecksheetCreate'
    });
  }

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item, index }) => <ChecksheetItem item={item} index={index} />

  render() {
    const { data, isLoading } = this.props.checksheet;
    return (
      <View style={styles.container}>

        {data.length === 0 && !isLoading ?
          <View style={styles.contentEmpty} >
            <Image source={require('./../../global/assets/img/empty-data.png')} style={styles.imageEmpty} />
            <Text style={styles.textEmpty} >
              {'Opsss.. Your data is blank.\nPlease click (+) button above to create new data.'}
            </Text>
          </View>
          :
          <FlatList
            data={data}
            onRefresh={this.getData}
            refreshing={isLoading}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            extraData={this.props.checksheet}
          />
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  checksheet: state.checksheet
});

export default renderComponentAfterInteraction(connect(mapStateToProps)(Checksheet));

Checksheet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  checksheet: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

