import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { orderCreateActionCreator } from './redux/actions';
import './OrderForm.scss';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      amount: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    //
    // Potentially need to manually validate fields here?
    //

    // Send a POST request to the server with the formData
    let token;
    if (this.props.session.user) {
      token = this.props.session.user.token;
    }
    const orderData = {
      price: this.state.price,
      amount: this.state.amount,
      order_type: this.props.type,
      currency_pair: this.props.currentCurrencyPair.current
    };
    this.props.createOrder(token, orderData);
  }

  render() {
    const { price, amount } = this.state;

    if (this.props.orderCreate.success) {
      this.setState({
        price: 0,
        amount: 0
      });
      this.props.resetSuccess();
    }

    return (
      <div className='order-form'>
        <Form onSubmit={this.handleSubmit}>
          <p>
            <b>Price</b>
          </p>
          <p>
            {this.props.currentCurrencyPair
              ? this.props.currentCurrencyPair.currentDestination
              : ''}
          </p>
          <Form.Input
            name='price'
            iconPosition='left'
            onChange={this.handleInputChange}
            value={price}
          />
          <p>
            <b>Amount</b>
          </p>
          {this.props.currentCurrencyPair
            ? this.props.currentCurrencyPair.currentOrigin
            : ''}
          <Form.Input
            name='amount'
            iconPosition='left'
            onChange={this.handleInputChange}
            value={amount}
          />
          <p className='total-label'>Total</p>
          <Form.Input readOnly />
          <Form.Button
            className={this.props.type == 'sell' ? 'sell-button' : 'buy-button'}
            type='submit'
          >
            {this.props.type == 'sell'
              ? 'CREATE SELL ORDER'
              : 'CREATE BUY ORDER'}
          </Form.Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ orderCreate, session }) => {
  return {
    orderCreate,
    session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...orderCreateActionCreator(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
