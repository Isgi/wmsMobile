import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, ListItem } from 'react-native-elements';

import labelAvatar from '../utils/labelAvatar';
import randomColorStr from '../utils/randomColorStr';

class ItemSelectNoDr extends Component {

  handleSelect = () => {
    this.props.handleSelect(this.props.item);
  }

  render() {
    const { dr_id, tanggal } = this.props.item;
    return (
      <ListItem
        roundAvatar
        avatar={(
          <Avatar
            small
            rounded
            title={labelAvatar(dr_id)}
            containerStyle={{
              backgroundColor: `#${randomColorStr(tanggal)}`
            }}
          />
        )}
        title={dr_id}
        onPress={this.handleSelect}
        hideChevron
      />
    );
  }
}

export default ItemSelectNoDr;

ItemSelectNoDr.propTypes = {
  item: PropTypes.object.isRequired,
  handleSelect: PropTypes.func
};
