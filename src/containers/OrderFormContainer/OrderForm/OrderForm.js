import React from 'react';

import './OrderForm.scss';

import { Button, Input } from 'semantic-ui-react'


const handleOnClick = (e, orderType) => {

};


const orderform = (props) => (
  <div className="order-form">
    <p>Price</p>
    <Input icon="dollar" iconPosition="left"/>
    <p>Amount</p>
    <Input icon="bitcoin" iconPosition="left"/>
    <p className="total-label">Total</p>
    <Input readOnly/>
    <Button className={props.type == 'sell' ? 'sell-button' : 'buy-button'}
            onClick={(e) => handleOnClick(e, props.type)}>
              {props.type == 'sell' ? "CREATE SELL ORDER" : "CREATE BUY ORDER"}
    </Button>
  </div>
);

export default orderform;
