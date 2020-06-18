import React, {Component} from 'react';
import {Block, TextView} from '../../components';
import {connect} from 'react-redux';
import {updateChannelLocal} from '../../actions/updateChannel';

class Admin extends Component {
  render() {
    return (
      <Block>
        <TextView>Admin</TextView>
      </Block>
    );
  }
}

const mapDispatchToProp = dispatch => {
  return {
    updateChannelJson: id => dispatch(updateChannelLocal(id)),
  };
};

export default connect(
  null,
  mapDispatchToProp,
)(Admin);
