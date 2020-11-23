import React from 'react';

import { Card, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { balancesActionCreator } from './redux/actions';
import './Balance.scss';

class Balance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originBalance: 0,
      destinationBalance: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.currentCurrencyPair &&
      prevProps.currentCurrencyPair !== this.props.currentCurrencyPair
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
      const currency = `${currentOrigin},${currentDestination}`;
      const balanceData = {
        user: username,
        currency: currency
      };
      this.props.getBalances(token, balanceData);
    }
  }

  render() {
    let originDecimals = 0;
    let destinationDecimals = 0;

    if (this.props.balances.userBalances) {
      const { userBalances } = this.props.balances;

      if (userBalances[0].currency_type === 'fiat') originDecimals = 2;
      else if (userBalances[0].currency_type === 'crypto') originDecimals = 5;

      if (userBalances[1].currency_type === 'fiat') destinationDecimals = 2;
      else if (userBalances[1].currency_type === 'crypto')
        destinationDecimals = 5;
    }

    return (
      <div className='balance'>
        <Card>
          <Card.Content>
            <Card.Header textAlign='center'>Balance</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <Table basic='very'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>Disponible</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      {this.props.balances.userBalances
                        ? this.props.balances.userBalances[0].currency
                        : '-'}
                    </Table.Cell>
                    <Table.Cell>
                      {this.props.balances.userBalances
                        ? parseFloat(
                            this.props.balances.userBalances[0].balance
                          ).toFixed(originDecimals)
                        : '-'}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      {this.props.balances.userBalances
                        ? this.props.balances.userBalances[1].currency
                        : '-'}
                    </Table.Cell>
                    <Table.Cell>
                      {this.props.balances.userBalances
                        ? parseFloat(
                            this.props.balances.userBalances[1].balance
                          ).toFixed(destinationDecimals)
                        : '-'}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ balances, orderCreate, session }) => {
  return {
    balances,
    session,
    orderCreate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...balancesActionCreator(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
