import React from 'react';

import './Balance.scss';

import { Card, Table } from 'semantic-ui-react'

const balance = (props) => (
  <div className="balance">
    <Card>
      <Card.Content>
        <Card.Header textAlign='center'>
          Balance
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>
          <Table basic="very">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>Disponible</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>USD</Table.Cell>
                <Table.Cell>10</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>BTC</Table.Cell>
                <Table.Cell>0.98124</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default balance;
