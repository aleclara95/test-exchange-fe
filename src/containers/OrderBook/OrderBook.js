import React from 'react';
import { connect } from 'react-redux';

import { getOrderBookActionCreator } from './redux/actions';
import './OrderBook.scss';

import { Card, Table } from 'semantic-ui-react';

class OrderBook extends React.Component {
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
      const orderBookData = {
        origin: currentOrigin,
        destination: currentDestination,
        user: username
      };
      this.props.getOrderBook(token, orderBookData);
    }
  }

  render() {
    const orderBook = this.props.orderBook.orderBook;
    const orderBookRows = orderBook
      ? orderBook.map(ob => (
          <Table.Row key={ob.id}>
            <Table.Cell>{ob.order_type}</Table.Cell>
            <Table.Cell>{ob.amount}</Table.Cell>
            <Table.Cell>{(ob.amount * ob.price).toFixed(5)}</Table.Cell>
            <Table.Cell>{ob.price}</Table.Cell>
          </Table.Row>
        ))
      : null;
    return (
      <div className='order-book'>
        <Card centered={false}>
          <Card.Content>
            <Card.Header textAlign='center'>Order Book</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <Table basic='very' textAlign='center'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Type</Table.HeaderCell>
                    <Table.HeaderCell>Amount</Table.HeaderCell>
                    <Table.HeaderCell>Total</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>{orderBookRows}</Table.Body>
              </Table>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ orderBook, session }) => {
  return {
    orderBook,
    session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...getOrderBookActionCreator(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderBook);
