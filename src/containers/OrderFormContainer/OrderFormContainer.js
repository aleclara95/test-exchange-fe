import React from 'react';

import './OrderFormContainer.scss';

import { Card, Tab } from 'semantic-ui-react';

import OrderForm from './OrderForm/OrderForm';

const orderformcontainer = props => {
  const panes = [
    {
      menuItem: 'Buy',
      render: () => (
        <Tab.Pane>
          <OrderForm
            currentCurrencyPair={props.currentCurrencyPair}
            type='buy'
          ></OrderForm>
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Sell',
      render: () => (
        <Tab.Pane>
          <OrderForm
            currentCurrencyPair={props.currentCurrencyPair}
            type='sell'
          ></OrderForm>
        </Tab.Pane>
      )
    }
  ];
  return (
    <div className='order-form-container'>
      <Card>
        <Card.Content>
          <Card.Header textAlign='center'>Order Form</Card.Header>
        </Card.Content>
        <Card.Content>
          <Tab panes={panes} />
        </Card.Content>
      </Card>
    </div>
  );
};

export default orderformcontainer;
