import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { getActiveOrdersActionCreator } from './redux/actions';
import './ActiveOrders.scss';

import { Table } from 'semantic-ui-react';

class ActiveOrders extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.currentCurrencyPair &&
      prevProps.currentCurrencyPair != this.props.currentCurrencyPair
    ) {
      let token, username;
      if (this.props.session.user) {
        token = this.props.session.user.token;
        username = this.props.session.user.user.username;
      }
      const {
        currentOrigin,
        currentDestination
      } = this.props.currentCurrencyPair;
      const activeOrdersData = {
        origin: currentOrigin,
        destination: currentDestination,
        user: username
      };
      this.props.getActiveOrders(token, activeOrdersData);
    }
  }

  render() {
    const activeOrders = this.props.activeOrders.activeOrders;
    const activeOrdersRows = activeOrders
      ? activeOrders.map(ao => (
          <Table.Row key={ao.id}>
            <Table.Cell>{ao.price}</Table.Cell>
            <Table.Cell>
              <Moment format='YYYY/MM/DD HH:mm:SS'>{ao.create_date}</Moment>
            </Table.Cell>
            <Table.Cell>{ao.amount}</Table.Cell>
          </Table.Row>
        ))
      : null;
    return (
      <div className='active-orders'>
        <Table basic='very' textAlign='center'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Created</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{activeOrdersRows}</Table.Body>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = ({ activeOrders, session }) => {
  return {
    activeOrders,
    session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...getActiveOrdersActionCreator(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrders);
