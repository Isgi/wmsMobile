import React, { Component } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import labelAvatar from '../../global/utils/labelAvatar';
import randomColorStr from '../../global/utils/randomColorStr';
import { deleteChecksheet } from '../../global/redux/actions/actionChecksheet';

class ChecksheetItem extends Component {

  handleEdit = item => () => {
    this.props.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'ChecksheetUpdate',
      params: {
        item: this.props.item
      }
    });
  }

  hanldeDelete = id => () => {
    this.props.dispatch(deleteChecksheet(id));
  }

  handleConfirmDelete = item => () => {
    Alert.alert(
      'Confirm delete',
      `Are you sure you want to delete ${item.checker} Checksheet?`,
      [
        { text: 'Cancel', onPress: () => { }, style: 'cancel' },
        { text: 'OK', onPress: this.hanldeDelete(item._id) }
      ],
      { cancelable: false }
    );
  }

  handleMorePress = () => {
    // handle press item action
    this.props.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'ActionsModal',
      params: {
        heightModal: 110,
        title: 'Select Actions',
        options: [
          { label: 'Edit', icon: 'create', onPress: this.handleEdit(this.props.item) },
          { label: 'Delete', icon: 'delete', onPress: this.handleConfirmDelete(this.props.item) }
        ]
      }
    });
  }

  render() {
    const { checker, tanggal } = this.props.item;
    return (
      <ListItem
        roundAvatar
        avatar={(
          <Avatar
            medium
            rounded
            title={labelAvatar(checker)}
            containerStyle={{
              backgroundColor: `#${randomColorStr(tanggal)}`
            }}
          />
        )}
        title={checker}
        subtitle={tanggal}
        rightIcon={{ name: 'more-vert' }}
        onPressRightIcon={this.handleMorePress}
      />
    );
  }
}

export default connect()(ChecksheetItem);

ChecksheetItem.propTypes = {
  item: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};
