import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { getTradingHistoryActionCreator } from './redux/actions';
import './TradingHistory.scss';

import { Card, Table } from 'semantic-ui-react';

class TradingHistory extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.currentCurrencyPair &&
      prevProps.currentCurrencyPair != this.props.currentCurrencyPair
    ) {
      let token;
      if (this.props.session.user) token = this.props.session.user.token;
      this.props.getTradingHistory(token);
    }
  }

  render() {
    const tradingHistory = this.props.tradingHistory.tradingHistory;
    const tradingHistoryRows = tradingHistory
      ? tradingHistory.map(tr => (
          <Table.Row key={tr.id}>
            <Table.Cell>
              <Moment format='HH:mm:SS'>{tr.create_date}</Moment>
            </Table.Cell>
            <Table.Cell>{parseFloat(tr.amount).toFixed(5)}</Table.Cell>
            <Table.Cell>{tr.price}</Table.Cell>
          </Table.Row>
        ))
      : null;
    return (
      <div className='trading-history'>
        <Card centered={false}>
          <Card.Content>
            <Card.Header textAlign='center'>Trading History</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <Table basic='very' textAlign='center'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Hour</Table.HeaderCell>
                    <Table.HeaderCell>Total</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>{tradingHistoryRows}</Table.Body>
              </Table>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ tradingHistory, orderCreate, session }) => {
  return {
    tradingHistory,
    orderCreate,
    session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...getTradingHistoryActionCreator(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TradingHistory);
