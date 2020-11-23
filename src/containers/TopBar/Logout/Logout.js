import React from 'react';

import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { sessionActionCreator } from '../../../redux/session/actions';

class Logout extends React.Component {
  handleOnClick(e) {
    this.props.logout();
  }

  render() {
    return (
      <Icon
        onClick={e => this.handleOnClick(e)}
        name='log out'
        size='big'
        color='grey'
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ...sessionActionCreator(dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Logout);
