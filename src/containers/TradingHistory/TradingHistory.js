import React from 'react';

import './TradingHistory.scss';

import { Card, Table } from 'semantic-ui-react'

const tradinghistory = (props) => (
  <div className="trading-history">
    <Card centered={false}>
      <Card.Content>
        <Card.Header textAlign='center'>
          Trading History
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>
          <Table basic='very' textAlign='center'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Amount</Table.HeaderCell>
                <Table.HeaderCell>Total</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>210</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>10</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>210</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>10</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>210</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>10</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>210</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>10</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default tradinghistory;
